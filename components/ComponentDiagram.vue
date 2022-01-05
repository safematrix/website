<template>
  <div class="ComponentDiagram">
    <div
      class="main wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.4s"
    >
      <div class="left">
        <div class="title">Component Diagram</div>
        <div class="content">
          Distributed deployment method increases fault tolerance; isolation
          between services increases security Core algorithms such as DKG and
          MPC run in SGX to improve security
        </div>
      </div>
      <div class="imgs">
        <img class="imgH5" src="~assets/imgH5/ComponentDiagram1.png" alt="" />
        <img class="imgH5" src="~assets/imgH5/ComponentDiagram2.png" alt="" />
      </div>
      <img class="img" src="~assets/img/ComponentDiagram.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .ComponentDiagram {
    width: 100%;
    background: #f6f7f9;
    padding: 45px 0 26px;
    .main {
      width: 100%;
      @include ColumnAlignCenter();
      .left {
        .title {
          @include titleH5();
          white-space: nowrap;
        }
        .content {
          margin-top: 18px;
          padding: 0 16px;
          @include contentH5();
        }
      }
      .img{
        display: none;
      }
      .imgs{
        margin-top: 18px;
        display: flex;
        flex-direction: column;
        .imgH5{
          width: 375px;
        }

      }
    }
  }
}
@media screen and (min-width: 800px) {
  .ComponentDiagram {
    padding: 140px 0 151px;
    width: 100%;
    background: #f6f7f9;
    display: flex;
    justify-content: center;
    .main {
      width: 1400px;
      padding-left: 60px;
      display: flex;
      align-items: center;
      .left {
        display: flex;
        flex-direction: column;
        .title {
          @include title();
          white-space: nowrap;
        }
        .content {
          margin-top: 32px;
          width: 350px;
          @include content();
        }
      }
      .imgs{
        display: none;
      }
      .img {
        margin-left: 52px;
        width: 891px;
        height: 374px;
      }
    }
  }
}
</style>