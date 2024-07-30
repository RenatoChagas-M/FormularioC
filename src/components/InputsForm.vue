<script setup>
import { useInfoStore } from '@/stores/form'

const infoStore = useInfoStore()

defineProps(
   {
    label:String,
    type:String,
    placeholder:String,
    required: String,
    assignedconstant: String,
    index: Number,
    specific: {
      type: Number,
      default: 0
    }
   }
)


</script>

<template>
  <div class="iptDiv">
    <label>{{label}}</label>
    <input :type="type" :placeholder="placeholder" :required="required" v-model="infoStore.allInfo[index+specific].result"/>
  </div>
</template>

<style scoped>

.iptDiv {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 50%;
}

.iptDiv > input {
  width: 100%;
  height: 30px; 
  background: none;
  border-bottom: 1px solid gray;
}

.iptDiv > input:focus{
    border: 0px;
}

</style>
