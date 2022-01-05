<template>
  <div class="ArchitectureDiagram">
    <div
      class="main wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.4s"
    >
      <div class="left">
        <div class="title">Architecture Diagram</div>
        <div class="contents">
          <div class="content">
            High scalability: Seamlessly compatible with existing blockchain
            architecture and DAPP
          </div>
          <div class="content">
            Security: A composite solution consisting of cryptography, trusted
            hardware, zero-trust architecture, AI operation and maintenance with
            multi-dimensional guarantees
          </div>
          <div class="content">
            Decentralized: Nodes are distributed, highly autonomous, and
            verifiable in behavior
          </div>
        </div>
      </div>
      <img class="img" @click="$refs.imageView.init('ArchitectureDiagram')" src="~assets/img/ArchitectureDiagram.png" alt="" />
    </div>
    <ImageView  ref="imageView"></ImageView>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .ArchitectureDiagram {
    width: 100%;
    padding: 55px 0 44px;
    .main {
      width: 100%;
      @include ColumnAlignCenter();
      .left {
        margin-top: 48px;
        .title {
          @include titleH5();
          white-space: nowrap;
        }
        .contents {
          margin-top: 18px;
          .content {
            padding: 0 16px;
            @include contentH5();
          }
        }
      }
      .img {
        margin-top: 10px;
        width: 375px;
        height: 215px;
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .ArchitectureDiagram {
    width: 100%;
    padding: 265px 0 192px;
    display: flex;
    justify-content: center;
    .main {
      width: 1400px;
      padding-left: 60px;
      display: flex;
      align-items: center;
      .left {
        .title {
          @include title();
          white-space: nowrap;
        }
        .contents {
          margin-top: 32px;
          .content {
            width: 437px;
            @include content();
          }
        }
      }
      .img {
        margin-left: 10px;
        width: 893px;
        height: 521px;
      }
    }
  }
}
</style>
