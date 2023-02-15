<script setup lang="ts">
import Comp from './Comp.vue'
import {storeToRefs} from 'pinia'
import {useDataStore} from '../store/data'
import {useInfoStore} from '../store/info'
import {provide} from 'vue'
const {dataforjson,activeIndex} = storeToRefs(useInfoStore());
const {changeIndex,getData} = useInfoStore();
const {selectedVariants, price} = storeToRefs(useDataStore());
const {updData} = useDataStore();
provide('updData',updData);
provide('changeIndex',changeIndex);
provide('activeIndex',activeIndex);
provide('selectedVariants',selectedVariants)
getData();
</script>

<template>
<div class="body">
    <Comp v-for="(item,index) in dataforjson" :item="item" :index="index"></Comp>
    <div class="space_price">
        <div class="price_description">ИТОГО К ОПЛАТЕ</div> 
        <div class="price">{{ price }} ₽</div>
    </div>
</div>
</template>

<style scoped>
.price{
    grid-column: 3 / 3;
    font-size: 26px;
    text-align: right;
}
.space_price{
    display: grid;
    padding: 14px;
    margin-bottom: 16px;
    border-radius: 4px;
    grid-template-columns: repeat(3,1fr);
    background-color: #5cb85c;
    color: #fff;
}
.price_description{
    grid-column: 1 / 3;
    font-size: 26px;
    font-weight: bold;
}
.body {
    font-size: 15px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #000;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 800px;
    min-width: 382px;
}
div {
    display: block;
}
</style>