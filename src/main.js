import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase';
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'



import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  //...
  apiKey: "AIzaSyCfzbiw3rXSXkmwtwpYwptR-uFZUUkU2Zc",
    authDomain: "fir-led-5e401.firebaseapp.com",
    databaseURL: "https://fir-led-5e401-default-rtdb.firebaseio.com",
    projectId: "fir-led-5e401",
    storageBucket: "fir-led-5e401.appspot.com",
    messagingSenderId: "122228205922",
    appId: "1:122228205922:web:087b94d021bb2ef78f643b",
    measurementId: "G-DQ0QK0V3DS"
};

 firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).use(VueChartkick).mount('#app');
