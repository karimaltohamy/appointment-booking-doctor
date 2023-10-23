<template>
  <div class="more_info">
    <div class="ticket_price">
      <span>Ticket Price</span>
      <h5>500$</h5>
    </div>
    <div class="availbale_time">
      <h5>Availbale Time</h5>
      <div class="appointments">
        <div class="appointment">
          <span class="day">Sunday</span>
          <div class="time">
            <span>4:00PM</span> -
            <span>9:30PM</span>
          </div>
        </div>
        <div class="appointment">
          <span class="day">Tuesday</span>
          <div class="time">
            <span>4:00PM</span> -
            <span>9:30PM</span>
          </div>
        </div>
        <div class="appointment">
          <span class="day">Wendesday</span>
          <div class="time">
            <span>4:00PM</span> -
            <span>9:30PM</span>
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
