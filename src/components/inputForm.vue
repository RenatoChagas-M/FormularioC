<script setup>
import { defineProps } from 'vue'

const definitions = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  default: {
    type: String,
    default: ''
  },
  required: {
    type: String,
    default: ''
  },
  min_length: {
    type: String,
    default: '0'
  },
  max_length: {
    type: String,
    default: '0'
  },
  min: {
    type: String,
    default: '0'
  }
})
</script>

<template>
  <input
    :type="definitions.type"
    :definitions.required
    :minlength="definitions.min_length"
    :maxlength="definitions.max_length"
    :min="definitions.min"
  />
</template>

<style scoped></style>
