<template>
  <div class="pay-box">
    <!-- header start -->
    <x-header :left-options="{backText: ''}">确认订单</x-header>

    <!-- header end -->
    <!-- content start -->
    <Content>
      <div class="payEnvironment">
        <Icon type="logo-yen" />
        你正在安全购物环境中，请放心购买
      </div>
    </Content>
    <!-- content end -->
    <!-- footer start -->
    <Footer></Footer>
    <!-- footer end -->
  </div>
</template>

<script>
import { XHeader } from "vux";
import { Layout, Header, Footer, Content,Icon } from "iview";
export default {
  name: "Pay",
  data() {
    return {
      msg: "pay"
    };
  },
  components: {
    XHeader,
    Layout,
    Header,
    Footer,
    Content,
    Icon,
  }
};
</script>

<style scoped lang = 'less'>
.pay-box {
  color: #f99;
}
/deep/ .vux-header {
  background: #f99;
}
Content{
    .payEnvironment{
        color:#000;
        font-size:.26rem;
    }
}
</style>