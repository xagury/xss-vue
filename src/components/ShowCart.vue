<template>
  <div class="showcart-box">
    <!-- header start -->
    <x-header></x-header>
    <!-- header end -->
    <!-- emptyCart start -->
    <div class="emptyCart" v-show = "cars.length === 0"> 
      <div class="bg"></div>
      <div class="cart"></div>
      <p>购物车空空如也</p>
      <a href="/home">去抢购</a>
    </div>
    <!-- emptyCart end -->
    <!-- shopCart start -->
    <div class="cartView"  v-show = "cars.length !== 0" v-for="car in cars" :key="car.id">
      <div class="address">
        <Cell title="设置收货地址" to="/components/"/>
      </div>
      <div class="shop">
        <h3>精选特卖</h3>
        <ul>
          <li>
            <div class="shopDetail">
              <div class="shopImg">
                <img :src=car.src alt>
              </div>

              <div class="shopDesc">
                <div class="shopTitle">{{car.title}}</div>
                <div class="shopx">意大利Giorgio Armani大师级彩妆专场</div>
                <div class="shopMl">6.5ml</div>
                <div class="seven">不支持七天无理由退货</div>
                <div class="num">
                  <button class="reduce" @click="reduceCar(car)">-</button>
                  <div class="shopNum">{{car.num}}</div>
                  <button class="add"  @click="addCar(car)">+</button>
                </div>
              </div>

              <div class="shopMoney">
                <div class="shopPrice">￥{{car.price}}</div>
                <div class="prePrice">￥310</div>
                <!-- <div class="del">×</div> -->
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="shopTotal">￥{{car.num*car.price}}</div>
      <div class="discount">
        <Cell title="使用礼券" to="/components/"/>
      </div>
      <div class="total">
        <p class="order">
          订单金额
          <span class="alltotal">￥{{car.num*car.price}}</span>
        </p>
        <p class="hx">
          商品金额:
          <span class="alltotal1">￥{{car.num*car.price}}</span>
        </p>
      </div>
      <div class="shopBtn">
        <p class="hx1">
          还需支付:
          <span class="alltotal1">￥{{car.num*car.price}}</span>
        </p>
        <a href="#" class="pay">货到付款</a>
        <a href="#" class="nowpay">在线支付</a>
      </div>
    </div>
    <!-- shopCart end -->
  </div>
</template>

<script>
import { XHeader } from "vux";
import { Cell } from "iview";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Showcart",
  data() {
    return {
      msg: "showcart"
    };
  },created() {
    console.log(this.cars);
  },
  methods: {
    ...mapActions(["addCar", "reduceCar"])
  },
  computed: {
    ...mapGetters(["total", "username"]),
    ...mapState({
      cars: state => state.cars
    })
  },
  components: {
    XHeader,
    Cell
  },
  
 
};
</script>

