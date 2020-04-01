// Roast 单页面应用的前端路由, 我们可以在这里定义 Vue Router 使用的路由。
/**
 * routes.js
 * 应用中的所有前端路由
 */
/**
 * 导入Vue 和 VueRouter
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * 制作一个新的VueRouter，我们将使用它来运行应用程序的所有路由。
 */
export default new VueRouter({
    routes: [
        {
            path:'/',
            name:'home',
            component: Vue.component('Home', require('./pages/Home.vue'))
        },
        {
            path:'/cafes',
            name:'cafes',
            component: Vue.component('Cafes', require('./pages/Cafes.vue'))
        },
        {
            path:'/cafes/new',
            name:'newCafe',
            component: Vue.component('NewCafe', require('./pages/NewCafe.vue'))
        },
        {
            path:'/cafes/:id', //动态路由, 通过传入指定id参数来加载对应的咖啡店详情
            name:'cafe',
            component: Vue.component('Cafe', require('./pages/Cafe.vue'))
        },
    ]
});
