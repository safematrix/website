<template>
  <div class="CommunicationSecurity">
    <div class="main wow comeInTop" data-wow-duration="1s" data-wow-delay='0.4s'>
      <div class="left">
        <div class="title">Communication Security</div>
        <div class="contents">
          <div class="content">
            Run core encryption and decryption algorithms in SGX to avoid
            insider mischief
          </div>
          <div class="content">
            Hackers need to breach SGX, which increases the cost of external
            attacks
          </div>
        </div>
      </div>
      <img class="img" @click="$refs.imageView.init('CommunicationSecurity')" src="~assets/img/CommunicationSecurity.png" alt="" />
    </div>
    <ImageView  ref="imageView"></ImageView>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .CommunicationSecurity {
    width: 100%;
    padding: 63px 0 53px;
    .main {
      width: 100%;
      @include ColumnAlignCenter();
      .left {
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
        height: 226px;
      }
    }
  }
}
@media screen and (min-width: 800px) {

.CommunicationSecurity {
  width: 100%;
  padding: 139px 0 166px;
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
          width: 379px;
          @include content();
        }
      }
    }
    .img {
      margin-left: 103px;
      width: 675px;
      height: 411px;
    }
  }
}
}
</style>
