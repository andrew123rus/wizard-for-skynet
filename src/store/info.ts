import {defineStore} from 'pinia'
import { ref } from 'vue'
import {orderItems} from '../interfaces/interfaces'
export const useInfoStore = defineStore('info', () =>
{
   const dataforjson = ref<orderItems[]>([])
   async function getData() {
      dataforjson.value = await fetch('https://cors-anywhere.herokuapp.com/https://skynet.ru/job/frontend/data.json')
      .then((response) => response.json() as Promise<orderItems[]>) 
   }
    const activeIndex=ref<number>(0)
    function changeIndex (val:number) {
        activeIndex.value = val
    }
    return { dataforjson,activeIndex,changeIndex,getData}
});
