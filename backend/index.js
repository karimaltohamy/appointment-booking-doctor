const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const conactionMongodb = require("./db/database");
const bodyParser = require("body-parser")
const gloabelError = require("./middleware/globalError")


// middlewares
require("dotenv").config();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:8080"],
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

app.use("/api/v1/auth", auth)
app.use("/api/v1/users", user)
app.use("/api/v1/doctors", doctor)
app.use("/api/v1/reviews", review)


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