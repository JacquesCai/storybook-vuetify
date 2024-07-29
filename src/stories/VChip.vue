<template>
  <VChip v-bind="props"> {{ label }} </VChip>
</template>

<script setup>
import { VChip } from 'vuetify/components/VChip'

const props = defineProps({
  label: {
    type: String,
    default: 'Type something'
  },
})
</script>
