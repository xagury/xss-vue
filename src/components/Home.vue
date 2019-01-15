<template>
  <div class="home-box">
    <!-- product start -->
    <div class="product">
      <Header></Header>
      <tab :line-width="2" active-color="#fc378c" v-model="index">
        <tab-item
          class="vux-center"
          :selected="demo2 === item"
          v-for="(item, index) in list2"
          @click="demo2 = item"
          :key="index"
        >{{item}}</tab-item>
      </tab>

      <swiper v-model="index" height="3000px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">
            <!-- banner start -->
            <swiper auto height="150px">
              <swiper-item>
                <img src="/static/img/banner-home.jpg" alt>
              </swiper-item>
              <swiper-item>
                <img src="/static/img/banner-home.jpg" alt>
              </swiper-item>
              <swiper-item>
                <img src="/static/img/banner-home.jpg" alt>
              </swiper-item>
            </swiper>
            <!-- banner end -->
            <!-- main start -->
            <main>
              <!-- discount start-->
              <div class="main-top">
                <div class="main-banner1">
                  <img src="/static/img/banner2.gif" alt>
                </div>
                <div class="main-banner2">
                  <div class="main-banner2-1">
                    <img src="/static/img/banner1.jpg" alt>
                  </div>
                  <div class="main-banner2-2">
                    <img src="/static/img/banner2.jpg" alt>
                  </div>
                  <div class="main-banner2-3">
                    <img src="/static/img/banner3.jpg" alt>
                  </div>
                </div>
              </div>
              <!-- discount end-->
              <!-- mainProduct start-->
              <div class="main-product">
                <div class="ulTop">
                  <ul>
                    <li v-for="v in arrImg" :key="v.id">
                      <a href="javascript:void(0)">
                        <img :src="v.imgsrc" alt>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="ulBottom">
                  <ul>
                    <li v-for="v in arrImg2" :key="v.id">
                      <a href="javascript:void(0)">
                        <img :src="v.imgsrc" alt>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- mainProduct end-->
              <!-- vp Shopping Spree start -->
              <div class="main-price">
                <div class="count">
                  <span>{{clock}}</span>
                  <span>|</span>
                  <span>还剩</span>
                  <div class="countDown">
                    <clocker :time="time1">
                      <span class="day">%_H1%_H2</span> :
                      <span class="day">%_M1%_M2</span> :
                      <span class="day">%_S1%_S2</span>
                    </clocker>
                  </div>
                </div>
                <div class="countShop">
                    <ul>
                      <li v-for="count in arrCount" :key="count.id">
                        <img :src="count.imgsrc" alt>
                        <span class="kqj">快抢价</span>
                        <span class="price">￥{{count.price}}</span>
                        <span class="yprice">￥{{count.yoriginalPrice}}</span>
                        <a href="/shopDetail" id="cartJoin" @click="addCar(good)">
                          <Icon type="ios-bowtie" size="30"/>
                        </a>
                      </li>
                    </ul>
                </div>
              </div>
              <!-- vp Shopping Spree end -->
              <!-- main-crazy start-->
              <div class="main-crazy">
                <!-- countDown -->
                <div class="count">
                  <div class="countDown">
                    <clocker :time="time1">
                      <span class="day">%_H1%_H2</span> :
                      <span class="day">%_M1%_M2</span> :
                      <span class="day">%_S1%_S2</span>
                    </clocker>
                  </div>
                </div>
                <!-- shop -->
                <div class="crazyShop">
                  <ul>
                    <li v-for="crazy in arrShop" :key="crazy.id">
                      <div class="ruan">
                        <img :src="crazy.imgsrc" alt>
                        <img :src="crazy.logo" class="logo" alt>
                        <span class="three">3折封顶</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- main-crazy  end-->
              <div class="main-sale"></div>
              <!-- main-body start-->
              <div class="main-body">
                <ul>
                  <li v-for="mb in arrBody" :key="mb.id">
                    <div class="shopping">
                      <img :src="mb.imgsrc" alt>
                      <div class="desc">
                        <div class="desc-top">
                          <span class="title">{{mb.desc}}</span>
                          <span class="time">{{mb.time}}</span>
                        </div>
                        <div class="desc-bottom">
                          <span>
                            <span class="discount">{{mb.discount}}</span>折起
                          </span>
                          <span class="intro">{{mb.intro}}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- main-body end -->
            </main>
            <!-- main end -->
          </div>
        </swiper-item>
      </swiper>
    </div>
    <!-- product end -->
    <!-- footer start -->
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
    <!-- returnTop start -->
    <div class="return-top">
      <BackTop :height="100" :bottom="31">
        <div class="top">
          <img src="/static/img/returnTop.svg" alt>
        </div>
      </BackTop>
    </div>
    <!-- returnTop end -->
    <!-- cart start -->
    <div class="cart">
      <a href="/showCart">
        <Affix :offset-bottom="30" width="1rem">
          <span class="demo-affix">
            <Icon type="md-cart" size="30"/>

            <span class="count">{{total.num}}</span>
          </span>
        </Affix>
      </a>
    </div>

    <!-- cart end -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "./commons/Header";
