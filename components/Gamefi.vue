<template>
  <div class="Gamefi">
    <div
      class="main wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.4s"
    >
      <div class="left">
        <div class="title">For Gamefi</div>
        <div class="contents">
          <div class="content">Reduce the risk of trust between</div>
          <div class="content">investors, operators, and Gamefi guilds</div>
          <div class="content">Private key will not be exposed in PlayToEarn</div>
        </div>
      </div>
      <img class="img" src="~assets/img/Gamefi.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .Gamefi {
    width: 100%;
    padding: 55px 0 47px;
    .main {
      width: 100%;
      @include ColumnAlignCenter();
    }
    .left {
      @include ColumnAlignCenter();
      .title {
        margin-top: 48px;
        @include titleH5();
      }
      .contents {
        margin-top: 18px;
        .content {
          @include contentH5();
          text-align: center;
        }
      }
    }
    .img {
      margin-top: 29px;
      width: 371px;
      height: 326px;
    }
  }
}
@media screen and (min-width: 800px) {
  .Gamefi {
    width: 100%;
    padding: 193px 0 130px;
    min-width: 1400px;
    display: flex;
    justify-content: center;
    .main {
      width: 1400px;
      display: flex;
      padding-left: 120px;
    }
    .left {
      display: flex;
      flex-direction: column;
      .title {
        margin-top: 90px;
        @include title();
      }
      .contents {
        margin-top: 32px;
        .content {
          width: 319px;
          @include content();
        }
      }
    }
    .img {
      margin-left: 95px;
      width: 741px;
      height: 651px;
    }
  }
}
</style>
