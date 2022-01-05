<template>
  <div class="Defi">
    <div
      class="main wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.4s"
    >
      <div class="left">
        <div class="title">For Defi</div>
        <div class="contents">
          <div class="content">
            Help users manage multiple assets more easily
          </div>
          <div class="content">
            Each project can have its own separate budget
          </div>
        </div>
      </div>
      <img class="img" src="~assets/img/Defi.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .Defi {
    width: 100%;
    background: #f6f7f9;
    padding: 45px 0 54px;
    .main {
      width: 100%;
      @include ColumnAlignCenter();
    }
    .left {
      @include ColumnAlignCenter();
      .title {
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
      margin-top: 33px;
      width: 366px;
      height: 326px;
    }
  }
}
@media screen and (min-width: 800px) {
  .Defi {
    width: 100%;
    background: #f6f7f9;
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
        margin-top: 105px;
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
