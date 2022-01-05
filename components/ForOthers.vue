<template>
  <div class="ForOthers">
    <div class="main">
      <div
        class="items Exchanges wow comeInTop"
        data-wow-duration="1s"
        data-wow-delay="0.4s"
      >
        <div class="left">
          <div class="title">For Exchanges</div>
          <div class="content">
            Suitable for large amount of money transfer transactions on the
            exchange, the transfer transaction requires the consent of all
            participating management members to ensure the security of the
            assets.
          </div>
        </div>
        <div class="right">
          <img class="img" src="~assets/img/coinbbase.png" alt="" />
          <img class="img" src="~assets/img/binance.png" alt="" />
        </div>
      </div>
      <div
        class="items AssetManagers wow comeInTop"
        data-wow-duration="1s"
        data-wow-delay="0.4s"
      >
        <div class="left">
          <div class="title">For Asset Managers</div>
          <div class="content">
            Flexible and customizable transaction approval flow to guarantee the
            security and controllability of each fund.
          </div>
        </div>
        <div class="right">
          <img class="img" src="~assets/img/paradigm.png" alt="" />
          <img class="img" src="~assets/img/alameda.png" alt="" />
        </div>
      </div>
      <div
        class="items ComplianceCustodian wow comeInTop"
        data-wow-duration="1s"
        data-wow-delay="0.4s"
      >
        <div class="left">
          <div class="title">For Compliance Custodian</div>
          <div class="content">
            Removing the risk of single point failure of private key. It also
            guarantees the privacy and security of data through TEE technology,
            as well as the compliance of digital assets in circulation through
            the industry's top risk control services.
          </div>
        </div>
        <div class="right">
          <img class="img" src="~assets/img/MicroStrategy.png" alt="" />
          <img class="img" src="~assets/img/galaxy.png" alt="" />
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
  .ForOthers {
    width: 100%;
    padding-top: 38px;
    .main {
      width: 100%;
      @include ColumnAlignCenter();
    }
    .items {
      @include ColumnAlignCenter();
      margin-bottom: 77px;
    }
    .left {
      @include ColumnAlignCenter();
      .title {
        @include titleH5();
      }
      .content {
        margin-top: 18px;
        @include contentH5();
          text-align: center;
        padding: 0 5px;
      }
    }
    .right {
      margin-top: 34px;
      display: flex;
      justify-content: center;
      .img {
        margin:0 20px;
        width: 100px;
        height: 100px;
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .ForOthers {
    width: 100%;
    padding: 249px 0 312px;
    min-width: 1400px;
    @include ColumnAlignCenter();
    .main {
      width: 1400px;
      padding-left: 120px;
    }
    .items {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 218px;
      &:first-child {
        margin-top: 0;
      }
    }
    .Exchanges .content {
      width: 349px;
    }
    .AssetManagers .content {
      width: 369px;
    }
    .ComplianceCustodian .content {
      width: 409px;
    }
    .left {
      width: 409px;
      display: flex;
      flex-direction: column;
      .title {
        @include title();
      }
      .content {
        margin-top: 29px;
        @include content();
      }
    }
    .right {
      display: flex;
      .img {
        margin-left: 105px;
        width: 290px;
        height: 290px;
      }
    }
  }
}
</style>
