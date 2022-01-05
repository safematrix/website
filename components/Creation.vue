<template>
  <div class="Creation">
    <div class="main">
      <div
        class="title wow comeInTop"
        data-wow-duration="1s"
        data-wow-delay="0.4s"
      >
        Quick Creation
      </div>
      <div
        class="contents wow comeInTop"
        data-wow-duration="1s"
        data-wow-delay="0.6s"
      >
        <div class="content">
          Creating a DAO from zero to DAO in a few minutes
        </div>
        <div class="content">
          Creating your DAO's Governance Token is so easy and secure
        </div>
      </div>
      <img
        class="img wow comeInTop"
        data-wow-duration="1s"
        data-wow-delay="0.8s"
        src="~assets/img/creation.png"
        @click="$refs.imageView.init('creation')"
        alt=""
      />
    </div>
    <ImageView  ref="imageView"></ImageView>
  </div>
</template>
<script>

</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .Creation {
    width: 100%;
    background: #f6f7f9;
    padding: 28px 0 39px;
    .main {
      @include ColumnAlignCenter();
      .title {
        @include titleH5();
      }
      .contents {
        margin-top: 18px;
        @include ColumnAlignCenter();
        .content {
          @include contentH5();
          text-align: center;
        }
      }
      .img {
        margin-top: 12px;
        width: 100%;
        height: auto;
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .Creation {
    width: 100%;
    background: #f6f7f9;
    padding: 65px 0 81px;
    .main {
      min-width: 1400px;
      @include ColumnAlignCenter();
      .title {
        @include title();
      }
      .contents {
        margin-top: 18px;
        @include ColumnAlignCenter();
        .content {
          @include content();
        }
      }
      .img {
        margin-top: 47px;
        width: 1168px;
        height: 612px;
      }
    }
  }
}
</style>