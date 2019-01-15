<template>
  <div class="shopdetail-box">
    <Layout>
      <Content>
        <!-- return start -->
        <div class="return">
          <a href="/home" class="left">
            <Icon type="ios-arrow-dropleft-circle"/>
          </a>
          <div class="right">
            <span>&nbsp;&nbsp;剩2天8时&nbsp;&nbsp;</span>
          </div>
        </div>
        <!-- return end -->
        <!-- banner start -->
        <swiper auto height="7.5rem">
          <swiper-item v-for="v in arr" :key="v.id">
            <img :src="v.imgsrc" class="swiperImg" alt>
          </swiper-item>
        </swiper>
        <!-- banner end -->
        <!-- shopprice start -->
        <div class="shop">
          <div class="shopPrice">
            <p class="price">
              <span>￥<i class='price1'>{{good.price}}</i></span>
            </p>
            <p class="preprice">
              <span>￥{{good.preprice}}</span>
            </p>
            <p class="discount">
              <span>9.6折</span>
            </p>
          </div>
          <div class="shopShare">
            <i></i>
          </div>
        </div>
        <!-- shopprice end -->
        <!-- shopName start -->
        <div class="shopName">{{good.title}}</div>
        <!-- shopName end -->
        <!-- shopBrand start -->
        <div class="shopBrand">
          <img src="/static/img/brand.jpg" alt>
          <span>意大利品牌</span>
        </div>
        <!-- shopBrand end -->
        <!-- shopAward start -->
        <div class="award">
          <div class="freight">
            <span class="tips">运费</span>
            <p>包税,满88元包邮</p>
          </div>
          <div class="vipB">
            <span class="tips">唯品币</span>
            <p>购买最多可获149个唯品币</p>
          </div>
        </div>
        <!-- shopAward end -->
        <!-- specification start -->
        <div class="specification">
          <p>规格</p>
          <p class="ml">
            6.5ml
            <i class="ter">√</i>
          </p>
        </div>
        <!-- specification end -->
        <!-- address start -->
        <div class="address">
          <p>配送至</p>
          <p>请选择地址</p>
        </div>
        <!-- address end -->
        <!-- mark start -->
        <div class="mark">
          <ul>
            <li>
              <i class="true"></i>
              唯品会发货
            </li>
            <li>
              <i class="wan"></i>
              不支持7天无理由退货
            </li>
          </ul>
          <i class="more"></i>
        </div>
        <!-- mark end -->
        <!-- Business start -->
        <div class="Business">
          <div class="shopBusiness">
            <img src alt>
            <p class="bName">阿玛尼</p>
            <p class="bdetail">为容颜披上阿玛尼定制华裳</p>
          </div>
          <Button type="error" ghost>Error</Button>
        </div>
        <!-- Business end -->
      </Content>
      <!-- footer start -->
      <footer>
        <div class="cartImg">
          <a href="/ShowCart">
            <Icon type="md-cart" size="30"/>
            <span class="count">{{total.num}}</span>
          </a>
        </div>
        <a class="join add" @click="addCar(good)"  
        >加入购物车</a>
      </footer>
      <!-- footer end -->
    </Layout>
  </div>
</template>

<script>
import { mapActions, mapGetters  } from "vuex";
import { Swiper, SwiperItem } from "vux";
import { Button, Icon, Layout, Header, Footer, Content } from "iview";
export default {
  name: "ShopDetail",
  data() {
    return {
      msg: "shopdetail",
      arr: [
        {
          id: 1,
          imgsrc: "/static/img/amn(1).jpg"
        },
        {
          id: 2,
          imgsrc: "/static/img/amn(2).jpg"
        },
        {
          id: 3,
          imgsrc: "/static/img/amn(3).jpg"
        },
        {
          id: 4,
          imgsrc: "/static/img/amn(4).jpg"
        },
        {
          id: 5,
          imgsrc: "/static/img/amn(5).jpg"
        }
      ],
      good:{}
    };
  },
  computed: {
   
     ...mapGetters(["total"])
  },
  methods: {
     ...mapActions(["addCar"]),
  }
  ,
  
  created() {
    this.$http
      .get("/static/data/good.json")
      .then(res => {
        console.log(res);
        this.good = res.data[0];
      })
      .catch(error => console.log(error));
  },
  components: {
    Swiper,
    SwiperItem,
    Button,
    Icon,
    Layout,
    Header,
    Footer,
    Content
  }
};
</script>

