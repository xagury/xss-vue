
<template>
  <div class="search-box">
    <x-header :left-options="{backText: ''}">
      <span class="search">
        <a href="/search">搜索商品或品牌</a>
      </span>
      
      <a slot="right" class="search-btn">搜索</a>
    </x-header>
    <!-- search start-->
    <div class="search-hot">
      <h4>热门搜索</h4>
      <div class="hot-box">
        <ul>
          <li v-for="v in arr" :key="v.id">{{v.content}}</li>
        </ul>
      </div>
    </div>
    <!-- search end -->
  </div>
</template>

<script>
import {
  XHeader,
  Actionsheet,
  TransferDom,
  ButtonTab,
  ButtonTabItem
} from "vux";

export default {
  name: "Search",
  data() {
    return {
      msg: "search",
      arr: [
        {
          id: 1,
          content: "广发分享日"
        },
        {
          id: 2,
          content: "新人限时秒杀"
        }
      ]
    };
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  }
};
</script>

<style scoped lang = 'less'>
.search-box {
  color: #f99;

  position: relative;
}
.search-box /deep/ .vux-header {
  background: #f99;
  color: #000;
}

a {
  color: #98989f;
}
.search-box /deep/ .vux-header-title {
  margin: 0 60px;
  height: 40px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search-box .vux-header-title span {
  display: block;
  width: 100%;
  margin-top: 0.08rem;
  background: #fff;
  border-radius: 0.5rem;
  height: 80%;
  color: #98989f;
  font-size: 0.3rem;
  line-height: 2;
  text-align: left;
  padding: 0 0.3rem;
  background-color: #f3f4f5;
}
.login {
  position: relative;
  top: -8px;
  left: -3px;
}
.abtn {
  display: block;
  width: 35px;
  height: 35px;

  line-height: 3;
  color: #fff;
  img {
    margin-top: 1px;
    width: 60%;
    height: 60%;
  }
}
.search-box /deep/ .vux-header .vux-header-right {
  right: 15px;

  color: #fff;
  a {
    color: #fff;
  }
}
.search-box /deep/ .vux-header .vux-header-left a {
  color: #fff;
  text-decoration: none;
}

.search-hot {
  padding: 0.4rem 0.4rem 0;

  h4 {
    color: #98989f;
     font-size: 0.25rem;
  }
  .hot-box {
    margin-top: 0.2rem;
    ul {
      display: flex;
      li {
        font-size: 0.25rem;
        padding:0.2rem;
        line-height: 0.4rem;

        max-height: 0.74667rem;
        margin: 0.13333rem 0.13333rem 0.16rem 0;
        max-width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-right: 0.3rem;
        color: #e4007f;
        border:1px solid #f7add6;
    
      }
    }
  }
}
</style>