<style scoped lang = 'less'>
.showcart-box {
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
.emptyCart {
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  background-color: #fff;
  text-align: center;
  position: relative;
  .bg {
    position: absolute;
    width: 8.29333rem;
    height: 3.73333rem;
    background-image: url(../../static/img/cartbg.png);
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 0;
    -webkit-background-size: 100% 100%;
    background-size: 100%;
  }
  .cart {
    width: 2.93333rem;
    height: 3.76rem;
    background-image: url(../../static/img/cart.png);
    margin: 0 auto;
    -webkit-background-size: 100% 100%;
    background-size: 100%;
  }
  p {
    font-size: 0.42667rem;
    color: #222;
    margin-top: 0.53333rem;
    line-height: 0.74667rem;
    font-weight: 400;
  }
  a {
    width: 4.26667rem;
    display: block;
    margin: 1rem auto;
    border: 1px solid #de3c96;
    color: #de3c96;
    text-decoration: none;
    text-align: center;
    display: block;
    border-radius: 0.10667rem;
    line-height: 0.8rem;
    padding: 0 0.26667rem;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
    font-size: 0.37333rem;
    font-family: inherit;
    cursor: pointer;
  }
}
/deep/ .ivu-cell {
  background: #fff;
}
.cartView {
  position: relative;
  .shop {
    background: #fff;
    margin-top: 0.26667rem;
    h3 {
      padding: 0.21333rem 0;
      margin-left: 0.4rem;
      margin-right: 0.4rem;
      font-size: 0.3rem;
      border-bottom: 1px solid #eaeaea;
    }

    ul {
      padding: 0.26667rem 0;
      position: relative;
      overflow: hidden;
      li {
        padding: 0.4rem 0;
        font-size: 0.37333rem;
        overflow: hidden;
        .shopDetail {
          overflow: hidden;
          width: 100%;
          display: flex;
          justify-content: space-between;
          .shopImg {
            width: 2rem;
            height: 2rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .shopDesc {
            float: left;
            padding-left: 0.02667rem;
            padding-bottom: 0.02667rem;
            font-size: 0.25rem;
            .shopTitle {
              margin-bottom: 0.16rem;
              display: -webkit-box;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            .shopx {
              padding-right: 25%;
              line-height: 0.42667rem;
              color: #999;

              font-size: 0.25rem;
            }
            .shopMl {
              padding-right: 25%;
              line-height: 0.42667rem;
              color: #999;
              font-size: 0.25rem;
            }
            .seven {
              display: inline-block;
              margin-bottom: 0.13333rem;
              margin-right: 0.10667rem;
              padding: 0.05333rem 0.13333rem;
              border-radius: 0.05333rem;
              font-size: 0.22rem;
              line-height: 1.2;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              max-width: 100%;
              word-wrap: break-word;
              color: #3a5998;
              border: 0.02667rem solid #3a5998;
            }
          }
          .shopMoney {
            float: right;
            padding-right:.1rem;
            font-size:.28rem;
            .shopPrice{

            }
            .prePrice{
              text-decoration:line-through;
            }
            .del{
              position: absolute;
              bottom:.5rem;
              font-size: .6rem;
              right:.3rem;
            }
          }
          .num {
            position: relative;
            height: 0.64rem;
            .reduce {
              float: left;
              padding: 0 0.08rem;
              border: 1px solid #e7e7e7;
              height: 0.64rem;
              width: 0.64rem;
              line-height: 0.64rem;
              text-align: center;
              font-size: 0.25rem;
            }
            .add {
              float: left;
              padding: 0 0.08rem;
              border: 1px solid #e7e7e7;
              height: 0.64rem;
              width: 0.64rem;
              line-height: 0.64rem;
              text-align: center;
              width: 0.64rem;
              font-size: 0.25rem;
            }
            .shopNum {
              float: left;
              width: 1rem;
              height: 0.64rem;
              line-height: 0.64rem;
              border-top: 1px solid #e7e7e7;
              border-bottom: 1px solid #e7e7e7;
              color: #595d65;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .shopTotal {
    height: 1rem;
    line-height: 1.2rem;
    font-size: 0.42667rem;
    color: #222;
    text-align: right;
    background:#fff;
    padding-right:.3rem;
  }
  .discount {
    position: relative;
    margin-top: 0.26667rem;
  }
  .total {
    margin-bottom: 1rem;
    margin-top: 0.26667rem;
    padding: 0 0.4rem;
    background-color: #fff;
    overflow: hidden;
    height: 2.6rem;
    line-height: 1.28rem;
    font-size: 0.27333rem;
    font-weight: bolder;
    position: relative;
    .order {
      position: relative;
    }
    .alltotal {
      position: absolute;
      top: 50%;
      right: 0;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);

      color: #e4007f;
    }
    .hx {
      background-color: #fff;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      word-break: keep-all;
      text-overflow: ellipsis;
      position: relative;
      .alltotal1 {
        position: absolute;
        right: 0rem;
        top: 0;
      }
    }
  }
  .shopBtn {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 0.4rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    .hx1 {
      margin-bottom: 0.18667rem;
      font-size: 0.3rem;
      text-align: center;
    }
    .pay {
      width: 40%;
      background-color: #fff;
      color: #585c64;
      letter-spacing: 0.02667rem;
      border: 1px solid #caccd2;
      color: #caccd2;
      margin-right: 0.42667rem;
      height: 1rem;
      line-height: 1rem;
      outline: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      text-align: center;
      font-size: 0.3rem;
      display: inline-block;
      border-radius: 0.05333rem;
    }
    .nowpay {
      width: 40%;
      letter-spacing: 0.02667rem;
      background-color: #e80080;
      color: #fff;
      display: inline-block;
      height: 1rem;
      line-height: 1rem;
      outline: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      text-align: center;
      font-size: 0.3rem;
      border-radius: 0.05333rem;
    }
  }
}
</style>