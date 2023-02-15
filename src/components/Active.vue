<script setup lang="ts">
import Variant from './Variant.vue'
import {orderItems} from '../interfaces/interfaces'
defineProps<{item: orderItems}>();
</script>
<template>
  <div class='title'>
    {{item.title}}
  </div>
  <Variant v-for="(variant, index) in item.variants" :variant='variant' :idvariant="index"></Variant>
</template>

<style scoped>
.title {
  margin-top: 14px;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 16px;
}
</style>