import {defineStore} from 'pinia';
import { reactive,computed} from 'vue';
import {selectVariant} from '../interfaces/interfaces'
export const useDataStore = defineStore('data', () =>
{
    const selectedVariants:selectVariant[] = reactive<selectVariant[]>([]);
    const price = computed (() => {
        return selectedVariants.reduce((a, b) => a + Number(b.price), 0)})
    function updData(idP:number,idvariantP:number,optionP:number[],selectP:number[], price:number) {
        if (selectedVariants[idP] !== undefined) {
            selectedVariants[idP].idvariant = idvariantP;
            selectedVariants[idP].option = optionP;
            selectedVariants[idP].select = selectP;
            selectedVariants[idP].price = price;
        } else {
            const variant:selectVariant = {
                    idvariant: idvariantP,
                    option: optionP,
                    select: selectP,
                    price: price
            }
            selectedVariants.push(variant)
        }
    }
    return { selectedVariants, price, updData}
});