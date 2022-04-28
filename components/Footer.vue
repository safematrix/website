<template>
  <div class="footer">
    <div class="main">
      <nuxt-link to="/">
        <img class="logo" src="~assets/img/logo-white.png" alt="" />
      </nuxt-link>
      <div class="lists">
        <div class="list">
          <div class="title">Platform</div>
          <div class="items">
            <nuxt-link to="/customers">
              <div class="item">Customers</div>
            </nuxt-link>
          </div>
        </div>
        <div class="list">
          <div class="title">Technology</div>
          <div class="items">
            <nuxt-link to="/overview">
              <div class="item">Overview</div>
            </nuxt-link>
            <div class="item">Github</div>
          </div>
        </div>
        <div class="list">
          <div class="title">Resource</div>
          <div class="items">
            <div class="item">Lightpaper</div>
            <div class="item">Docs</div>
            <div class="item">FAQ</div>
          </div>
        </div>
        <div class="list">
          <div class="title">About</div>
          <div class="items">
            <nuxt-link to="/company">
              <div class="item">Company</div>
            </nuxt-link>
            <nuxt-link to="/privacy">
              <div class="item">Privacy Policy</div>
            </nuxt-link>
          </div>
        </div>
        <div class="list">
          <div class="title">Follow us</div>
          <div class="icons">
            <img class="icon" src="~assets/img/Twitter.png" alt="" />
            <img class="icon" src="~assets/img/Telegram.png" alt="" />
            <img class="icon" src="~assets/img/Github.png" alt="" />
            <img class="icon" src="~assets/img/Medium.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .footer{
    width: 100%;
    background: #2C6CFF;
    padding: 0px 32px 65px 32px;
    .main{
      width: 100%;
      .logo{
        margin-top: 41px;
        width: 174px;
        height: 29px;
      }
      .lists{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .list {
          width: 50%;
          .title {
            margin-top: 50px;
            font-size: 20px;
            font-weight: 500;
            color: #ffffff;
            line-height: 24px;
          }
          .icons {
            display: flex;
            margin-top: 50px;
            .icon {
              width: 32px;
              height: 32px;
              margin-right: 16px;
              cursor: pointer;
            }
          }
          .items {
            margin-top: 32px;
            display: flex;
            flex-direction: column;
            a {
              text-decoration: none;
            }
            .item {
              margin-bottom: 4px;
              font-size: 14px;
              font-weight: 400;
              color: #ffffff;
              line-height: 32px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .footer {
    width: 100%;
    min-width: 1400px;
    background: #2c6cff;
    display: flex;
    justify-content: center;
    padding: 89px 0 52px;
    .main {
      width: 1400px;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      .logo {
        width: 174px;
        height: 29px;
        cursor: pointer;
      }
      .lists {
        width: 1000px;
        display: flex;
        justify-content: space-around;
      }
      .list {
        flex: 1;
        display: flex;
        flex-direction: column;
        .title {
          height: 24px;
          font-size: 20px;
          font-weight: 500;
          color: #ffffff;
          line-height: 24px;
        }
        .icons {
          display: flex;
          margin-top: 50px;
          .icon {
            width: 32px;
            height: 32px;
            margin-right: 16px;
            cursor: pointer;
          }
        }
        .items {
          margin-top: 21px;
          display: flex;
          flex-direction: column;
          a {
            text-decoration: none;
          }
          .item {
            height: 32px;
            font-size: 14px;
            font-weight: 400;
            color: #ffffff;
            line-height: 32px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
