// Vuex 模块的起点, Vuex 由一个父模块和多个子模块构成, 该文件包含父模块，随后我们会导入所有子模块到这个文件。

//上述配置在 IE 11 下不能正常工作，因为 IE 11 不支持 promise，需要通过 NPM 安装 es6-promise：
// 引入es6-promise 扩展包, 处理 IE 11 不支持promise的问题
require('es6-promise').polyfill();

/**
 * 导入 vue 和 vuex
 */
import Vue from 'vue';
import Vuex from 'vuex';

//告知vue使用 Vuex 作为数据存储器, 这将会扩展 Vue 实例具备使用 Vuex 数据存储器所需要的方法。
Vue.use( Vuex );

//导入所有模块
import {cafes} from './modules/cafes.js';

// 导出一个新的 Vuex 数据存储器。这样我们就可以将其应用到 Vue 实例并让所有模块在各个组件和路由中都可以访问。
export default new Vuex.Store({
    modules: {
        cafes
    }
});