<style scoped lang = 'less'>
.return {
  position: absolute;
  top: 0;
  z-index: 1001;
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  .left {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.7);
  }
  .right {
    span {
      width: 1.5rem;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 1rem;
      color: #fff;
    }
    font-size: 0.28rem;
    line-height: 1.5rem;
  }
}
/deep/ content {
  position: relative;
}
.shopdetail-box {
  color: #000;
}
.swiperImg {
  height: 7.5rem;
  width: 100%;
}
/deep/ .vux-slider > .vux-indicator,
.vux-slider .vux-indicator-right {
  right: 40%;
  bottom: 1px;
}
.shop {
  margin: 0.32rem 0.32rem 0;
  .shopPrice {
    position: relative;
    color: #98989f;
    height: 0.66667rem;
    line-height: 0.66667rem;
    overflow: hidden;
    margin-right: 1.6rem;
    display: flex;
    .price {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.56667rem;
      color: #222;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      margin-right: 0.13333rem;
    }
    .preprice {
      font-size: 0.22rem;
      margin-right: 0.13333rem;
      text-decoration: line-through;
    }
    .discount {
      font-size: 0.22rem;
      margin-right: 0.13333rem;
    }
  }
}
.shopName {
  margin: 0.2rem 0.32rem 0.3rem;
  font-size: 0.28rem;
  line-height: 0.48rem;
  color: #404040;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.shopBrand {
  margin: 0.1rem 0.32rem;
  padding: 0.4rem 0;
  border-top: 1px dashed #eaeaea;
  border-bottom: 1px dashed #eaeaea;
  line-height: 0.48rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  img {
    width: 0.64rem;
    height: 0.4rem;
    margin-right: 0.26667rem;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  color: #000;
}
.award {
  margin: 0 0.32rem;
  padding-bottom: 0.33333rem;
  .tips {
    padding: 0;
    width: 1rem;
    height: 0.13333rem;
    text-align: center;
    margin-right: 0.34667rem;
    min-height: 0.48rem;
    border: 1px solid #5682c1;
    font-size: 0.22rem;
    color: #5682c1;
    border-radius: 0.05333rem;
    display: inline-block;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
  }
  .freight {
    font-size: 0;
    position: relative;
    display: block;
    line-height: 0.53333rem;
    height: 0.53333rem;
    margin-top: 0.48rem;

    p {
      font-size: 0.27rem;
      width: 7.33333rem;
      padding-right: 0.26667rem;
      white-space: nowrap;
      word-break: keep-all;
      text-overflow: ellipsis;
    }
  }
  .vipB {
    font-size: 0;
    position: relative;
    display: block;
    line-height: 0.53333rem;
    height: 0.53333rem;
    margin-top: 0.48rem;
    p {
      font-size: 0.27rem;
      width: 7.33333rem;
      padding-right: 0.26667rem;
      white-space: nowrap;
      word-break: keep-all;
      text-overflow: ellipsis;
    }
  }
}
.specification {
  padding-bottom: 0.33333rem;
  position: relative;
  p {
    margin: 0.4rem 0.4rem 0;
    font-size: 0.28rem;
    line-height: 0.64rem;
  }
  .ml {
    display: block;
    padding: 0 0.08rem;
    height: 0.8rem;
    width: 2rem;
    text-align: center;
    line-height: 0.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    border: 1px solid #de3d96;
    color: #de3d96;
  }
}
.address {
  padding: 0.4rem;
  p {
    font-size: 0.37333rem;
    line-height: 0.64rem;
    padding-bottom: 0.26667rem;
  }
}

footer {
  z-index: 100001;
  position: fixed;
  bottom: 0;
  height: 1.5rem;
  background: #fff;
  width: 100%;
  .cartImg {
    position: relative;
    float: left;
    width: 20%;
    margin: 0.2rem 0.3rem;
    height: 1rem;
    border: 1px solid #e1e1e1;
    border-radius: 2px;
    font-size: 0.37333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    a {
      display: block;
      color: #98989f;
      line-height: 1rem;
    }
    .count {
        position: absolute;
        min-width:.4rem;
        height: .4rem;
        left: 27px;
        top: 2px;
        background-color: #e31436;
        color: #fff;
        border-radius: .4rem;
        font-size:.24rem;
        line-height: .4rem;
        text-align: center;
        padding: 0 4px;
      
      }
    
  }
  .join {
    margin: 0.2rem 0;
    display: block;
    font-size: 0.32667rem;
    height: 1rem;
    width: 5rem;
    color: #fff;
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;
    position: relative;
    background-color: #dd3d97;
    padding: 0.29333rem 0.66667rem;
    text-align: center;
  }
}
</style>