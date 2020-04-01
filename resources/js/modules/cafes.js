// 在这个文件中管理所有的咖啡店数据，然后在整个应用中使用这些数据。

// 从api目录下导入咖啡店相关API, 使用其中的API请求方法来加载数据
/*
|-------------------------------------------------------------------------------
| VUEX modules/cafes.js
|-------------------------------------------------------------------------------
| The Vuex data store for the cafes
*/

import CafeAPI from '../api/cafe.js';

// 导出一个常量作为咖啡店模块
export const cafes = {
    state: {
        cafes: [],
        cafesLoadStatus: 0, //数据加载状态, 0:数据尚未加载, 1:开始加载 2:加载成功 3:加载失败
        cafe: {},
        cafeLoadStatus: 0
    },

    // 动作, commit是析构参数, 该参数通过Vuex传入, 允许我们提交 mutations, 还可以提交其他析构参数
    actions: {
        // 加载咖啡店列表操作
        loadCafes( { commit } ){
            commit( 'setCafesLoadStatus', 1 ); //加载中

            CafeAPI.getCafes()
                .then(function (response) {
                    commit( 'setCafes', response.data );
                    commit( 'setCafesLoadStatus', 2 ); //加载成功
                })
                .catch(function () {
                    commit( 'setCafes', [] );
                    commit( 'setCafesLoadStatus', 3 ); //加载失败
                });
        },
        // 加载某个咖啡店详情相关操作
        // data参数是一个对象, 包含我们想要加载的咖啡店的ID
        loadCafe( { commit }, data ){
            commit( 'setCafeLoadStatus', 1 ); //加载中

            CafeAPI.getCafe(data.id)
                .then(function (response) {
                    commit( 'setCafe', response.data );
                    commit( 'setCafeLoadStatus', 2 ); //加载成功
                })
                .catch(function () {
                    commit( 'setCafe', [] );
                    commit( 'setCafeLoadStatus', 3 ); //加载失败
                });
        }
    },

    //mutations 定义了数据的更新方式, 每个模块都有state, 每个state都想要对应的mutation
    mutation: {
        // state:局部模块state
        setCafesLoadStatus( state, status ){
            state.cafesLoadStatus = status;
        },
        setCafes( state, cafes){
            state.cafes = cafes;
        },
        setCafeLoadStatus( state, status){
            state.cafeLoadStatus = status;
        },
        setCafe( state, cafe){
            state.cafe = cafe;
        }
    },

    // 定义gatters 从模块中获取数据
    gatters: {
        getCafesLoadStatus(state){
            return state.cafesLoadStatus;
        },
        getCafes(state){
            return state.cafes;
        },
        getCafeLoadStatus(state){
            return state.cafeLoadStatus;
        },
        getCafe(state){
            return state.cafe;
        }
    }
};
