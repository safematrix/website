<template>
  <div class="Roadmap">
    <div
      class="title wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.6s"
    >
      Roadmap
    </div>
    <img
      class="img wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.8s"
      src="~assets/img/roadmap.png"
      @click="$refs.imageView.init('roadmap')"
      alt=""
    />
    <ImageView  ref="imageView"></ImageView>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .Roadmap {
    width: 100%;
    padding: 67px 0 41px;
    @include ColumnAlignCenter();
    .title {
      @include titleH5();
    }
    .img {
      margin-top: 18px;
      width: 375px;
    }
  }
}
@media screen and (min-width: 800px) {
  .Roadmap {
    width: 100%;
    min-width: 1400px;
    padding: 91px 0 161px;
    @include ColumnAlignCenter();
    .title {
      @include title();
    }
    .img {
      margin-top: 66px;
      width: 1251px;
    }
  }
}
</style>
