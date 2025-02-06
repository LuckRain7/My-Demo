<template>
    <div class="w-[700px]">
        <!-- 用于计算输入框宽度，进行换行操作 -->
        <div :class="{'calc-div': !isNeedShowCalculateDiv}">
            <!-- 注意这里的span的样式，需要和textarea的font样式一致 -->
            <span
                ref="CalculateSpanRef"
                style="font-size: 14px; color: #333333; line-height: 22px"
            ></span>
        </div>

        <!-- 通过 flex-col 实现左右布局 -->
        <div
            ref="InputBoxRef"
            class="input-box px-2 flex"
            :class="[isBig ? ' flex-col items-end' : 'items-center']"
        >
            <ElInput
                class="my-input"
                v-model="textarea"
                resize="none"
                type="textarea"
                placeholder="Please input"
                :autosize="{minRows: 1, maxRows: 4}"
            ></ElInput>
            <button
                class="submit-btn flex-shrink-0"
                :class="[isBig ? 'mb-1' : '']"
            >
                发送
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref, watch, computed} from 'vue';
import {ElInput} from 'element-plus';

const textarea = ref('');
const isBig = ref(false);
const CalculateSpanRef = ref();
const InputBoxRef = ref();
const isNeedShowCalculateDiv = ref(false);

const textareaWidth = computed(() => {
    let width = InputBoxRef.value.offsetWidth;
    width -= 8 * 2; // 2 * 8px 边框
    width -= 11 * 2; // 2 * 11px 内边距
    width -= 52; // 52px 按钮宽度
    width -= 5; // 留 5px 框量
    return width;
});

watch(
    () => textarea.value,
    () => {
        handleTextareaBreak();
    }
);

function handleTextareaBreak() {
    CalculateSpanRef.value.textContent = textarea.value;
    const maxWidth = textareaWidth.value;
    const textWidth = CalculateSpanRef.value.offsetWidth;
    console.log(
        `🌧🌧🌧 [isBig=${
            textWidth > maxWidth
        }, maxWidth=${maxWidth}, textWidth=${textWidth}]`
    );
    if (textWidth > maxWidth) {
        isBig.value = true;
    } else {
        isBig.value = false;
    }
}
</script>

<style lang="scss" scoped>
.input-box {
    width: 100%;
    min-height: 52px;

    .my-input {
        font-size: 14px;
        color: #333333;
        line-height: 22px;
    }

    .submit-btn {
        width: 52px;
        height: 28px;
        background: linear-gradient(270deg, #00dc93 0%, #00dcc2 100%);
        box-shadow: 0px 1px 12px 0px rgba(4, 211, 193, 0.1);
        font-weight: 500;
        font-size: 14px;
        color: #ffffff;
        border-radius: 8px;
    }

    .calc-div {
        font-size: 14px;
        color: #999999;
        line-height: 22px;
        visibility: hidden;
        position: absolute;
        left: 0;
        top: 0;

        z-index: -1000;
        max-width: 90vw;
        overflow: hidden;
    }
}

.calc-div {
    position: absolute;
    top: -9999px;
    left: -9999px;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
}
</style>
