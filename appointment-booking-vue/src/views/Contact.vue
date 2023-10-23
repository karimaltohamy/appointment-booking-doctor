<template>
  <div class="contact_page">
    <div class="container">
      <div class="head">
        <h3 class="title">Contact Us</h3>
        <p class="desc">
          It is a long established fact that a reader will be distracted by the
          readable content
        </p>
      </div>
      <div class="form_contact">
        <form action="">
          <div class="input_item">
            <label for="">Your Email</label>
            <input type="text" placeholder="example@gamil.com" />
          </div>
          <div class="input_item">
            <label for="">Subject</label>
            <input type="text" placeholder="example@gamil.com" />
          </div>
          <div class="input_item">
            <label for="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button-primary name="Submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/utils/ButtonPrimary.vue";
export default {
  name: "contactView",
  components: {
    ButtonPrimary,
  },
};
</script>

<style lang="scss" scoped>
.contact_page {
  padding: 70px 0;

  .head {
    text-align: center;

    .title {
      font-size: 35px;
      margin-bottom: 10px;
    }

    .desc {
      color: gray;
    }
  }

  .form_contact {
    max-width: 700px;
    margin: 40px  auto 0;

    .input_item {
      margin-bottom: 20px;
      label {
        display: block;
        font-weight: 600;
        margin-bottom: 4px;
      }

      input, textarea {
        width: 100%;
        padding: 7px;
        border: 1px solid rgb(207, 207, 207);
        border-radius: 5px;
        outline: none;
      }
    }
  }
}
</style>
