<template>
    <van-cell-group>
        <van-cell>
            <h1>TAB2</h1>
        </van-cell>
        <van-cell center title="获取ACCESSTOKEN">
            <van-button type="primary" @click="btnGetAccessTokenHandler">确定</van-button>
        </van-cell>
        <van-cell center title="新增临时图片素材">
            <van-uploader :after-read="btnAddTemporaryMediaHandler"/>
        </van-cell>
        <van-cell center title="获取临时素材">
            <van-button type="primary" @click="btnGetTemporaryMediaHandler">确定</van-button>
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

            btnGetTemporaryMediaHandler() {
                // materialApi.page('image', 1, 10).then(res => {
                //     console.log(res);
                //     Toast('material page:' + res);
                // });
                materialApi.getTemporaryMedia('3p-zhZsJNnAPHwMeFcu_z7H-PvDkf7L6HTF371ANFyFQ2IDf7bsaEZCy1IkYIw1z');
            },

            btnAddTemporaryMediaHandler(obj) {
                let formData = new FormData();
                formData.append("file", obj.file);
                formData.append("type", 'image');
                this.$baseAxios.postByMultipartForm('/wxApi/material/temporary/media', formData).then(res => {
                    Toast('上传成功');
                });
            },
        }
    }
</script>

<style scoped>

</style>
