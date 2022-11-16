<template>
    <div>
        <h4>space left {{spaceleft}} out of capacity {{capacity}}</h4>
        <button @click="inncremennt">Inncrement</button>
    </div>
</template>


<script>
import {ref, computed} from'vue'
 export default{
    setup() {
        const capacity = ref(32);
        const attending = ref(['bob','joe','tim']);


   function inncremennt(){
        capacity.value ++;
    }

    const spaceleft = computed(()=>{
      return capacity.value - attending.value.length;
    })

        return {capacity,inncremennt, attending , spaceleft};
    }
 }
</script>