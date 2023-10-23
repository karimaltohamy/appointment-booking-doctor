<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <div class="logo">
            <img src="../assets/images/logo.png" alt="logo" loading="lazy" />
          </div>
          <div class="copy_right">
            Copyright © 2023 Design & Developed by Karim
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="links">
            <h4>Quik Links</h4>
            <span>Home</span>
            <span>About Us</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="links">
            <h4>I want to:</h4>
            <span>find a doctor</span>
            <span>request an appointment</span>
            <span>find Loaction</span>
            <span>get an opnion</span>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="links">
            <h4>Support</h4>
            <span>Contact Us</span>
            <span>Donate</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerView",
};
</script>

<style lang="scss" scoped>
footer {
  padding: 80px 0 40px;
  background-color: rgb(5, 5, 11);
  color: white;

  .row {
    .logo {
      img {
        width: 200px;
        margin-bottom: 10px;
      }
    }

    .copy_right {
      font-size: 14px;
    }

    .links {
      h4 {
        font-size: 20px;
        margin-bottom: 7px;
      }

      span {
        font-size: 15px;
        display: block;

        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  footer {
    text-align: center;

    .row {

      .links {
          margin-top: 25px;
        
      }
    }
  }
}
</style>
