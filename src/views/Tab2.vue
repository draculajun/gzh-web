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
        <van-cell center title="获取永久图片素材">
            <van-button type="primary" @click="btnGetMaterialPageHandler">确定</van-button>
        </van-cell>
    </van-cell-group>
</template>

<script>

    import {Toast} from "vant";
    import materialApi from '../api/material'
    import baseApi from "../api/api";

    export default {
        name: "Tab2",

        methods: {
            btnGetAccessTokenHandler() {
                baseApi.getAccessToken().then(res => {
                    console.log(res);
                    Toast('accessToken:' + res);
                });
            },

            btnGetMaterialPageHandler() {
                materialApi.page('image', 1, 10).then(res => {
                    console.log(res);
                    Toast('material page:' + res);
                });
            },

            btnAddOtherMaterialHandler(obj) {
                console.log(obj);
                let formData = new window.FormData();
                formData.append("file", obj.file);
                formData.append("type", 'image');
                this.$baseAxios.post('/wxApi/material/others', formData, {'Content-Type': 'multipart/form-data'}).then(res => {
                    console.log(res);
                })
            },
        }
    }
</script>

<style scoped>

</style>
