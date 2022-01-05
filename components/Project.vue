<template>
  <div class="Project">
    <div class="main">
      <div
        class="mainTitle wow comeInTop"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <div class="title">The world's first service Web3.0 users of</div>
        <div class="title">
          Privacy Computing Technology real landing project
        </div>
      </div>
      <div class="list">
        <div class="item wow comeInLeft" data-wow-duration="1s" data-wow-delay="0.4s">
          <div class="top">
            <div class="item_title">Security-First</div>
            <img class="iconH5" src="~assets/imgH5/quotes.png" alt="" />
            <img class="icon" src="~assets/img/quotes-blue.png" alt="" />
            <img class="icon hover" src="~assets/img/quotes.png" alt="" />
          </div>
          <div class="contents">
            <div class="content">No one has the full private key</div>
            <div class="content">
              Private key can be reconfigured in case of single point failure
            </div>
            <div class="content">
              Based on trusted hardware and cryptography
            </div>
          </div>
        </div>
        <div class="item wow comeInLeft" data-wow-duration="1s" data-wow-delay="0.8s">
          <div class="top">
            <div class="item_title">Easy-to-use</div>
            <img class="iconH5" src="~assets/imgH5/quotes.png" alt="" />
            <img class="icon" src="~assets/img/quotes-blue.png" alt="" />
            <img class="icon hover" src="~assets/img/quotes.png" alt="" />
          </div>
          <div class="contents">
            <div class="content">Quickly create DAOs and tokens</div>
            <div class="content">
              Easy to manage project assets and transactions
            </div>
            <div class="content">Easy to manage membership and identity</div>
          </div>
        </div>
        <div class="item wow comeInLeft" data-wow-duration="1s" data-wow-delay="1.2s">
          <div class="top">
            <div class="item_title">High Scalability</div>
            <img class="iconH5" src="~assets/imgH5/quotes.png" alt="" />
            <img class="icon" src="~assets/img/quotes-blue.png" alt="" />
            <img class="icon hover" src="~assets/img/quotes.png" alt="" />
          </div>
          <div class="contents">
            <div class="content">
              Quickly access to Dapp as a web 3.0 portal
            </div>
            <div class="content">
              Flexible policy configuration based on requirements
            </div>
            <div class="content">
              Easy for developers to build Dapp in the platform
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .Project {
    padding: 51px 0 60px;
    width: 100%;
    @include ColumnAlignCenter();
    .main {
      @include ColumnAlignCenter();
      .mainTitle {
        @include ColumnAlignCenter();
        // opacity: 0;
        .title {
          width: 315px;
          @include titleH5();
        }
      }
      .list {
        margin-top: 30px;
        @include ColumnAlignCenter();
        .item {
          margin-bottom: 20px;
          width: 326px;
          height: 210px;
          padding: 13px 14px 0 17px;
          background: #ffffff;
          box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.3s;
          // opacity: 0;
          &:last-child {
            margin-bottom: 0;
          }
          .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .item_title {
              font-size: 18px;
              font-weight: bold;
              color: #171E29;
              line-height: 21px;
            }
            .iconH5{
              width: 65px;
              height: 60px;
            }
            .icon {
              display: none;
            }
            .hover {
              display: none;
            }
          }
          .contents {
            margin-top: 2px;
            display: flex;
            flex-direction: column;
            .content {
              @include contentH5();
              text-align: left;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .Project {
    padding: 63px 0 139px;
    width: 100%;
    min-width: 1400px;
    @include ColumnAlignCenter();
    .main {
      width: 1400px;
      @include ColumnAlignCenter();
      .mainTitle {
        @include ColumnAlignCenter();
        opacity: 0;
        .title {
          @include title();
        }
      }

      .list {
        margin-top: 49px;
        display: flex;
        justify-content: center;
        .item {
          margin-right: 38px;
          width: 390px;
          height: 346px;
          padding: 48px 17px 0 17px;
          background: #ffffff;
          box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.3s;
          opacity: 0;
          &:last-child {
            margin-right: 0;
          }
          &:hover {
            background: linear-gradient(126deg, #02daff 0%, #3662e7 100%);
            .top {
              .item_title {
                color: #fff;
              }
              .icon {
                display: none;
              }
              .hover {
                display: flex;
              }
            }
            .contents {
              .content {
                color: #fff;
              }
            }
          }
          .top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            .item_title {
              height: 40px;
              font-size: 34px;
              font-weight: bold;
              color: #171e29;
              line-height: 40px;
            }
            .icon {
              width: 64px;
              height: 55px;
              margin-right: 20px;
            }
            .iconH5{
              display: none;
            }
            .hover {
              display: none;
            }
          }
          .contents {
            margin-top: 42px;
            display: flex;
            flex-direction: column;
            .content {
              font-size: 18px;
              font-weight: 400;
              color: #666666;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
