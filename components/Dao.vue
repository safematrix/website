<template>
  <div class="DAOID">
    <div
      class="main wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.4s"
    >
      <div class="left">
        <div class="title">DAO ID</div>
        <div class="content">
          Build DAO ID for organization to introduce broader scenarios, such as
          DAO reputation in on-chain governance
        </div>
      </div>
      <img
        class="img"
        data-wow-duration="1s"
        data-wow-delay="0.4s"
        src="~assets/img/daoid.png"
        @click="$refs.imageView.init('daoid')"
        alt=""
      />
    </div>
    <ImageView  ref="imageView"></ImageView>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .DAOID {
    padding: 67px 0 35px;
    width: 100%;
    .main {
      @include ColumnAlignCenter();
      // opacity: 0;
      .left {
        display: flex;
        flex-direction: column;
        .title {
          @include titleH5();
        }
        .content {
          margin-top: 18px;
          width: 278px;
          @include contentH5();
          text-align: center;
        }
      }
      .img {
        margin-top: 22px;
        width: 100%;
        height: auto;
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .DAOID {
    padding: 98px 0 50px;
    width: 100%;
    .main {
      min-width: 1400px;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      .left {
        display: flex;
        flex-direction: column;
        .title {
          @include title();
        }
        .content {
          margin-top: 18px;
          width: 355px;
          font-size: 24px;
          font-weight: 400;
          color: #000000;
          line-height: 38px;
        }
      }
      .img {
        margin-left: 22px;
        width: 866px;
        height: 525px;
      }
    }
  }
}
</style>