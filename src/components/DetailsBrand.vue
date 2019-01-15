<template>
  <div class="details-box"
  >

    <p
    v-for = 'x in data'
    :key = 'x.category_id'
    >
      {{x.name}} <br>
      
        <span
          v-for = 'z in x.children'
          :key = 'z.category_id'
        >
       
           &nbsp;&nbsp; {{z.name}}
        </span>
  </p>
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Details",
   
  data() {
    return {
      msg: "details",
      data: null,
      dataTitle: null,
      dataName : null,
    };
  },
  watch: {
   '$route' (to, from) {
     console.log(this.getStatus(this.$route.path))
   }
  },
  methods :{
    urlp(){
    //  if(this.$route.params.id == )
      console.log( this.$route.params.id) 
    },
    getStatus (urlStr) {
      var urlStrArr = urlStr.split('/')
      return urlStrArr[urlStrArr.length - 1]
    }
  },
  components: {},
  //数据获取
  created() {
    this.id = this.$route.params.id;
    console.log(this.getStatus(this.$route.path))
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
      .then(res => this.data = res.data.data.current_node.children,
      // this.dataTitle = res.data.data.current_node.children.name,
      // this.dataName = res.data.data.current_node.children.children.name,
      
      )
      .catch(error => console.log(error));

 
  },
  updated(){

  }
};
</script>

<style scoped lang = 'scss'>
.details-box {
  color: #f99;
}
</style>