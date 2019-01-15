<template>
  <div class="my-box">
    <!-- header start -->
    <div class="my-box-top">
      <x-header :left-options="{backText: ''}">
        <a slot="right" href="/home" class="home">
          <Icon type="md-home" size="30"/>
        </a>
      </x-header>

      <!-- user photo start -->
      <div class="user-photo">
        <div class="userphoto">
          <img src="/static/img/ruan.png" alt>
        </div>
        <div class="vip">
          <img src="/static/img/v.png" alt>
          <span>铁牌会员</span>
        </div>
        <div class="phone" v-show="!username">{{str}}</div>
        <div class="phone" v-show="username">{{username}}</div>
      </div>
      <!-- user photp end -->
    </div>
    <!-- header end -->
    <!-- pay order start -->
    <div class="order">
      <a class="pay">
        <p>
          <span class="iconbg">
            <Icon type="ios-card" size="25"/>
          </span>
        </p>
        <p>
          <span>待付款</span>
        </p>
      </a>
      <a class="Receiving">
        <p>
          <span class="iconbg">
            <Icon type="md-card" size="25"/>
          </span>
        </p>
        <p>
          <span>待收货</span>
        </p>
      </a>
      <a class="allOrder">
        <p>
          <span class="iconbg">
            <Icon type="md-reorder" size="25"/>
          </span>
        </p>
        <p>
          <span>全部订单</span>
        </p>
      </a>
    </div>
    <!-- pay order end -->
    <!-- user fn start -->
    <div class="user-fn">
      <i class="new"></i>
      <cellGroup v-for="v in arr" :key="v.id">
        <!-- target="_blank"  -->
        <Cell :title="v.title" to="/components/"/>
      </cellGroup>
    </div>
    <!-- user fn end -->
    <!-- user exit start -->
    <div class="userExit">
      <a href="/home"  @click="logout">退出登录</a>
    </div>

    <!-- user exit end -->
    <!-- footer start-->
    <footer>
      <div class="vipClient">
        <span class="vipLogo">唯品会</span>
        <p>唯品会客户端,特卖抢不停</p>
        <a class="vipDown" href="https://myvpal.vip.com/h5/paypass">下载</a>
      </div>
      <div class="vipHome">
        <a href="/home">唯品会首页</a>
        <a href="https://viva.vip.com/act/m/staic-page-about?wapid=vivac_314">关于我们</a>
        <a href="/My">个人中心</a>
      </div>
      <div class="copyRight">
        <p>Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
      </div>
      <div class="police">
        <i class="policeIcon"></i>
        <p>粤公网安备 44010302000068号</p>
      </div>
    </footer>
    <!-- footer end -->
  </div>
</template>

