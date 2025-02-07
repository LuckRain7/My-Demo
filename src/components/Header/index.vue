<template>
    <header class="header">
        <div class="header__container">
            <div class="header__logo">
                <router-link to="/">
                    <h1 class="cyber-text">> My-Demo_</h1>
                </router-link>
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
                    > Execute
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
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    border-bottom: 1px solid #00ff00;

    &--scrolled {
        box-shadow: 0 2px 10px rgba(0, 255, 0, 0.2);
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
            color: #00ff00;
            font-family: 'Courier New', monospace;
            text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
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

    .cyber-text {
        animation: blink 1.5s infinite;
    }

    &__button {
        height: 40px;
        padding: 0 24px;
        font-size: 16px;
        border: 1px solid #00ff00;
        border-radius: 4px;
        background: transparent;
        color: #00ff00;
        font-family: 'Courier New', monospace;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(0, 255, 0, 0.2),
                transparent
            );
            transition: 0.5s;
        }

        &:hover {
            background: rgba(0, 255, 0, 0.1);
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
            transform: translateY(-2px);

            &::before {
                left: 100%;
            }
        }
    }
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}
</style>
