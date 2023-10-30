<template>
  <div class="more_info" v-if="doctor">
    <div class="ticket_price">
      <span>Ticket Price</span>
      <h5>{{ doctor.ticketPrice }}$</h5>
    </div>
    <div class="availbale_time">
      <h5>Availbale Time</h5>
      <div class="appointments">
        <div
          class="appointment"
          v-for="(item, index) in doctor.timeSlots"
          :key="index"
        >
          <span class="day">{{ item.day }}</span>
          <div class="time">
            <span>{{ formatTimeToAMPM(item.startingTime)  }}</span> -
            <span>{{  formatTimeToAMPM(item.endingTime) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn_appointment">
      <button-primary name="Book Appointment" />
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "./utils/ButtonPrimary.vue";
export default {
  components: { ButtonPrimary },
  props: {
    doctor: Object,
  },
  setup() {
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

    return {formatTimeToAMPM}
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
