import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Tab1 from '@/views/Tab1';
import Tab2 from '@/views/Tab2';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
        redirect: "index",
        children: [
            {
                path: '/index',
                name: 'tab1',
                component: Tab1,
            }, {
                path: '/tab2',
                name: 'tab2',
                component: Tab2,
            }
        ]
    }],
    base: '/',
    mode: 'history'
});
