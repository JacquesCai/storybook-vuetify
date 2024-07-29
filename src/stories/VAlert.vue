<template>
  <VAlert v-bind="props"> {{ label }} </VAlert>
</template>

<script setup>
import { VAlert } from 'vuetify/components/VAlert'

const props = defineProps({
  label: {
    type: String,
    default: 'Type something'
  },
})
</script>
