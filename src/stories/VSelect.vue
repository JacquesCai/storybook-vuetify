<template>
  <VSelect v-bind="props" :items="['Euro', 'Dollar', 'Pound', 'Yen']" />
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
