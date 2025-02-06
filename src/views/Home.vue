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
    padding: 20px;
    display: flex;

    .nav-list {
        list-style: none;
        padding: 0;

        li {
            margin: 10px 0;
            display: flex;
            align-items: center;
            gap: 12px;

            .index-number {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                background-color: #e3f2fd;
                color: #1e88e5;
                border-radius: 50%;
                font-size: 14px;
                font-weight: 500;
            }

            a {
                text-decoration: none;
                color: #333;
                font-size: 16px;
                padding: 8px 16px;
                border-radius: 4px;
                transition: all 0.3s ease;

                &:hover {
                    background-color: #f0f0f0;
                    color: #1e88e5;
                }
            }
        }
    }
}
</style>
