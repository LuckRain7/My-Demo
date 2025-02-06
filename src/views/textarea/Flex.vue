<template>
    <div class="p-5">
        <div class="card flex flex-col justify-center items-center">
            <div class="flex-1"></div>
            <FlexInput></FlexInput>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FlexInput from './cpns/FlexInput.vue';
</script>

<style lang="scss" scoped>
.card {
    height: 700px;
    width: 700px;
    background: powderblue;
    margin: 0 auto;
}
</style>
