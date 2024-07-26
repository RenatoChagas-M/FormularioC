<script setup>
defineProps({
    tittle:{
        type: String,
        required: true
    }
})

</script>

<template>
    <header>
        <div class="titulo">
            <h1>{{ tittle }}</h1>
        </div>
    </header>
</template>

<style scoped>
header{
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100vw;
    height: 10vh;
}

.titulo{
    font-weight: lighter;
    font-size: 64px;
    padding-top: 100px;
}
</style>

