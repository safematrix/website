<template>
  <div class="GlobalLeaders">
    <div
      class="title wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.2s"
    >
      Global Leaders in Private Computing
    </div>
    <div
      class="contents wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.4s"
    >
      <div class="content">
        Safematrix is the world's first innovative combination of MPC, TEE and
        ZKP technologies to solve the problem of secure and trustless crypto
        asset custody. The team has brought a number of R&D breakthroughs in
        private computing technology and has deep knowledge and experience of
        deploying complex cryptography systems to Web3.0.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .GlobalLeaders {
    padding-top: 55px;
    width: 100%;
    @include ColumnAlignCenter();
    .title {
      margin-top: 48px;
      @include titleH5();
      width: 200px;
    }
    .contents {
      @include ColumnAlignCenter();
      margin-top: 18px;
      .content {
        text-align: center;
        padding: 0 16px;
        @include contentH5();
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .GlobalLeaders {
    padding: 204px 0 106px;
    width: 100%;
    min-width: 1400px;
    @include ColumnAlignCenter();
    .title {
      @include title();
    }
    .contents {
      @include ColumnAlignCenter();
      margin-top: 35px;
      .content {
        width: 962px;
        text-align: left;
        @include content();
      }
    }
  }
}
</style>
