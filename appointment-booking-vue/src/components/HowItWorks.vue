<template>
  <div class="how_it_works_section">
    <div class="container">
      <div class="head text-center">
        <h3 class="title">Providing the best medical services</h3>
        <p class="desc">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div class="boxs">
        <div class="box">
          <div class="icon">
            <img src="../assets/images/icon01.png" alt="icon" loading="lazy" />
          </div>
          <h4>Find a Doctor</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <img src="../assets/images/icon02.png" alt="icon" loading="lazy" />
          </div>
          <h4>Find a Location</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <img src="../assets/images/icon03.png" alt="icon" loading="lazy" />
          </div>
          <h4>Book a Appointment</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.how_it_works_section {
  padding: 70px 0;

  .head {
    max-width: 700px;
    margin: auto;

    .desc {
      font-size: 15px;
      color: gray;
    }
  }

  .boxs {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 70px;

    .box {
      text-align: center;
      .icon {
        margin-bottom: 15px;
        img {
          width: 200px;
          max-width: 100%;
          height: 150px;
          object-fit: contain;
        }
      }

      h4 {
        font-size: 22px;
        margin-bottom: 5px;
      }

      p {
        font-size: 14px;
        color: gray;
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .how_it_works_section {
    padding: 40px 0;

    .head {
      .title {
        font-size: 23px;
      }

      .desc {
        font-size: 13px;
      }
    }

    .boxs {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 20px;
      margin-top: 40px;
    }
  }
}
</style>
