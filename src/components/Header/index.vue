<template>
    <header class="header">
        <div class="header__container">
            <div class="header__logo">
                <h1>webpack5-vue3-ts-tailwindcss-elementPlus</h1>
            </div>

            <nav class="header__nav">
                <!-- <ul class="header__nav-list">
                    <li><a href="#" class="header__nav-link">首页</a></li>
                    <li><a href="#" class="header__nav-link">产品</a></li>
                    <li><a href="#" class="header__nav-link">服务</a></li>
                    <li><a href="#" class="header__nav-link">关于我们</a></li>
                </ul> -->
            </nav>

            <div class="header__actions">
                <button class="header__button" @click="triggerFireworks">
                    Hello World
                </button>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import confetti from 'canvas-confetti';

const triggerFireworks = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {y: 0.6},
        colors: ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8']
    });
};
</script>

<style lang="scss" scoped>
.header {
    height: 60px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    &--scrolled {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    &__container {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        h1 {
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }
    }

    &__nav {
        &-list {
            display: flex;
            gap: 40px;
            list-style: none;
        }

        &-link {
            font-size: 16px;
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.2s ease;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 0;
                height: 2px;
                background-color: #007bff;
                transition: width 0.2s ease;
            }

            &:hover {
                color: #007bff;

                &::after {
                    width: 100%;
                }
            }
        }
    }

    &__button {
        height: 40px;
        padding: 0 24px;
        font-size: 16px;
        border: none;
        border-radius: 20px;
        background: #007bff;
        color: white;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            background: #0056b3;
            transform: translateY(-2px);
        }
    }
}
</style>
