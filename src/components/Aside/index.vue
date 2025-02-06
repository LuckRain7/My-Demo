<template>
    <aside class="sidebar">
        <div
            v-for="(item, index) in routerConfig"
            :key="item.path"
            class="sidebar-item"
        >
            <router-link
                :to="item.path"
                class="sidebar-link"
                active-class="active"
            >
                <span class="item-number">{{ index + 1 }}.</span>
                <span class="item-name">{{ item.name }}</span>
            </router-link>
        </div>
    </aside>
</template>

<script lang="ts" setup>
import routerConfig from '@/router/config';
</script>

<style lang="scss" scoped>
.sidebar {
    padding: 1rem;

    &-item {
        margin-bottom: 0.5rem;
    }

    &-link {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: #333;
        border-radius: 4px;
        transition: all 0.3s ease;

        &:hover {
            background-color: #f5f5f5;
        }

        &.active {
            background-color: #e6f7ff;
            color: #1890ff;
        }
    }
}

.item {
    &-number {
        margin-right: 0.5rem;
        font-weight: 500;
    }

    &-name {
        font-size: 0.95rem;
    }
}
</style>
