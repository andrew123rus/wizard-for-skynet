<script setup lang="ts">
import {orderVariant} from '../interfaces/interfaces'
defineProps<{item: orderVariant}>();
</script>
<template>
  <div>
   <div class='title'>
     {{item.title}}
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-top: 14px;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 16px;
  opacity: .3;
} 
</style>