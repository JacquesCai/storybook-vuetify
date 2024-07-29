<template>
  <VBtn v-bind="props"> {{ label }} </VBtn>
</template>

<script setup>
import { VBtn } from 'vuetify/components/VBtn'

const props = defineProps({
  label: {
    type: String,
    default: 'Click me'
  },
})
</script>