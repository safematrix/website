<template>
  <div>
    <Header></Header>
    <div class="Download">
      <div class="main">
        <img class="img" src="~assets/img/download.png" alt="" />
        <div class="right">
          <div class="title">Safematrix</div>
          <div class="content">Conveniently manage your digital assets on-the-go.</div>
          <div class="imgs">
            <img class="app" src="~assets/img/AppStore.png" alt="" />
            <img class="google" src="~assets/img/GooglePlay.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .Download {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 55px;
    .main {
      padding:42px 0; 
      @include ColumnAlignCenter();
      .img {
        width: 310px;
        height: 305px;
      }
      .right {
        @include ColumnAlignCenter();
        .title {
          margin-top: 23px;
          @include titleH5();

        }
        .content{
          margin-top: 12px;
          @include contentH5();
        }
        .imgs {
          margin-top: 18px;
          @include ColumnAlignCenter();
          .app {
            width: auto;
            height: 57px;
          }
          .google {
            width: auto;
            margin-top: 18px;
            height: 57px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .Download {
    width: 100%;
    height: 783px;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    .main {
      padding-top: 181px;
      width: 1400px;
      display: flex;
      .img {
        width: 460px;
        height: 451px;
        margin-right: 213px;
        margin-left: 60px;
      }
      .right {
        display: flex;
        flex-direction: column;
        .title {
          margin-top: 82px;
          font-size: 36px;
          font-weight: bold;
          color: #171e29;
          line-height: 43px;
        }
        .content{
          width: 300px;
          margin-top: 26px;
          font-size: 18px;
          font-weight: 400;
          color: #666666;
          line-height: 30px;
        }
        .imgs {
          margin-top: 60px;
          display: flex;
          .app {
            width: auto;
            height: 69px;
          }
          .google {
            width: auto;
            margin-left: 50px;
            height: 69px;
          }
        }
      }
    }
  }
}
</style>