import Vue from "vue";
import {
  XHeader,
  Actionsheet,
  TransferDom,
  ButtonTab,
  ButtonTabItem,
  Tab,
  TabItem,
  Sticky,
  Divider,
  XButton,
  Swiper,
  SwiperItem,
  Clocker,
  Cell,
  Group
} from "vux";
import { BackTop, Icon, Affix } from "iview";
const list = () => [
  "今日推荐",
  "美妆",
  "母婴",
  "国际",
  "家电",
  "软软",
  "芙七",
  "甜心"
];
const list1 = () => ["home", "beauty", "baby", "international", "appliance"];
export default {
  name: "Home",
  data() {
    return {
      msg: "home1",
      index01: 0,
      list2: list(),
      demo2: "今日推荐",
      index: 0,
      clock: "早10点场",
      arrImg: [
        { id: 1, imgsrc: "./static/img/index(4).jpg" },
        { id: 2, imgsrc: "./static/img/index(5).jpg" },
        { id: 3, imgsrc: "./static/img/index(6).jpg" },
        { id: 4, imgsrc: "./static/img/index(7).jpg" },
        { id: 5, imgsrc: "./static/img/index(8).jpg" }
      ],
      arrImg2: [
        { id: 1, imgsrc: "./static/img/index(9).jpg" },
        { id: 2, imgsrc: "./static/img/index(10).jpg" },
        { id: 3, imgsrc: "./static/img/index(11).jpg" },
        { id: 4, imgsrc: "./static/img/index(12).jpg" },
        { id: 5, imgsrc: "./static/img/index(13).jpg" }
      ],
      arrCount: [
        {
          id: 1,
          price: 299,
          yoriginalPrice: 310,
          imgsrc: "./static/img/amn(2).jpg"
        },
        {
          id: 2,
          price: 299,
          yoriginalPrice: 310,
          imgsrc: "./static/img/amn(3).jpg"
        },
        {
          id: 3,
          price: 299,
          yoriginalPrice: 310,
          imgsrc: "./static/img/amn(4).jpg"
        },
        {
          price: 299,
          yoriginalPrice: 310,
          imgsrc: "./static/img/amn(5).jpg"
        }
      ],
      arrShop: [
        {
          id: 1,
          logo: "./static/img/1.png",
          imgsrc: "./static/img/index(15).jpg"
        },
        {
          id: 2,
          logo: "./static/img/2.png",
          imgsrc: "./static/img/index(16).jpg"
        },
        {
          id: 3,
          logo: "./static/img/3.png",
          imgsrc: "./static/img/index(17).jpg"
        }
      ],
      arrBody: [
        {
          id: 1,
          discount: 0.7,
          imgsrc: "./static/img/main-body1.jpg",
          time: "剩22时",
          desc: "仅限24小时-法曼斯男女装今日大牌专场",
          intro: "| 法曼斯，全场折上7折！"
        },
        {
          id: 2,
          discount: 1.5,
          imgsrc: "./static/img/main-body2.jpg",
          time: "剩2天",
          desc: "好货继续 LAVI女童高分潮品专场",
          intro: "| LAVI 全场折上6.5折！"
        },
        {
          id: 3,
          discount: 1.6,
          imgsrc: "./static/img/main-body3.jpg",
          time: "剩5天",
          desc: "Amy Dear皮草女装上新精选， 不说了你自己看吧！",
          intro: ""
        },
        {
          id: 4,
          discount: 2,
          imgsrc: "./static/img/main-body4.jpg",
          time: "剩2天",
          desc: "百家好旗下Mind Bridge女装专场",
          intro: ""
        },
        {
          id: 5,
          discount: 8.5,
          imgsrc: "./static/img/main-body5.jpg",
          time: "剩2天",
          desc: "TOM FORD彩妆专场",
          intro: ""
        },
        {
          id: 6,
          discount: 2.1,
          imgsrc: "./static/img/main-body6.jpg",
          time: "剩2天",
          desc: "HR赫莲娜专柜同款专场",
          intro: ""
        },
        {
          id: 7,
          discount: 2.3,
          imgsrc: "./static/img/main-body7.jpg",
          time: "剩1天",
          desc: "你好派克-COCO LIMITED派克服热卖专场",
          intro: ""
        }
      ],
      time1: "2018-12-29 00:00",
      showSpace: false,
      disabled:
        typeof navigator !== "undefined" &&
        /iphone/i.test(navigator.userAgent) &&
        /ucbrowser/i.test(navigator.userAgent)
    };
  },
  created() {
    setTimeout(() => {
      this.time1 = "2018-12-24 01:00";
    }, 5000);
  },
  components: {
    Header,
    ButtonTab,
    ButtonTabItem,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Clocker,
    Cell,
    Group,
    BackTop,
    Icon,
    Affix
  },
  methods: {
    onItemClick(index) {
      console.log("on item click:", index);
    }
  },
  directives: {
    TransferDom
  },
  computed: {
    ...mapGetters(["total"])
  }
};
</script>

