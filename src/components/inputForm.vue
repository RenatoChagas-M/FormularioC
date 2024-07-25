<script setup>
import { defineProps } from "vue";

defineProps({
  type: {
    type: String,
    default: "text",
  },
  default: {
    type: String,
    default: "",
  },
  required: {
    type: String,
    default: "",
  },
  min_length: {
    type: String,
    default: "0",
  },
  max_length: {
    type: String,
    default: "0",
  },
  min: {
    type: String,
    default: "0",
  },
  tittleLBL: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <section class="allInputs">
    <div>
      <label>
        {{ tittleLBL }}
      </label>
    </div>
    <div>
      <input
        :type="type"
        <!-- require  -->

        :minlength="min_length"
        :maxlength="max_length"
        :min="min"
      />
    </div>
  </section>
</template>

<style scoped>
.allInputs {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

input {
  border: 1px solid #000;
  width: 5vw;
}
</style>
