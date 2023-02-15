<script setup lang="ts">
import Passive from './Passive.vue'
import Active from './Active.vue'
import Selected from './Selected.vue'
import {selectVariant,orderItems} from '../interfaces/interfaces'
import { computed,provide,inject,Ref} from 'vue'
const props = defineProps<{index: number, item: orderItems}>()
const activeIndex = inject('activeIndex') as Ref<Number>
const selectedVariants = inject('selectedVariants') as Ref<selectVariant[]>
provide('index',props.index);
const currentTab = computed(() => {
  if (activeIndex.value === props.index)
  {
    return 'Active'
  } else if ( selectedVariants.value[props.index] !== undefined){
    return 'Selected'
  } else {
    return 'Passive'
  }
});

const tabs = {
  Passive,
  Active,
  Selected
};
</script>
<template>
  <div>
    <div class="line-gray"></div>
  <KeepAlive>
	  <component :is="tabs[currentTab]" :item='item'></component>
  </KeepAlive>
  </div>
</template>

<style scoped>  

.line-gray {
  width: 100%;
  background-color: #ddd;
  height: 2.5px;
}
</style>