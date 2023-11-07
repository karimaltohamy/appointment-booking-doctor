const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const conactionMongodb = require("./db/database");
const bodyParser = require("body-parser")
const gloabelError = require("./middleware/globalError")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// middlewares
require("dotenv").config();

// route payment
app.post(
  "/stripe/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        "whsec_HueG24RdiqhSbAf0uDdqlRVSWtW5cPXC"
      );
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        console.log("payment_intent sucsessFull");
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  }
);

app.use(
  cors({
    credentials: true,
    origin: ["appointment-booking-doctor.vercel.app","http://localhost:8080"],
    optionsSuccessStatus: 200, // For legacy browser support
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const auth = require("./routes/auth")
const user = require("./routes/user")
const doctor = require("./routes/doctor")
const review = require("./routes/review")
const payment = require("./routes/payment")
const booking = require("./routes/booking")

app.use("/api/v1/auth", auth)
app.use("/api/v1/users", user)
app.use("/api/v1/doctors", doctor)
app.use("/api/v1/reviews", review)
app.use("/api/v1/payment", payment)
app.use("/api/v1/booking", booking)


app.get("/", (req, res) => {
  res.send("run server");
});

// conaction to mongodb
conactionMongodb();

// global error
app.use(gloabelError)

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is running on http://localhost/${process.env.PORT || 3000}`
  );
});

process.on("unhandledRejection", (err) => {
    console.log(`shutting down the server for ${err.message}`);
    console.log("shutting down the server for unhandling promise rejection");
  
    server.close(() => {
      process.exit(1);
    });
  });