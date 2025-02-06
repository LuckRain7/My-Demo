<template>
    <div class="app">
        <ElContainer>
            <ElHeader class="header">
                <Header></Header>
            </ElHeader>
            <ElContainer>
                <ElMain class="my-main">
                    <router-view></router-view>
                </ElMain>
            </ElContainer>
        </ElContainer>
    </div>
</template>

<script lang="ts" setup>
import {ElContainer, ElHeader, ElMain} from 'element-plus';
import Header from '@/components/Header/index.vue';

import Aside from '@/components/Aside/index.vue';
</script>

<style lang="scss">
.app {
    height: 100vh;
    .header {
        padding: 0;
    }
    .aside {
        height: calc(100vh - 60px);
        background-color: #f5f7fa;
        border-right: solid 1px #e6e6e6;
        transition: all 0.3s;

        &:hover {
            box-shadow: 2px 0 6px rgba(0, 21, 41, 0.05);
        }

        .el-menu {
            border-right: none;
        }
    }
    .my-main {
        padding: 0;
        height: calc(100vh - 60px);
    }
}
</style>
