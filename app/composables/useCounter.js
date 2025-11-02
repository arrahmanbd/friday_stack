import {ref} from "vue";

// composable hooks, no need to import
export function useCounter(){
    const count = ref(0);

    function increment(){
        count.value++
    }
    return {count,increment}
}