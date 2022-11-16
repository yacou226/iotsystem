<template>
  <div class="home">
   <div>
   <Iotcontrol />
  
   <!-- tab iot conhtrol menu --> 
   <div  class="bg-white shadow relative mt-4 md:overscroll-auto	">
	    <nav  class="flex justify-center"> 
		  <a x-spread="tab" class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-600 transition" href="#">Led control</a>
		  <a x-spread="tab" class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-600 transition" href="#">Irrigation system</a>
		  <a x-spread="tab" class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-600 transition" href="#">Water control system</a>
		  <a x-spread="tab" class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-600 transition" href="#">Local regulations</a>
  	</nav>
	<div x-spread="indicator" class="border-t-2 border-indigo-600 absolute left-0 bottom-0 transition-all duration-500"></div>
  </div>

  <!-- Led controller -->
  <div class="">
        <Ledcontrol />
       
  </div>

   
   </div> 
  </div>
</template>

<script>
import firebase from 'firebase'
import Iotcontrol from'../components/Iotcontrol.vue'
import Ledcontrol from '../components/Ledcontrol.vue'
export default {
  name: 'Home',
  components:{
     Iotcontrol,
     Ledcontrol
  },
data() {
  return {
    firebase,
   
  }
},
methods: {
  
},
}
</script>

<style scoped>



</style>
