<template>
  <div class="login-psd-box">
    <!-- header start -->
    <x-header>密码登录</x-header>
    <!-- header end -->
    <!-- login start -->
    <div class="login">
      <form action>
        <p>
          <span>登录名</span>
          <Input
            placeholder="请输入手机号"
            clearable
            style="width:80% ; outline:none;"
            size="large"
            name="phone"
            id="phone"
            v-model="user.username"
          />
        </p>
        <p>
          <span>密码</span>
          <Input
            placeholder="请输入密码"
            clearable
            style="width:50%;outline:none;"
            size="large"
            data-placeholder="密码"
            name="password"
            type='password'
            v-model="user.password"
          />
          <i class="eye"></i>
        </p>
        <div class="submit-box">
          <Button class="submit-btn"  @click="login(user)">登录</Button>
          <div class="protocol">
            <span class="agreen"></span>

            <div class="tk">
              <span>同意</span>
              <a
                href="https://viva.vip.com/act/m/service_provision_20161116?wapid=vivac_503"
              >《唯品会服务条款》</a>
              <a
                href="https://viva.vip.com/act/m/user_protection_policy_20160809?wapid=vivac_385"
              >《隐私条款》</a>
              <a href="https://move.vpal.com/member/terms.html">《唯品支付用户服务协议》</a>
              <a href="https://grcredit.vip.com/h5/protocol">《唯品信用服务协议》</a>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- login end -->
    <!-- footer start -->
    <footer>
      <legend>或</legend>
      <a href="/login" class="psd">
       注册
      </a>
    </footer>
    <!-- footer end -->
  </div>
</template>

<script>
import { XHeader } from "vux";
import { Icon, Input, Button } from "iview";
import { mapActions  } from "vuex";
export default {
  name: "Login-psd",
  data() {
    return {
      msg: "login-psd",
      user: {
        username: "",
        password: ""
      }
    };
  },
   methods: {
    ...mapActions(["login"])
  },
  components: {
    Icon,
    Input,
    Button,
    XHeader
  },

};
</script>

<style scoped lang = 'less'>
.login-psd-box {
  background: #f3f4f5;
  height: 100rem;
}
/deep/ .vux-header {
  background: #fff;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
  .vux-header-title {
    color: #000;
  }
  .vux-header-back {
    color: #fff;
  }
}
.login {
  display: block;
  height: 5rem;
}
form {
  p {
    height: 52px;
    background: #fff;
    position: relative;
    line-height: 52px;
    padding-left: 15px;
    padding-right: 0;
    clear: both;
    border-bottom: 1px solid #e7e7e7;
    display: flex;
    span {
      color: #000;
      font-size: 16px;
      margin-right: 15px;
      height: 52px;
      line-height: 52px;
      padding: 0;
      display: inline-block;
      position: relative;
      width: auto;
    }
    .eye {
      width: 50px;
      height: 52px;
      background: url(../../static/img/eye.png) no-repeat 50%;
      background-size: 50% auto;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }
    input {
      flex: 2;
      float: left;
    }
  }
  .submit-box {
    padding: 30px 15px 0;
    .submit-btn {
      background: #de3d96;
      color: #fff;
      text-decoration: none !important;
      text-align: center;
      border-radius: 3px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 16px;

      display: block;
      height: 1rem;
      line-height: 100%;
      pointer-events: auto;
      width: 100%;
    }
    .protocol {
      margin-top: 0.3rem;
      width: 100%;
      position: relative;
      color: #000;
      font-size: 0.27rem;
      .agreen {
        display: inline-block;
        margin-right: 2px;
        position: absolute;
        width: 21px;
        height: 22px;
        vertical-align: middle;
        background-image: url(../../static/img/agreen.png);
        background-repeat: no-repeat;
        background-position: 0 -22px;
        background-size: 100%;
        cursor: pointer;
      }
      .tk {
        margin-left: 24px;
      }
    }
  }
}
form /deep/ .ivu-input {
  border: 0;
  height: 95%;
  outline: none;
  box-shadow: none;
}
form /deep/ .ivu-btn {
  border: 0;
  height: 95%;
  outline: none;
  box-shadow: none;
}
.form /deep/ .ivu-input-icon-clear {
  color: #fff;
  background: #e4e3e6;
}
footer {
  margin-top: 0.8rem;
  position: relative;
  height: 120px;
  text-align: center;
  clear: both;
  color: #dbdbdb;
  border-top: 1px solid #dbdbdb;
  border-right: 0;
  font-size: 12px;
  border-left: 0;
  border-bottom: 0;
  legend {
    display: block;
    background: #f3f4f5;
    position: absolute;
    left: 45%;
    top: -0.15rem;
    width: 32px;
    font-size:.26rem;
  }
  .psd {
     width:3rem;;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
    border-radius: 0.09rem;
    display: block;
    border: 1px solid #e4007f;
    color: #e4007f;
    text-decoration: none;
    margin: 0.5rem auto;
    font-size: 14px;
  }
}
</style>