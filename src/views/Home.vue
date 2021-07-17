<template>
    <div>
        <!--<van-nav-bar title="标题" left-text="返回" left-arrow @click-left="navBarLeftHandler"></van-nav-bar>-->
        <router-view></router-view>

        <van-tabbar v-model="active" route>
            <van-tabbar-item to="/index" icon="home-o">Tab1</van-tabbar-item>
            <van-tabbar-item to="/Tab2" icon="search">Tab2</van-tabbar-item>
            <van-tabbar-item icon="friends-o">Tab3</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

    import {Toast} from "vant";

    export default {
        name: "Home",

        data() {
            return {
                active: 0,
            }
        },

        methods: {
            sayHello() {
                Toast('hello');
            },

            btnRedirectHandler() {
                this.$router.push({
                    'name': 'World',
                })
            },

            navBarLeftHandler() {
                this.$router.back(-1);
            },
        },

        mounted() {
          this.active = 0;
        }
    }
</script>

<style scoped>

</style>
