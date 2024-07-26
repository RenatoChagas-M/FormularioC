<script setup>
defineProps({
    btnTittle: String,
    router: String,
})
</script>

<template>
    <Routerlink :to="router" class="btn">{{ btnTittle }}</Routerlink>
</template>

<style scoped>
    .btn{
        width: 100px;
        height: 50px;
        background-color: #f1f1f1;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset
    }
</style>