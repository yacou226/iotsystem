<template>
<div class="flex md:overflow-auto">
 <div class="">
  <div class="w-full m-4 flex mx-auto  ml-8">
    <div class="w-32 h-40 bg-white shadow-lg shadow-cyan-500/50 rounded border-1 p-2 block m-2 ">
    <div class="flex justify-between items-center h-24  max-w-md ">
      <!-- icon -->
      <div>
        <img  class="w-8 h-8" src="../assets/faucet.png">
      </div>
      <!-- switch -->
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" :class="[this.$store.state.LED_STATUS ==='ON'? 'text-yellow-400' : '']">
         <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
         <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clip-rule="evenodd" />
        </svg>
      </div>
  </div>
  <!-- status -->
  <h4 class="text-left">Pompe </h4>
  <p v-if="this.$store.state.LED_STATUS ==='ON' " class="text-left text-blue-800 font-bold overflow-visible">OUVERTE</p>
  <p v-else class="text-left text-blue-800 font-bold overflow-visible">FERMER</p>
  
</div>
      </div>
</div>
 <div class="">
  <div class="w-full m-4 flex mx-auto  ml-8">
    <div class="w-32 h-40 bg-white shadow-lg shadow-cyan-500/50 rounded border-1 p-2 block m-2 ">
    <div class="flex justify-between items-center h-24  max-w-md ">
      <!-- icon -->
      <div>
        <img  class="w-8 h-8" src="../assets/faucet.png">
      </div>
      <!-- switch -->
      <div>
       <label for="yellow-toggle" class="inline-flex relative items-center  cursor-pointer">
          <input v-model="electrovan1" @click="Electrovan1()"   type="checkbox"    id="yellow-toggle" class="sr-only peer" >
          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
        </label>
      </div>
  </div>
  <!-- status -->
  <h4 class="text-left">Electrovanne1</h4>
  <p v-if="this.$store.state.electrovan1 ==='ON' " class="text-left text-blue-800 font-bold overflow-visible">OUVERTE</p>
  <p v-else class="text-left text-blue-800 font-bold overflow-visible">FERMER</p>
</div>
      </div>
</div>

 <div class="">
  <div class="w-full m-4 flex mx-auto  ml-8">
    <div class="w-32 h-40 bg-white shadow-lg shadow-cyan-500/50 rounded border-1 p-2 block m-2 ">
    <div class="flex justify-between items-center h-24  max-w-md ">

      <!-- icon -->
      
      <div>
        <img  class="w-8 h-8" src="../assets/faucet.png">
      </div>
      <!-- switch -->
      <div>
       <label for="green-toggle" class="inline-flex relative items-center  cursor-pointer">
          <input v-model="electrovan2" @click="Electrovan2()"   type="checkbox"    id="green-toggle" class="sr-only peer" >
          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
        </label>
      </div>
  </div>
  <!-- status -->
  <h4 class="text-left">Electrovanne2 </h4>
  <p v-if="this.$store.state.electrovan2 ==='ON' " class="text-left text-blue-800 font-bold overflow-visible">OUVERTE</p>
  <p v-else class="text-left text-blue-800 font-bold overflow-visible">FERMER</p>
  
</div>
      </div>
        
</div>
</div>

</template>


<script>
import firebase from 'firebase'
export default {
    name:"Ledcontrol",

       mounted() {
       this.GetData();
       this.getelectrovan1();
       this.getelectrovan2();
   },
    data() {
        return {
            firebase,
            led:false,
            electrovan1:false,
            electrovan2:false,
        
        }
    },


    methods: {
        GetData(){
          this.$store.commit("getData");
        },
        getelectrovan1(){
           this.$store.commit("getelectrovan1");
        },
         getelectrovan2(){
           this.$store.commit("getelectrovan2");
        },
     
    pompe(){ 

    var db=this.$store.state.LED_STATUS;
    var firebaseRef = firebase.database().ref().child("LED_STATUS");
    if(db= "ON" && this.led){
     this.led=true;
    firebaseRef.set("OFF");
    db = "OFF";
  
    }else{
         firebaseRef.set("ON");
         db= "ON";
    }
    },
    
     Electrovan1(){ 

    var db=this.$store.state.electrovan1;
    var firebaseRef = firebase.database().ref().child("electrovan1");
    if(db= "ON" && this.electrovan1){
     this.electrovan1=true;
    firebaseRef.set("OFF");
    db = "OFF";
  
    }else{
         firebaseRef.set("ON");
         db= "ON";
    }
     },

     Electrovan2(){ 

    var db=this.$store.state.electrovan2;
    var firebaseRef = firebase.database().ref().child("electrovan2");
    if(db= "ON" && this.electrovan2){
     this.electrovan2=true;
    firebaseRef.set("OFF");
    db = "OFF";
  
    }else{
         firebaseRef.set("ON");
         db= "ON";
    };

      
     

    }}
    
}
</script>