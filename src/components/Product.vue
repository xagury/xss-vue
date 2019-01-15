<template>
  <div class="product-box">
    <!-- header start -->
    <x-header :left-options="{backText: ''}">
      <button-tab>
        <button-tab-item selected>分类</button-tab-item>
        <button-tab-item>
          <router-link
          to = "/DetailsBrand"
          >品牌</router-link>
          </button-tab-item>
      </button-tab>

      <a slot="right" href="/home" class="home">
        <Icon type="md-home" size="30"/>
      </a>
    </x-header>
    <!-- header end -->
    <!-- search start -->
    <div class="search">
      <router-link to="/search">
        <div class="searchBar">
          <i class="searchIcon"></i>
          
          <span>搜索商品或品牌</span>
        </div>
      </router-link>
    </div>
    <!-- search end -->
    <!-- main  start-->
    <main>
   
      <aside>
        <ul class="nav" width="100px">
          <li class="nav-item" v-for=" v in data" :key="v.categoryId">
            <router-link
              :to="{name:'details',params:{id:v.categoryId},query:{a:v.name}}"
              active-class="active"
              
            >{{v.name}}</router-link>
          </li>
        </ul>
      </aside>
      <article>
        <router-view
        :key = "key"
        ></router-view>
      </article>
    </main>
    <!-- main end -->
  </div>
</template>

<script>
import axios from 'axios'
import { XHeader, ButtonTab, ButtonTabItem } from "vux";
import { Icon, Tabs, TabPane, Menu, Submenu, MenuGroup, MenuItem } from "iview";

export default {
  name: "Product",
  data() {
    return {
      data : null,
      i: 1,
      msg: "product",
    
    };
  },
  components: {
    XHeader,
    Icon,
    ButtonTabItem,
    ButtonTab,
    Tabs,
    TabPane
  },computed : {
    key(){
      return this.$route.path + Math.random();
    }
  },
  created() {
    axios.get({
      url:
      
        "https://h5.vip.com/api/category/category/getSellingCategorys/"
    });
    axios
      .get("/wph/api/category/category/getSellingCategorys/", {
        params: {
          app_name: "",
          app_version: "",
          mobile_channel: "",
          hierarchy_id: "",
          category_id: "",
          warehouse: "",
          mars_cid: "",
          category_filter: "",
          sale_for: "",
          area_id: "",
          from_url_go_api_switch: "",
          preview_go_admin: "",
          src: "app",
          channel_id: "",
          wap_id: "classify_wap_107",
          channel_name: "",
          _t: Date.now(),
          _: Date.now()
        }
      })
      .then(res => this.data = res.data.data.cate_lv1,
      )
      .catch(error => console.log(error));

 
  },
  methods:{
　　　　flushCom:function(){

　　　　　　//router是路由实例,例如:var router = new Router({})

　　　　　　//router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)

　　　　　　this.$router.go(0);  

　　　　}
　　},
 

};
</script>

<style scoped lang = 'less'>
.product-box {
  color: #f99;
  overflow: hidden;
}
/deep/ .vux-header {
  background: #fff;
  border-bottom: 1px solid #ddd;

  .vux-header-title {
    color: #000;
  }
  .vux-header-back {
    color: #fff;
  }
}
/deep/ .vux-button-group > a.vux-button-tab-item-first:after {
  border: 1px solid #ddd;
}
/deep/ .vux-button-group > a.vux-button-tab-item-last:after {
  border: 1px solid #ddd;
}
/deep/ .vux-button-tab-item {
  margin-top: 0.1rem;
  background-color: #fff;
  color: #585c64;
}
/deep/.vux-button-group > a.vux-button-group-current {
  background: #585c64;
}
.home {
  color: #000;
  display: block;
  margin-top: -0.1rem;
  icon {
    color: #000;
  }
}
.search {
  background-color: #f3f4f5;
  padding: 0.26667rem 0.4rem;
  overflow: hidden;

  .searchBar {
    display: block;
    font-size: 14px;
    -webkit-appearance: none;
    border: 1px solid #d8d8d8;
    border-top-left-radius: 0.05333rem;
    border-bottom-left-radius: 0.05333rem;
    background-color: #fff;
    outline: none;
    color: #98989f;
    height: 0.8rem;
    width: 6.7rem;
    text-align: center;

    .searchIcon {
      display: inline-block;
      margin-top: 0.25rem;
      width: 0.27333rem;
      height: 0.27333rem;
      background: url(../../static/img/productSearch.png) 0 0 no-repeat;
      background-size: 100%;
      margin-right: 0.13333rem;
    }
  }
}
main {
  display: flex;
  overflow: hidden;
  aside {
    flex: 1;
    width: .7rem;
    ul {
      overflow: hidden;
      li {
        position: relative;
        width: 100%;
        font-size: 14px;
        height: 1rem;
        line-height: 1rem;
        color: #585c64;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: #f3f4f5;
        a {
          color: #101622;
          display: block;
          border-bottom: 1px solid #eaeaea;
        }
      }
    }
  }
  article {
    flex: 3;
  }
}
.active {
  background: #fff;
  color: #222;
}
.active:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.08667rem;
  height: 100%;
  font-size: 0;
  background-color: #de3d96;
}
</style>