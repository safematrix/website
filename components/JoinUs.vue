<template>
  <div class="joinUs">
    <div class="title">Join us</div>
    <div class="main">
      <img class="icon" src="~assets/img/email.png" alt="" />
      <form class="form" method="get" autocomplete="on">
        <input
          class="input"
          name="fname"
          autocomplete="on"
          type="email"
          placeholder="Enter your email"
        />
        <input type="submit" class="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .joinUs {
    padding: 42px 0;
    width: 100%;
    @include ColumnAlignCenter();
    .title {
      @include titleH5();
    }
    .main {
      margin-top: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 350px;
      height: 67px;
      padding: 0 10px;
      background: #f6f7f9;
      border-radius: 8px;
      .icon {
        width: 20px;
        height: 16px;
      }
      .form {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .input {
        height: 32px;
        margin: 0 8px;
        background: #f6f7f9;
        border: none;
        outline: none;
      }
      .submit {
        width: 103px;
        height: 40px;
        background: linear-gradient(
          90deg,
          #28a9ff 0%,
          #005fff 100%,
          #005fff 100%
        );
        border-radius: 2px;
        box-shadow: 0px 4px 10px 1px rgba(15, 126, 255, 0.25);
        font-size: 14px;
        font-weight: 400;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;
        border: none;
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .joinUs {
    padding: 74px 0;
    width: 100%;
    @include ColumnAlignCenter();
    .title {
      font-size: 48px;
      font-weight: bold;
      color: #171e29;
    }
    .main {
      margin-top: 47px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 732px;
      height: 67px;
      padding: 0 20px 0 28px;
      background: #f6f7f9;
      border-radius: 8px;
      .icon {
        width: 22px;
        height: 18px;
      }
      .form {
        width: 100%;
        display: flex;
        align-items: center;
      }
      .input {
        width: 100%;
        height: 32px;
        margin: 0 20px;
        background: #f6f7f9;
        border: none;
        outline: none;
      }
      .submit {
        width: 165px;
        height: 44px;
        background: linear-gradient(
          90deg,
          #28a9ff 0%,
          #005fff 100%,
          #005fff 100%
        );
        box-shadow: 0px 4px 10px 1px rgba(15, 126, 255, 0.25);
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;
        border: none;
      }
    }
  }
}
</style>
