<template>
  <div class="homeTop">
      <swiper style="width:100%" :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <div class="silde slide1">
            <div class="main">
              <div class="contents">
                <div class="content">We build a Secure</div>
                <div class="content">and Trustless Digital</div>
                <div class="content">Asset Platform for DAO</div>
              </div>
              <div class="buttons">
                <nuxt-link to="/Download">
                  <div class="button downLoad">DownLoad</div>
                </nuxt-link>
                <div class="button learnMore">Learn More</div>
              </div>
              <img class="homeFirst" src="~assets/img/homeFirst.png" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="silde slide2">
            <div class="main">
              <div class="text">Make Cooperation and Learning Easier</div>
              <div class="buttons">
                <nuxt-link to="/Download">
                  <div class="button downLoad">DownLoad</div>
                </nuxt-link>
                <div class="button learnMore">Learn More</div>
              </div>
              <img class="homeSecond" src="~assets/img/homeSecond.png" alt="" />
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
      <!-- <div class="left">
        <div class="DaoWallet">
          We build a Secure and Trustless Digital Asset Platform for DAO
        </div>
        <div
          class="buttonBack"
          @click="jump('https://dashboard.safematrix.io')"
        >
          <div class="button">Access</div>
        </div>
      </div>
      <img class="img" src="~assets/imgH5/contact.png" alt="" />
      <div class="images">
        <img class="pink" src="~assets/img/pink.png" alt="" />
        <img class="tradeIn" src="~assets/img/tradeIn.png" alt="" />
        <img class="tradeOut" src="~assets/img/tradeOut.png" alt="" />
      </div> -->
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
    };
  },
  methods: {
    jump(url) {
      window.open(url);
    },
  },
};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .homeTop {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 55px 0 18px;
    .slide1{
      background-image: url("~assets/imgH5/homeBack1.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .slide2{
      background-image: url("~assets/imgH5/homeBack2.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .silde {
      width: 100%;
      height: 620px;
      display: flex;
      justify-content: center;
      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        .contents {
          margin-top: 65px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .content {
            font-size: 24px;
            font-weight: 900;
            color: #ffffff;
            line-height: 30px;
          }
        }
        .text {
          margin-top: 65px;
          height: 90px;
          text-align: center;
          font-size: 24px;
          font-weight: 900;
          color: #ffffff;
          line-height: 30px;
        }
        .buttons {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          a{
            text-decoration: none;
          }
          .button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 160px;
            height: 58px;
            box-shadow: -1px 1px 24px 8px rgba(97, 137, 255, 0.21);
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
          .downLoad {
            background: #ffffff;
            color: #171e29;
          }
          .learnMore {
            border: 1px solid #ffffff;
            margin-left: 10px;
            color: #ffffff;
          }
        }
        .homeFirst {
          width: 364px;
          height: 308px;
          margin-top: 54px;
        }
        .homeSecond {
          width: 323px;
          height: 238px;
          margin-top: 93px;
        }
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .homeTop {
    width: 100%;
    min-width: 1400px;
    padding-top: 80px;
    display: flex;
    justify-content: center;
    .slide1{
      background-image: url("~assets/img/homeBack1.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .slide2{
      background-image: url("~assets/img/homeBack2.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .silde {
      width: 100%;
      display: flex;
      justify-content: center;
      
      .main {
        width: 1400px;
        height: 800px;
        position: relative;
        display: flex;
        justify-content: space-between;
        .buttons {
          position: absolute;
          top: 476px;
          left: 60px;
          display: flex;
          a{
            text-decoration: none;
          }
          .button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 175px;
            height: 58px;
            box-shadow: -1px 1px 24px 8px rgba(97, 137, 255, 0.21);
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
          .downLoad {
            background: #ffffff;
            color: #171e29;
          }
          .learnMore {
            border: 1px solid #ffffff;
            margin-left: 30px;
            color: #ffffff;
          }
        }

        .homeFirst {
          width: 727px;
          height: 615px;
          position: absolute;
          top: 116px;
          right: 30px;
        }
        .homeSecond {
          width: 537px;
          height: 396px;
          position: absolute;
          top: 270px;
          right: 30px;
        }
        .contents {
          position: absolute;
          top: 209px;
          left: 60px;
          display: flex;
          flex-direction: column;
          .content {
            font-size: 48px;
            font-weight: 900;
            color: #ffffff;
            line-height: 60px;
            letter-spacing: 1px;
          }
        }
        .text {
          position: absolute;
          top: 315px;
          left: 60px;
          font-size: 32px;
          font-weight: 900;
          color: #ffffff;
          line-height: 60px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
