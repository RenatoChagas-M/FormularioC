<script setup>
defineProps(
    {
        IptDefinitions:{
            label:{
                type: String,
            },
            lblName:{
                type: String,
            },
            type:{
                type: String,
            },
            placeholder:{
                type: String,
                required: true
            },
            required:{
                required: true,
            }
        }
    }
)
</script>

<template>
  <div v-for="(item, index) in IptDefinitions" :key="index" class="iptDiv">
    <label>{{ item.label }}</label>
    <input :type="item.type" :placeholder="item.placeholder" />
  </div>
</template>

<style scoped>

.ipt {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}

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

</style>
