<script setup>
defineProps(
   {
    label:String,
    type:String,
    placeholder:String,
    
   }
)
</script>

<template>
  <div class="iptDiv">
    <label>{{label}}</label>
    <input :type="type" :placeholder="placeholder" />
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
