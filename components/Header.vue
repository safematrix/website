<template>
  <div class="header">
    <div class="main">
      <nuxt-link to="/">
        <img class="logo" src="~assets/img/logo-blue.png" alt="" />
      </nuxt-link>
      <div class="menu">
        <div
          class="link"
          @mouseover="mouseOver('Platform')"
          @mouseout="mouseOut('Platform')"
        >
          Platform
        </div>
        <div
          class="menuDrop PlatformMenu"
          @mouseover="mouseOver('Platform')"
          @mouseout="mouseOut('Platform')"
          v-if="PlatformPc"
        >
          <nuxt-link to="/customers">
            <div class="item">Customers</div>
          </nuxt-link>
        </div>
        <div
          class="link"
          @mouseover="mouseOver('Technology')"
          @mouseout="mouseOut('Technology')"
        >
          Technology
        </div>
        <div
          class="menuDrop TechnologyMenu"
          @mouseover="mouseOver('Technology')"
          @mouseout="mouseOut('Technology')"
          v-if="TechnologyPc"
        >
          <nuxt-link to="/overview">
            <div class="item">Overview</div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="item">Github</div>
          </nuxt-link>
        </div>
        <div
          class="link"
          @mouseover="mouseOver('Resource')"
          @mouseout="mouseOut('Resource')"
        >
          Resource
        </div>
        <div
          class="menuDrop ResourceMenu"
          @mouseover="mouseOver('Resource')"
          @mouseout="mouseOut('Resource')"
          v-if="ResourcePc"
        >
          <nuxt-link to="/">
            <div class="item">Lightpaper</div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="item">Docs</div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="item">FAQ</div>
          </nuxt-link>
        </div>
        <div
          class="link"
          @mouseover="mouseOver('About')"
          @mouseout="mouseOut('About')"
        >
          About
        </div>
        <div
          class="menuDrop AboutMenu"
          @mouseover="mouseOver('About')"
          @mouseout="mouseOut('About')"
          v-if="AboutPc"
        >
          <nuxt-link to="/company">
            <div class="item">Company</div>
          </nuxt-link>
        </div>
        <div
          class="signUp"
          @click="jump('https://dashboard.safematrix.io/account/register')"
        >
          Launch App
        </div>
      </div>
      <svg
        @click="closeMenuPage"
        class="ham hamRotate ham1"
        viewBox="0 0 100 100"
        width="80"
        onclick="this.classList.toggle('active')"
      >
        <path
          class="line top"
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        />
        <path class="line middle" d="m 30,50 h 40" />
        <path
          class="line bottom"
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        />
      </svg>
      <div class="menuPage" v-if="menuPage">
        <div class="links">
          <div class="link" @click="drop('Platform')">
            <img
              class="arrow"
              v-if="Platform"
              src="~assets/imgH5/arrow-up.png"
              alt=""
            />
            <img
              class="arrow"
              v-else
              src="~assets/imgH5/arrow-down.png"
              alt=""
            />
            <span class="item">Platform</span>
            <span></span>
          </div>
          <div class="menuDrop" v-if="Platform">
            <nuxt-link to="/Customers">
              <div
                class="item"
                :class="[routeName === 'Customers' ? 'choosed' : '']"
              >
                Customers
              </div>
            </nuxt-link>
          </div>
          <div class="link" @click="drop('Technology')">
            <img
              class="arrow"
              v-if="Technology"
              src="~assets/imgH5/arrow-up.png"
              alt=""
            />
            <img
              class="arrow"
              v-else
              src="~assets/imgH5/arrow-down.png"
              alt=""
            />
            <span class="item">Technology</span>
            <span></span>
          </div>
          <div class="menuDrop" v-if="Technology">
            <nuxt-link to="/Overview">
              <div
                class="item"
                :class="[routeName === 'Overview' ? 'choosed' : '']"
              >
                Overview
              </div>
            </nuxt-link>
            <nuxt-link to="/">
              <div class="item">Github</div>
            </nuxt-link>
          </div>
          <div class="link" @click="drop('Resource')">
            <img
              class="arrow"
              v-if="Resource"
              src="~assets/imgH5/arrow-up.png"
              alt=""
            />
            <img
              class="arrow"
              v-else
              src="~assets/imgH5/arrow-down.png"
              alt=""
            />
            <span class="item">Resource</span>
            <span></span>
          </div>
          <div class="menuDrop" v-if="Resource">
            <nuxt-link to="/">
              <div class="item">Lightpaper</div>
            </nuxt-link>
            <nuxt-link to="/">
              <div class="item">Docs</div>
            </nuxt-link>
            <nuxt-link to="/">
              <div class="item">FAQ</div>
            </nuxt-link>
          </div>
          <div class="link" @click="drop('About')">
            <img
              class="arrow"
              v-if="About"
              src="~assets/imgH5/arrow-up.png"
              alt=""
            />
            <img
              class="arrow"
              v-else
              src="~assets/imgH5/arrow-down.png"
              alt=""
            />
            <span class="item">About</span>
            <span></span>
          </div>
          <div class="menuDrop" v-if="About">
            <nuxt-link to="/Company">
              <div
                class="item"
                :class="[routeName === 'Company' ? 'choosed' : '']"
              >
                Company
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PlatformPc: false,
      TechnologyPc: false,
      ResourcePc: false,
      AboutPc: false,
      Platform: false,
      Technology: false,
      Resource: false,
      About: false,
      timer: null,
      menuPage: false,
      routeName: "",
    };
  },
  mounted() {
    document.documentElement.style.overflow = "scroll";
    document.body.style.position = "static";
  },
  methods: {
    jump(url) {
      window.open(url);
    },
    closeMenuPage() {
      this.menuPage = !this.menuPage;
      if (this.menuPage) {
        document.documentElement.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = "0px";
        document.body.style.width = "100%";
        this.routeName = this.$route.name;
        this.Platform = false;
        this.Technology = false;
        this.Resource = false;
        this.About = false;
        if (this.$route.name === "Customers") {
          this.drop("Platform");
        }
        if (this.$route.name === "Overview") {
          this.drop("Technology");
        }
        if (this.$route.name === "Company") {
          this.drop("About");
        }
      } else {
        document.documentElement.style.overflow = "scroll";
        document.body.style.position = "static";
      }
    },
    mouseOver(name) {
      clearTimeout(this.timer);
      this.PlatformPc = false;
      this.TechnologyPc = false;
      this.ResourcePc = false;
      this.AboutPc = false;
      if (name === "Platform") {
        this.PlatformPc = true;
      }
      if (name === "Technology") {
        this.TechnologyPc = true;
      }
      if (name === "Resource") {
        this.ResourcePc = true;
      }
      if (name === "About") {
        this.AboutPc = true;
      }
    },
    mouseOut(name) {
      clearTimeout(this.timer);
      if (name === "Platform") {
        this.timer = setTimeout(() => {
          this.PlatformPc = false;
        }, 1000);
      }
      if (name === "Technology") {
        this.timer = setTimeout(() => {
          this.TechnologyPc = false;
        }, 1000);
      }
      if (name === "Resource") {
        this.timer = setTimeout(() => {
          this.ResourcePc = false;
        }, 1000);
      }
      if (name === "About") {
        this.timer = setTimeout(() => {
          this.AboutPc = false;
        }, 1000);
      }
    },
    drop(name) {
      if (name === "Platform") {
        this.Platform = !this.Platform;
      }
      if (name === "Technology") {
        this.Technology = !this.Technology;
      }
      if (name === "Resource") {
        this.Resource = !this.Resource;
      }
      if (name === "About") {
        this.About = !this.About;
      }
    },
  },
};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .header {
    position: fixed;
    width: 100%;
    height: 55px;
    z-index: 10000;
    box-shadow: 0px 10px 26px 0px rgba(234, 240, 255, 0.4);
    background: #fff;
    .main {
      height: 100%;
      box-sizing: border-box;
      padding: 0 10px 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        width: 174px;
        height: 29px;
      }
      .menu {
        display: none;
      }
      .menuIcon {
        width: 24px;
        height: 24px;
      }
      .ham {
        width: 48px;
        height: 48px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .hamRotate.active {
        transform: rotate(45deg);
      }
      .hamRotate180.active {
        transform: rotate(180deg);
      }
      .line {
        fill: none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke: #000000;
        stroke-width: 5.5;
        stroke-linecap: round;
      }
      .ham1 .top {
        stroke-dasharray: 40 139;
      }
      .ham1 .bottom {
        stroke-dasharray: 40 180;
      }
      .ham1.active .top {
        stroke-dashoffset: -98px;
      }
      .ham1.active .bottom {
        stroke-dashoffset: -138px;
      }
      .menuPage {
        position: fixed;
        top: 55px;
        left: 0;
        width: 100%;
        height: calc(100% - 55px);
        background: #ffffff;
        overflow: scroll;
        padding-bottom: 30px;
        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 24px;
          height: 24px;
        }
        .links{
          box-shadow: 0px 2px 14px 0px rgba(49, 102, 255, 0.16);
        }
        .link {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 60px;
          padding: 0 26px;
          border-bottom: 1px solid rgba(151, 151, 151, 0.21);
          cursor: pointer;
          .arrow {
            position: absolute;
            left: 26px;
            width: 18px;
            height: 11px;
          }
          .item {
            font-size: 14px;
            font-weight: bold;
            color: #000000;
            line-height: 32px;
          }
        }
        .menuDrop {
          @include ColumnAlignCenter();
          width: 100%;
          border-bottom: 1px solid rgba(151, 151, 151, 0.21);
          a {
            width: 100%;
            text-decoration: none;
          }
          .item {
            width: 100%;
            height: 60px;
            padding: 0 26px;
            font-size: 14px;
            font-weight: bold;
            color: #000000;
            text-align: center;
            line-height: 60px;
          }
          .choosed {
            color: #0771ff;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .header {
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 10000;
    box-shadow: 0px 10px 26px 0px rgba(234, 240, 255, 0.4);
    background-color: #fff;
    display: flex;
    justify-content: center;
    .main {
      width: 1400px;
      box-sizing: border-box;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .logo {
        width: 174px;
        height: 29px;
        cursor: pointer;
      }
      .menuIcon,
      .ham,
      .menuPage {
        display: none;
      }

      .menu {
        display: flex;
        align-items: center;
        position: relative;
        a {
          text-decoration: none;
        }
        .link {
          font-size: 16px;
          color: #000000;
          line-height: 22px;
          margin: 0 22px;
          cursor: pointer;
          font-weight: 500;
        }
        .PlatformMenu {
          left: 9px;
        }
        .TechnologyMenu {
          left: 126px;
        }
        .ResourceMenu {
          left: 243px;
        }
        .AboutMenu {
          left: 344px;
        }
        .menuDrop {
          position: absolute;
          width: 94px;
          border-radius: 2px;
          background: #ffffff;
          box-shadow: 0px 2px 11px 2px rgba(0, 0, 0, 0.08);
          top: 70px;
          padding: 6px 0;
          @include ColumnAlignCenter();
          a {
            width: 100%;
          }
          .item {
            width: 100%;
            text-align: center;
            height: 28px;
            font-size: 14px;
            font-weight: 550;
            color: #000000;
            line-height: 28px;
            margin: 3px 0;
            &:hover {
              color: #2c6cff;
              cursor: pointer;
            }
          }
        }
        .signUp {
          width: 140px;
          height: 60px;
          background: #2c6cff;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 28px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
