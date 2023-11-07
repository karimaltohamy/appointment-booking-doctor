<template>
  <div class="more_info" v-if="doctor">
    <div class="ticket_price">
      <span>Ticket Price</span>
      <h5>{{ doctor?.ticketPrice }}$</h5>
    </div>
    <div class="availbale_time">
      <h5>Availbale Time</h5>
      <div class="appointments">
        <div
          class="appointment"
          v-for="(item, index) in doctor?.timeSlots"
          :key="index"
        >
          <span class="day">{{ item.day }}</span>
          <div class="time">
            <span>{{ formatTimeToAMPM(item?.startingTime) }}</span> -
            <span>{{ formatTimeToAMPM(item?.endingTime) }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <stripe-checkout
          ref="checkoutRef"
          mode="payment"
          :pk="publishableKey"
          :line-items="lineItems"
          :success-url="successURL"
          :cancel-url="cancelURL"
          @loading="(v) => (loading = v)"
        /> -->

    <div class="btn_appointment">
      <button-primary name="Book Appointment" @click="handleRedirct" />
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "./utils/ButtonPrimary.vue";
import { onMounted, ref } from "vue";
import { loadStripe } from "@stripe/stripe-js";
import { useStore } from "vuex";

export default {
  components: { ButtonPrimary },
  props: {
    doctor: Object,
  },
  setup(props) {
    const store = useStore();
    const publishableKey = ref(process.env.PUBLISHANLE_KEY);
    const successURL = ref("http://localhost:8080/success");
    const canselURL = ref("http://localhost:8080/canslePage");
    const lineItems = [
      {
        price: "price_1O8NYzKG4U03U9qEIL2oJsfy",
        quantity: 1,
      },
    ];
    const loading = ref(false);
    const user = ref(store.state.user);
    let stripe = null;

    // handle format time to am and pm
    function formatTimeToAMPM(time24Hour) {
      const [hours, minutes] = time24Hour.split(":");
      let period = "AM";

      let hours12 = parseInt(hours);
      if (hours12 >= 12) {
        period = "PM";
        if (hours12 > 12) {
          hours12 -= 12;
        }
      }

      hours12 = hours12.toString().padStart(2, "0");

      const timeAMPM = `${hours12}:${minutes} ${period}`;

      return timeAMPM;
    }

    onMounted(async () => {
      stripe = await loadStripe(
        "pk_test_51MXOozKG4U03U9qEEk43RNLqTINvRYvsoY1Ot8dvGB8PjaLw6qOMmZapPXsY3c1MknCOhpvTCNZxgBFS9OppjINX00rsTIdB3o"
      );
    });

    const handleRedirct = async () => {
      stripe.redirectToCheckout({
        successUrl: "http://localhost:8080/success",
        cancelUrl: "http://localhost:8080/canslePage",
        lineItems: [
          {
            price: "price_1O8NYzKG4U03U9qEIL2oJsfy",
            quantity: 1,
          },
        ],
        mode: "payment",
      });

      store.commit("setBooking", {
        user: user.value._id,
        doctor: props.doctor._id,
        ticketPrice: props.doctor.ticketPrice,
      });
    };

    return {
      formatTimeToAMPM,
      publishableKey,
      successURL,
      canselURL,
      loading,
      lineItems,
      handleRedirct,
    };
  },
  methods: {
    redirect() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
<style lang="scss" scoped>
.more_info {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 4px 4px 12px rgb(238, 238, 238);

  .ticket_price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      font-size: 15px;
      color: gray;
    }

    h5 {
      margin-bottom: 0;
      font-weight: 600;
    }
  }

  .availbale_time {
    h5 {
      margin-bottom: 10px;
      font-size: 16px;
    }

    .appointments {
      margin-bottom: 30px;
      .appointment {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 14px;
          color: gray;
        }
      }
    }
  }

  .btn_primary {
    width: 100%;
    border-radius: 4px;
  }
}
</style>
