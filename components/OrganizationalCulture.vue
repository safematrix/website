<template>
  <div class="OrganizationalCulture">
    <div
      class="title wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.6s"
    >
      Organizational Culture
    </div>
    <div
      class="contents wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.8s"
    >
      <div class="content">
        At Safematrix, we pursue an organization that is open, equal,
        collaborative and shared; Instead of calling the shots from the top, we
        work with the community to grow our platform with the people involved.
        We are Web3.0 practitioners and we believe in the power of belief.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .OrganizationalCulture {
    width: 100%;
    @include ColumnAlignCenter();
    .title {
      margin-top: 57px;
      @include titleH5();
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
  .OrganizationalCulture {
    padding: 0px 0 106px;
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
