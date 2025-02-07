<template>
    <div class="home-container">
        <ul class="nav-list">
            <li v-for="(item, index) in RouterConfig" :key="item.path">
                <span class="index-number">{{ index + 1 }}</span>
                <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import RouterConfig from '@/router/config';
</script>

<style lang="scss" scoped>
.home-container {
    padding: 12px;
    display: flex;
    height: 100%;

    .nav-list {
        list-style: none;
        padding: 0;
        width: 100%;

        li {
            margin: 8px 0;
            display: flex;
            align-items: center;
            gap: 8px;

            .index-number {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                font-size: 14px;
                background-color: #f5f5f5;
            }

            a {
                text-decoration: none;
                font-size: 14px;
                color: #333;
                padding: 6px 10px;
                border-radius: 4px;

                &:hover {
                    background-color: #f5f5f5;
                }
            }
        }
    }
}
</style>
