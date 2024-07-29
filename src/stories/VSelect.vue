<template>
  <VSelect v-bind="props" :items="['Euro', 'Dollar']"></VSelect>
</template>

<script setup>
import { VSelect } from 'vuetify/components/VSelect'

const props = defineProps({
  label: {
    type: String,
    default: 'Type something'
  },
})
</script>