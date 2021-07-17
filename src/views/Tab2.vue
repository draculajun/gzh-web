<template>
  <van-cell-group>
    <van-cell>
      <h1>TAB2</h1>
    </van-cell>
    <van-cell center title="获取ACCESSTOKEN">
      <van-button @click="btnGetAccessTokenHandler">getAccessToken</van-button>
    </van-cell>
  </van-cell-group>
</template>

<script>
import {Toast} from "vant";
// import

export default {
  name: "Tab2",

  methods: {
    btnGetAccessTokenHandler() {
      Toast('aaa');
    },
  }
}
</script>

<style scoped>

</style>
