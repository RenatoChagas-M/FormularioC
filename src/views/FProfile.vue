<script setup>
import TittlePage from "@/components/TittlePage.vue";
import ButtonBack from "@/components/ButtonBack.vue";
import { useInfoStore } from "@/stores/form";

const infoStore = useInfoStore();
</script>

<template>
    <TittlePage tittle="Profile" />
    <main class="cnt-wh">
        <div class="infoDiv ">
            <div class="flex flex-col">
                <i class="flex p-10 text-xl" v-for="(item, index) in infoStore.allInfo" :key="index" >
                    {{ item.label }}:{{ item.result }}
                </i>
            </div>
            <div class="flex justify-center items-center p-10">
                <ButtonBack btnTittle="Back" router="/FSecond" />    
            </div>
        </div>
    </main>
</template>

<style scoped>
.cnt-wh {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 90vh;
}

.infoDiv {
    display: flex;
    align-content: center;
    flex-direction: column ;
    width: 40%;
    height: 60%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.infoDiv:nth-child(1){
    overflow-y: scroll;
}

.rep-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #000;
}
</style>
