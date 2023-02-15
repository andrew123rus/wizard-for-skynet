<script setup lang="ts">
import {inject,computed,Ref} from 'vue'
import {selectVariant, orderItems} from '../interfaces/interfaces'
const props = defineProps<{item: orderItems}>();
const index = inject('index') as number;
const changeIndex = inject('changeIndex') as (val:number) => void ; 
const selectedVariants = inject('selectedVariants') as Ref<selectVariant[]>;
const variant = computed(() => {return props.item.variants[selectedVariants.value[index].idvariant]} )
const selected = computed(() => {return selectedVariants.value[index]})

</script>
<template>
  <div class="space_selected" @click="changeIndex(index)">
    <div class='title'>
      <div>
        {{item.title}}
        </div>
        <div class="variant_title">
          {{variant.title}}
          <div class="options">
          <span v-for="option in selected.option">+ {{variant.options[option].title}}</span>
          <span v-for="select,id in selected.select">+ {{variant.select[id].items[select].title}}</span>
          </div>
        </div>
    </div>
    <div class="price">{{selected.price}} ₽</div>
  </div>
</template>

<style scoped>
.price {
  margin-right: 16px;
  font-size: 20px;
  align-self: center;
  justify-self: end;
}
.options{
  margin-top: 10px;
  font-size: 14px;
  display: grid;
}
span{
  margin-top: 2px;
}
.variant_title {
  font-size: 18px;
  border-left: 6px solid;
  padding-left: 10px;
  padding-top: 5px;
  margin-top: 5px;
  border-left-color: v-bind('variant.color');
}
.title {
  margin-top: 14px;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 16px;
}
.space_selected {
  display: grid;
  grid-template-columns: 50% 50%;
  color: #666;
  cursor: pointer;
}
</style>