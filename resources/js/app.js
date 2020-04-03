// require('./bootstrap');

window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');

    require('foundation-sites');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


/*const app = new Vue({
    el: '#app'
});*/
import Vue from 'vue';
import router from './routes.js'; //引入路由文件
import store from './store.js'; //引入数据存储器

// 其作用是将 Vue 挂载到 ID 为 app 的页面元素上，同时在准备就绪时可以通过 Vue 调用 Vue Router 和 Vuex。
new Vue().$mount('#app');

// 告知Vue实例使用刚刚导入的router
new Vue({
    router,
    store
}).$mount('#app');
