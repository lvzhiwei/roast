<style>
    @import '~@/abstracts/_variables.scss';
</style>

<template>
    <div>
        <span v-show="cafesLoadStatus == 1">加载中...</span>
        <span v-show="cafesLoadStatus == 2">数据加载成功！</span>
        <span v-show="cafesLoadStatus == 3">数据加载失败！</span>
    </div>
</template>

<script>
    export default {
        // 钩子函数
        created() {
            //使用vue存储器来分发 loadCafes 动作来调用API, 加载咖啡店, 并将数据保存到Cafes模块中的cafes数组,这样当页面加载时, 就会加载所有咖啡店数据
            return this.$store.dispatch('loadCafes');
        },
        // 定义组件的计算属性
        computed: {
            // 获取cafes 加载状态
            cafeLoadStatus(){
                return this.$store.getters.getCafesLoadStatus;
            },

            // 获取 cafes
            cafes(){
                return this.$store.getters.getCafes;
            }
        }
    }
</script>
