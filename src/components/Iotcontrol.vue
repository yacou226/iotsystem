<template>
    <div class="">
      <div class="container flex justify-between items-center ">
         <h4 class="p-2 text-2xl text-left mb-2 ml-4 font-bold ">DashBoard</h4>
         <h1 class="mr-8">{{ timestamp }}</h1>
      </div>
     <div class="lg:flex justify-around items-center">
 
    <div class="flex justify-between  items-center m-4 rounded-lg">
     <div  class="max-w-md md:w-full  flex" >
  <!-- timeline  -->
     <ol class="border-l border-gray-300 mr-4   flex-blockjustify-between h-full  ">
    <li>
      <div class="flex flex-start items-center pt-0 pb-12">
        <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
        <p class="text-gray-500 text-sm">Haut</p>
      </div>
    </li>
    <li>
      <div class="flex flex-start items-center pt-8 pb-6">
        <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
        <p class="text-gray-500 text-sm">Moyen</p>
      </div>
      <div class="flex flex-start items-center pt-16">
        <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
        <p class="text-gray-500 text-sm">Faible</p>
      </div>
    </li>
  </ol>
  <!-- liquid -->
  <div class="bowl shadow-lg">
    <!-- :style="{height: level +'%'}" -->
    <div :class="[this.$store.state.levelHigh === 0 && this.$store.state.levelLow === 0 ? 'liquid':'liquid2']"   class="liquid flex items-center justify-center text-white font-bold" >
    <!-- <div :class="[this.$store.state.levelHigh === 0 && this.$store.state.levelLow === 0 ? 'liquid':'liquid2']" :style="{height:100+'%'}"  class="liquid flex items-center justify-center text-white font-bold" > -->
      <h4 v-if="this.$store.state.levelHigh === 1 && this.$store.state.levelLow === 0 ">20%</h4>
      <h4 v-if="this.$store.state.levelHigh === 0 && this.$store.state.levelLow === 0 ">100%</h4>
      <h4 v-if="this.$store.state.levelHigh === 1 && this.$store.state.levelLow === 1 "  >Tube vide</h4>

      </div>
   </div>
    </div>
</div>
<div class="flex justify-between items-center m-4 rounded-lg ">
    <!-- chart js data -->
    <div>
<pie-chart :data="[['Temperature', temp ], ['Humidité',  humidity ], ['pression', pressure], ['periode', 23]]"></pie-chart>    </div>
</div>
     </div>
<!-- light section control -->
    </div>
</template>

<script>
import axios, { Axios } from 'axios'


import {mapState} from 'vuex'
export default {
    name:'Iotcontrol',
    components:{

    },
    data() {
      return {
        level:30,
        axios,
        weather:[],
        humidity:'',
        pressure:'',
        temp:''

         
      }
    },
     created() {
             // ...mapState(['LED_STATUS'])
            },
    mounted() {
      this.GetWaterLevel();

        setInterval(this.getNow, 10);
        this.getWeatherData();
        this.GetlevelHigh();
        this.GetlevelLow();
   
    },
    methods: {
      GetWaterLevel(){
        this.$store.commit('getWaterLevel');
      },
       GetlevelHigh(){
        this.$store.commit('getlevelHigh');
      },
       GetlevelLow(){
        this.$store.commit('getlevelLow');
      },
      getNow: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    this.timestamp = dateTime;
                },
        async getWeatherData(){
        let responses = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=5.3564492&lon=-3.9676731&appid=838aca67d5c6c12194f3097461c5ad15") ;
        console.log(responses);
        this.weather=responses.data.main;
        this.humidity=responses.data.main.humidity;
        this.temp= this.weather.temp;
        var tempResult=(5/9) * (this.temp - 32);
        console.log("ffdfdfddfff",tempResult);
        this.pressure=this.weather.pressure;
        console.log(this.pressure);
                }
    },
}
</script>

<style>
* {
  /* padding: 0;
  margin: 0;
  box-sizing: border-box; */
}

body {
  /* display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f7f5f5; */
}

.bowl {
  position: relative;
  width: 150px;
  height: 250px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius:20px ;
  border: 15px solid transparent;
  background: rgba(75, 72, 72, 0.1);
  animation: animate 5s linear infinite;
  transform-origin: bottom center;
}



.bowl::after {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  width: 150px;
  height: 80px;
  background: rgb(255, 255, 255, 0.05);
  border-radius: 100%;
  transform: translate(-50%, -50%);
}

.liquid {
  position: absolute;
  /* max-height: 100%; */
  left: -5px;
  right: 5px;
  bottom: 1px;
  width: 110%;
  height: 100%;
  background: #14a8d9;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  filter: drop-shadow(0 0 30px #b8cacc);
  animation: animateliquid 2s linear infinite;
  transform-origin: top center;
}

.liquid2 {
  position: absolute;
  /* max-height: 20%; */
  left: -5px;
  right: 5px;
  bottom: 1px;
  width: 110%;
  height: 20%;
  background: #e42312;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  filter: drop-shadow(0 0 30px #b8cacc);
  animation: animateliquid 2s linear infinite;
  transform-origin: top center;
}

.Small {
  position: absolute;
  max-height: 100%;
  left: -5px;
  right: 5px;
  bottom: 1px;
  width: 110%;
  height: 90%;
  background: #d43211;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  filter: drop-shadow(0 0 30px #b8cacc);
  animation: animateliquid 2s linear infinite;
  transform-origin: top center;
}


/* @keyframes animate {
  0%,
  50%,
  100% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(0deg);
  }
  70% {
    transform: rotate(0deg);
  }
} */

@keyframes animateliquid {
  0%,
  50%,
  100% {
    transform: translatex(-2px);
  }
  30% {
    transform: translateY(1px);
  }
  70% {
    transform: translatex(-2px);
  }
}

 
</style>