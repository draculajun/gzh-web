<template>
  <van-cell-group>
    <van-cell>
      <h1>TAB2</h1>
    </van-cell>
    <van-cell center title="获取ACCESSTOKEN">
      <van-button type="primary" @click="btnGetAccessTokenHandler">确定</van-button>
    </van-cell>

    <van-cell center title="新增永久图片素材">
      <van-uploader :after-read="btnAddOtherMaterialHandler"/>
      <!--      <van-button type="primary" @click="btnAddOtherMaterialHandler">确定</van-button>-->
    </van-cell>
  </van-cell-group>
</template>

<script>

import {Toast} from "vant";

export default {
  name: "Tab2",

  methods: {
    btnGetAccessTokenHandler() {
      this.$wxAxios.get('/accessToken').then(res => {
        console.log('accessToken:' + res.data);
        Toast('accessToken:' + res.data);
      }).catch(err => {
        console.log(err);
      });
    },

    btnAddOtherMaterialHandler(e) {
      console.log(e);
      let data = {
        'file': e.file,
        'type': 'image',
      }
      this.$wxAxios.post('/material/page', data).then(res => {
        console.log(res);
      })
    },
  }
}
</script>

<style scoped>

</style>
