<template>
  <VTextField v-bind="props"></VTextField>
</template>

<script setup>
import { VTextField } from 'vuetify/components/VTextField'

const props = defineProps({
  label: {
    type: String,
    default: 'Type something'
  },
})
</script>
