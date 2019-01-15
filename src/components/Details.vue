<template>
  <div class="details-box">
    <div 
      class='shop-title'
      v-for="x in data" :key="x.category_id">
      
      <h5>{{x.name}}</h5>
      <div  class="shopBox" >
         <div class='shopcar'
        v-for="z in x.children" 
        :key="z.category_id">
        <div class="shop">
          <img :src="z.image">

          <p>{{z.name}}</p>
        </div>
      </div>
      </div> 
     
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Details",

  data() {
    return {
      msg: "details",
      data: null,
      dataTitle: null,
      dataName: null
    };
  },
  watch: {
    $route(to, from) {
      console.log(this.getStatus(this.$route.path));
    }
  },
  methods: {
    urlp() {
      //  if(this.$route.params.id == )
      console.log(this.$route.params.id);
    },
    getStatus(urlStr) {
      var urlStrArr = urlStr.split("/");
      return urlStrArr[urlStrArr.length - 1];
    }
  },
  components: {},
  //数据获取
  created() {
    this.id = this.$route.params.id;
    console.log(this.getStatus(this.$route.path));
    axios.get({
      url:
        "https://h5.vip.com/api/category/category/getSellingCategorysChildren/"
    });
    axios
      .get("/wph/api/category/category/getSellingCategorysChildren/", {
        params: {
          app_name: "",
          app_version: "",
          mobile_channel: "",
          hierarchy_id: "",
          category_id: this.$route.params.id,
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
      .then(res => (this.data = res.data.data.current_node.children))
      .catch(error => console.log(error));
  },
  updated() {}
};
</script>

<style scoped lang = 'scss'>
.details-box {
  color: #f99;
}
h5 {
  font-weight: 900;
  font-size: 0.26rem;
  color: #000;
  
  line-height: 1rem;
}
.shop {
 
  overflow: hidden;
  font-size: 12px;
    display: inline-block;
    color: #222;
    width: 1.56rem;
    text-align: center;
    letter-spacing: normal;
    vertical-align: top;
    float:left;
  img {
   
    width: 1.3rem;
    height: 1.3rem;
    margin-left: auto;
    margin-right: auto;
  }
  p {
        white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    padding: .29333rem 0 .66667rem;
    line-height: .18667rem;
  }
}
.shop-title{
  overflow:hidden;
  box-sizing:border-box;
  padding:.3rem;
}
.shopBox{
  overflow:hidden;
  border-bottom:1px solid #eaeaea;
}
</style>