<script>
import { Icon, Input, Button, cellGroup, Cell } from "iview";
import { XHeader } from "vux";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "My",
  data() {
    return {
      msg: "my",
      str: '软软',
      arr: [
        {
          id: 1,
          title: "我的收藏",
          src: "#/collect"
        },
        {
          id: 2,
          title: "购物车历史",
          src: "#/carthistory"
        },
        {
          id: 3,
          title: "浏览历史",
          src: "#/browsinghistory"
        },
        {
          id: 4,
          title: "申请售后",
          src: "#/sale"
        },
        {
          id: 5,
          title: "零钱",
          src: "#/money"
        },
        {
          id: 6,
          title: "唯品花",
          src: "#/flower"
        },
        {
          id: 7,
          title: "优惠券",
          src: "#/coupon"
        },
        {
          id: 8,
          title: "我的唯品币",
          src: "#/vipcoin"
        },
        {
          id: 9,
          title: "收货地址",
          src: "#/address"
        },
        {
          id: 10,
          title: "修改登录密码",
          src: "#/loginpsd"
        },
        {
          id: 11,
          title: "管理支付密码",
          src: "#/paypsd"
        },
        {
          id: 12,
          title: "绑定手机",
          src: "#/phone"
        },
        {
          id: 13,
          title: "实名认证",
          src: "#/realname"
        },
        {
          id: 14,
          title: "我的银行卡",
          src: "#/bankcard"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["logout"])
  },
  computed: {
    ...mapGetters(["username"])
  },
  components: {
    XHeader,
    Icon,
    cellGroup,
    Button,
    Input,
    Cell
  },
  beforeRouteEnter(to,from,next){
    let name = localStorage.getItem('username');
    if(name){
      next()
    }
    else{
      next('./login')
    }
  }
};
</script>

<style scoped lang = 'scss'>
.my-box {
  color: #f99;
}
/deep/ .vux-header {
  background: rgba(0, 0, 0, 0);
  color: #000;
  a {
    color: #000;
  }
}
.my-box-top {
  background: url(../../static/img/userbg.png) 0 0 no-repeat;
  position: relative;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  width: 100%;
  height: 4.4rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.home {
  color: #000;
  display: block;
  margin-top: -0.1rem;
  icon {
    color: #000;
  }
}
.user-photo {
  .userphoto {
    width: 2.13333rem;
    height: 2.13333rem;
    border-radius: 50%;
    background: url(../../static/img/photo.png) 0 0 no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 1.89333rem;
      height: 1.89333rem;
      border-radius: 50%;
    }
  }
  .vip {
    text-align: center;
    padding-top: 0.05333rem;
    img {
      width: 0.45rem;

    }
    span {
      font-size: 0.25rem;
      line-height:.2rem;
      color: #98989f;
      position: relative;
      top: 0.1rem;
    }
  }
  .phone {
    text-align: center;
    color: #f99;
    font-size: 0.27333rem;
    margin-top: 0.1rem;
  }
}
.order {
  background: rgba(255, 0, 0, 0);
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  a {
    display: block;
    width: 33%;
    height: 1.5rem;
    color: #585c64;
    span.iconbg {
      display: inline-block;
      width: 0.71333rem;
      height: 0.71333rem;
      background-color: #fcf9f1;
      border-radius: 50%;
      margin: 0.2rem 0;
    }
    p {
      text-align: center;
    }
  }
}
/deep/ .ivu-icon {
  margin: 0.1rem;
}

.user-fn {
  border-top: 1px solid #ccc;
  margin: 0.53333rem 0 0;
  padding: 0 0.23rem;
  position: relative;
}
/deep/ .ivu-cell {
  border-bottom: 1px solid #eaeaea;
}
.new {
  width: 40px;
  height: 19px;
  display: block;
  background: url(../../static/img/new.png) 0 0 no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  position: absolute;
  top: 4.1rem;
  left: 5.7rem;
}

.userExit {
  padding: 0.32rem 0.4rem 0.32rem 0;
  min-height: 0.69333rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  a {
    display: block;
    text-align: center;
    width: 100%;
    color: #222;
  }
}
footer {
  background-color: #f3f4f5;
  width: 100%;
  .vipClient {
    overflow: hidden;
    padding: 0.26667rem 0.4rem;
    height: 1.52rem;
    position: relative;
    display: block;
    width: 100%;
    border-bottom: 1px solid #eaeaea;
    .vipLogo {
      float: left;
      margin: 0 0.26667rem 0 0;
      width: 1.1rem;
      height: 1.1rem;
      background: #ea4c88;
      border-radius: 0.26667rem;
      font-size: 0.32rem;
      color: #fff;
      line-height: 1.12rem;
      text-align: center;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0, #e2007e),
        color-stop(1, #d40075)
      );
    }
    p {
      float: left;
      color: #222;
      font-size: 0.27333rem;
      line-height: 0.9rem;
    }
    .vipDown {
      margin-top: 0.16rem;
      float: right;
      color: #cf3e8e;
      padding: 0 0.48667rem;
      height: 0.74667rem;
      line-height: 0.74667rem;
      border: 1px solid #cf3e8e;
      position: relative;
      border-radius: 0.05333rem;
      background-color: #f3f4f5;
    }
  }
  .vipHome {
    overflow: hidden;
    text-align: right;
    padding: 0.03rem 0.26667rem 0;
    line-height: 0.64rem;
    a {
      float: left;
      font-size: 0.27333rem;
      color: #585c64;
      padding: 0 0.13333rem;
    }
    a:nth-child(3) {
      float: right;
    }
  }
  .copyRight {
    font-size: 0.24rem;
    color: #ccc;
    text-align: center;
    line-height: 0.53333rem;
    padding: 0.4rem 0.1rem 0;
    margin: 0;
  }
  .police {
    width: 8rem;
    margin: 0 auto;
    padding: 0.53333rem 1rem;
    text-align: center;
    overflow: hidden;
    .policeIcon {
      background-image: url(../../static/img/police.png);
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      width: 0.53333rem;
      height: 0.53333rem;
      float: left;
    }
    p {
      float: left;
      height: 0.53333rem;
      line-height: 0.53333rem;
      margin: 0 0 0 0.13333rem;
      color: #ccc;
      font-size: 0.3rem;
    }
  }
}
</style>