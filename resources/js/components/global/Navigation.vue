<style>
    @import '~@/abstracts/_variables.scss';

    nav.top-navigation{
        background-color: $white;
        height: 50px;
        border-bottom: 2px solid $dark-color;

        span.
    }
</style>
<template>
    <nav class="top-navigation">
        <router-link :to="{ name: 'home' }">
            <span class="logo">Roast</span>
        </router-link>

        <ul class="links">
            <li>
                <router-link :to="{ name: 'cafes' }">
                    Cafes
                </router-link>
            </li>
        </ul>

        <div class="right">
            <img class="avatar" :src="user.avatar" v-show="userLoadStatus == 2" />
        </div>
    </nav>
</template>
<script>
    export default {
        // 定义组件的计算属性
        computed: {
            // 从 Vuex 中获取用户加载状态
            userLoadStatus(){
                return this.$store.getters.getUserLoadStatus;
            },

            // 从 Vuex 中获取用户信息
            user(){
                return this.$store.getters.getUser;
            }
        }
    }
</script>
