<script setup lang="ts">
import {ref,computed,inject,Ref} from 'vue'
import {orderVariant,selectVariant} from '../interfaces/interfaces'
const props = defineProps<{variant: orderVariant , idvariant: number }>();
const selectVariants = inject('selectedVariants') as Ref<selectVariant[]>;;
const updData = inject('updData') as (idP: number, idvariantP: number, optionP: number[], selectP: number[], price: number) => void;
const index = inject('index') as number;
const changeIndex = inject('changeIndex') as (val:number) => void; 
const select = computed(() => {
  if (selectVariants.value[index] === undefined) {
    return 'Выбрать'
  }
  else if (selectVariants.value[index].idvariant === props.idvariant){
    return "Выбрано"
  } else {
    return 'Выбрать'
  }
}) 
function selectValue() {
  updData(index, props.idvariant,checked.value,selected.value,price.value);
  changeIndex(index +1 );
}
const desabledClass = computed (() => {
  return (props.variant.select != [] && (selected.value.length != props.variant.select.length )) ? 'button_default_desabled' : '';
})
const buttonClass = computed(() => { return select.value === 'Выбрать' ? '': 'button_selected'})
const price = computed (() => {
  return checked.value.reduce((a, b) => a + props.variant.options[b].price, 0) 
    + selected.value.reduce((a, b, index) => a + props.variant.select[index].items[b].price, 0) 
    + props.variant.price_default
})
const checked = ref<number[]>([]);
const selected = ref<number[]>([]);

</script>
<template>
  <div class="space_variant">
    <div class='titleVariant'>
      {{variant.title}}
    </div>
    <div class='description'>
      <div class="parag" v-for="parag in variant.description.split('\n')">{{parag}}</div>
    </div>
    <div class="price_default">{{price}} ₽</div>
    <div class="buttons">
      <label v-for="(option,index) in variant.options" class="option">
        <input type="checkbox" :value="index" v-model="checked">
        <div>{{option.title}}</div>
      </label>
      <div v-for="(select,index) in variant.select">
      <div class="descriptionSelect">{{select.title}}</div>
      <select class="selected" v-model="selected[index]">
        <option disabled selected hidden value="undefined">Выбрать</option>
        <option v-for="(item,index) in select.items" :value="index">{{item.title}}</option>
      </select>
    </div>
      <button class='option  button_default' :class="buttonClass, desabledClass" @click='selectValue'>{{select}}</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
input{
  cursor: pointer;
}
.parag{
  margin: 12px 0px;
}
.descriptionSelect{
  padding-top: 10px;
  font-size: 13px;
  color: #555;
}
.price_default {
  padding-right: 10px;
  text-align: right;
  grid-column: 3/3;
  grid-row: 1/1;
}
.description {
  font-size: 14px;
  color: #555;
  margin-top: 5px;
  grid-column: 1 / 3;
}
.buttons{
  display: grid;
  margin-left: 14px;
  padding-left: 14px;
  border-left: 1px #ddd solid;
  align-content: end;
  grid-column: 3 / 3;
}
.option {
  height: 34px;
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  padding: 0 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  width: 100%;
  background-color: transparent;
  color: #555;
  &:hover{
    background-color: #e7e7e7;
  }
}
.button_default{
  background-color: #98adb9;
  color: #fff;
  border-color: #8aa0ad;
  &:hover{
    background-color: #8aa0ad;;
    border-color: #8aa0ad;
  }
  &_desabled{
    background-color: transparent;
    color: #c1c6cb;
    border: 1px solid #ddd;
    opacity: .5;
    pointer-events: none;
  }
}
.button_selected {
  background-color: #5cb85c;
  color: white;
  border-color: #4cae4c;
  &:hover{
    background:  #75d075;
    border-color: #75d075;;
  }
}
.selected{
  margin-top: 10px;
  width: 100%;
  height: 34px;
  background-color: #fff;
  color: #333;
  padding: 4px 12px;
  font-size: 14px;
  line-height: 2.5;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.space_variant {
  display: grid;
  background-color: rgb(248, 248, 248);
  padding: 10px;
  margin-bottom: 16px;
  border-left-style: solid;
  border-left-color: v-bind('variant.color');
  border-left-width: 6px;
  border-radius: 4px;
  grid-template-columns: repeat(3,1fr);
  color: #333;
  font-size: 18px;
}
.titleVariant {
  font-weight: bold;
  grid-column: 1 / 3;
}  
</style>