<style scoped lang= 'less'>
.home-box {
  color: #f99;
}
.home-box /deep/ .vux-swiper-item {
  height: 1.5rem;
  background-color: #f3f4f5;
  img {
    width: 100%;
    height: auto;
  }
}
main {
  width: 100%;
  height: auto;
  .main-top {
    width: 100%;
    height: auto;
    .main-banner1 {
      width: 100%;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .main-banner2 {
      display: flex;
    }
  }
  .main-product {
    ul {
      display: flex;
      li {
        float: left;
        width: 20%;
        text-align: center;
      }
    }
  }
  .main-price {
    width: 100%;
    height: 5rem;
    background: url("../../static/img/index(18).jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .count {
      position: absolute;
      top: 1.3rem;
      left: 1.2rem;
      display: flex;
      font-size: 0.3rem;
      color: #000;
      span {
        margin: 0 0.1rem;
      }
      .countDown {
        span {
          margin: 0;
        }
      }
    }
    .countShop {
      position: absolute;
      left: 0.32rem;
      top: 1.81333rem;
      ul {
        display: flex;
        overflow: hidden;
        li {
          img {
            width: 1.6rem;
            height: 1.6rem;
            display: block;
            margin-bottom: 0.3rem;
            margin-right: 0.22rem;
          }
          span {
            font-size: 0.3rem;
          }
          .kqj {
            width: 0.8rem;
            height: 0.373333rem;
            overflow: hidden;
            background-color: rgb(222, 61, 150);
            font-size: 0.24rem;
            color: rgb(255, 255, 255);
            text-align: center;
            line-height: 0.373333rem;
            white-space: nowrap;
            position: absolute;
            display: inline-block;
            margin-bottom: 0.3rem;
          }
          .price {
            margin-left: 0.8rem;
            width: 1.41333rem;
            height: 0.373333rem;
            overflow: hidden;
            font-size: 0.3rem;
            color: rgb(0, 0, 0);
            line-height: 100%;
            text-align: left;
            white-space: nowrap;
            position: absolute;
            display: inline-block;
          }
          .yprice {
            z-index: 45;

            top: 2.4rem;
            width: 2.16rem;
            height: 0.346667rem;
            overflow: hidden;
            font-size: 0.293333rem;
            color: rgb(152, 152, 159);
            text-decoration: line-through;
            text-align: left;
            white-space: nowrap;
            position: absolute;
            display: inline-block;
          }
          #cartJoin {
            position: absolute;
            bottom: -1rem;

            z-index: 10001;
            margin-left: 0.9rem;
            font-size: 0.2rem;
          }
        }
      }
    }
  }
  .main-crazy {
    width: 100%;
    height: 5rem;
    position: relative;
    background: url("../../static/img/index(3).png") no-repeat;
    background-size: 100% 100%;
    .count {
      position: absolute;
      top: 1.112rem;
      left: 2.32rem;
      display: flex;
      font-size: 0.3rem;
      color: #000;
      span {
        margin: 0 0.1rem;
      }
      .countDown {
        span {
          margin: 0;
        }
      }
      .day {
        font-size: 0.2rem;
      }
    }
    .crazyShop {
      z-index: 10;
      position: absolute;
      left: 0.12rem;
      top: 1.81333rem;
      height: 3rem;
      width: 100%;
      ul {
        display: flex;
        overflow: hidden;
        li {
          margin: 0.06rem;
          position: relative;
          img {
            width: 2.32rem;
            height: 2.84rem;
            overflow: hidden;
          }
          .logo {
            z-index: 100;
            position: absolute;
            left: 0.7rem;
            top: 1.64rem;
            width: 1rem;
            height: 0.5rem;
          }
          .three {
            z-index: 1000;
            left: 0.1rem;
            top: 2.15rem;
            width: 2.18667rem;
            height: 0.386667rem;
            overflow: hidden;
            font-size: 0.25rem;
            color: rgb(255, 0, 128);
            text-align: center;
            line-height: 0.386667rem;
            white-space: nowrap;
            position: absolute;
            display: inline-block;
          }
        }
      }
    }
  }
  .main-sale {
    background: url("../../static/img/temai.jpg") no-repeat;
    height: 1.15rem;
    background-size: 100% 100%;
  }
  .main-body {
    background-color: #f3f4f5;
    ul {
      overflow: hidden;
      li {
        position: relative;
        left: 0.18rem;
        background-color: #f3f4f5;
        margin-top: 0.2rem;
        .shopping {
          width: 95%;
          height: 4.57333rem;
          border-radius: 0.24rem;
          overflow: hidden;
          border-width: 0.0133333rem;
          border-style: solid;
          border-color: rgb(232, 233, 235);
          background-color: rgb(250, 250, 250);
          white-space: nowrap;
        }
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
        .desc {
          font-size: 0.2rem;
          margin-top: 0.2rem;
          padding: 0 0.2rem;
          .desc-top {
            overflow: hidden;
            span.title {
              font-size: 0.28rem;
              width: 5.5rem;
              color: rgb(0, 0, 0);
              font-weight: bold;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              display: inline-block;
            }
            span.time {
              margin-left: 0.3rem;
              background-color: rgb(255, 255, 255);
              font-size: 0.2rem;
              color: rgb(152, 152, 159);
              line-height: 0.4rem;
              text-align: right;
              display: inline-block;
            }
          }
          .desc-bottom {
            overflow: hidden;
            line-height: 0.5rem;
            background-color: rgb(255, 255, 255);
            font-size: 0.22rem;
            color: rgb(88, 92, 100);
            display: inline-block;
            span.discount {
              background-color: rgb(255, 255, 255);
              font-size: 0.22rem;
              color: rgb(222, 61, 150);
              display: inline-block;
            }
          }
          span {
            float: left;
          }
        }
      }
    }
  }
}
.day {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 0 1px;
  margin: 0 -0.1rem;
}
.return-top {
  position: fixed;
  z-index: 100;
  width: 1rem;
  height: 1rem;
  display: block;

  .top {
    z-index: 100;
    padding: 10px;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    position: relative;
    img {
      width: 0.5rem;
      height: 0.5rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
/deep/ .ivu-back-top .ivu-back-top-show {
  bottom: 70px;
}
.cart {
  width: 1rem;
  height: 1rem;
  position: relative;
  .count {
    position: absolute;
    min-width: 0.4rem;
    height: 0.4rem;
    left: 27px;
    top: 2px;
    background-color: #e31436;
    color: #fff;
    border-radius: 0.4rem;
    font-size: 0.24rem;
    line-height: 0.4rem;
    text-align: center;
    padding: 0 4px;
  }
}
.cart /deep/ .ivu-affix {
  display: block;
  width: 1rem;
  height: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 1rem;
  text-align: center;
  line-height: 1rem;
  margin-left: 0.4rem;
}

footer {
  background-color: #f3f4f5;

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