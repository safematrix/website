<template>
  <div class="VerifiableAttestation">
    <div
      class="main wow comeInTop"
      data-wow-duration="1s"
      data-wow-delay="0.4s"
    >
      <div class="left">
        <div class="title">Verifiable Attestation</div>
        <div class="content">
          Combines INTEL's Remote Authentication (RA) and Transport Layer
          Security Layer (TLS) protocols to guarantee the privacy and security
          of user data from transmission, to computation, to storage overload,
          thus building a zero-trust system
        </div>
      </div>
      <img class="img" @click="$refs.imageView.init('VerifiableAttestation')" src="~assets/img/VerifiableAttestation.png" alt="" />
    </div>
    <ImageView  ref="imageView"></ImageView>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .VerifiableAttestation {
    width: 100%;
    padding: 49px 0 48px;
    background: #f6f7f9;
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
      .img {
        margin-top: 18px;
        width: 372px;
        height: 291px;
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .VerifiableAttestation {
    padding: 71px 0 175px;
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
          width: 494px;
          @include content();
        }
      }
      .img {
        margin-left: 30px;
        width: 671px;
        height: 526px;
      }
    }
  }
}
</style>