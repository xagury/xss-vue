
<template>
  <div class="header-box">
    <x-header :left-options="{showBack: false}">
      <span class="search">
        <a href="#/search">点蝴蝶结进商品详情页!往下拉~</a>
      </span>
      
      <a v-show="!username" class="abtn login" href="/login" slot="left">
       
        <span class='loginSpan'>登录</span> 
      </a>
       <a v-show="username" class="abtn login" href="/My" slot="left">
        <img  src="/static/img/index(2).svg" alt="" class='userImg'>
      
      </a>
      <a class="abtn" href="/product" slot="right">
        <img src="/static/img/index(1).svg" alt>
      </a>
    </x-header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  XHeader,
  Actionsheet,
  TransferDom,
  ButtonTab,
  ButtonTabItem
} from "vux";

export default {
  name: "Header",
  data() {
    return {
      msg: "header"
    };
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  computed: {
    ...mapGetters(["username"])
  }
};
</script>

<style scoped lang = 'less'>
.header-box {
  color: #f99;

  position: relative;
}
.header-box /deep/ .vux-header {
  background: #f99;
  color: #000;
}

a {
  color: #98989f;
}
.header-box /deep/ .vux-header-title {
  margin: 0 60px;
  height: 40px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header-box .vux-header-title span {
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
  line-height: 2;
  color: #fff;
  .loginSpan{
    line-height:.8rem;
  }
  img {

    margin-left:.1rem;
    width: 60%;
    height: 60%;
  }
  .userImg{
    height:65%;
   margin-top:.15rem;
    align-items: center;
  }
}
.header-box /deep/ .vux-header .vux-header-right {
  right: 10px;
  margin-top: -4px;
}
.header-box /deep/ .vux-header .vux-header-left a {
  color: #fff;
  text-decoration: none;
}
</style>