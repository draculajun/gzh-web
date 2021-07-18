import Vue from 'vue'
import App from './App.vue'
import router from './router'

import wxAxios from "@/utils/request";

import {Button, Cell, CellGroup, Grid, GridItem, NavBar, Tabbar, TabbarItem,} from 'vant'

Vue.config.productionTip = false

// 不需要每次都 import一下 axios了，直接使用 $wxAxios 即可
Vue.prototype.$wxAxios = wxAxios

Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Grid);
Vue.use(GridItem);

Vue.use(router);

let app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

export default app;
