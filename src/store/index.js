import { createStore } from 'vuex'
import firebase from 'firebase'

export default createStore({
  state: {
    LED_STATUS:"",
    levelHigh:null,
    levelLow:null,
    waterLevel:null,
    electrovan1:null,
    electrovan2:null,
    userInfo:[],
  },
  getters:{

  },
  mutations: {
    getlevelHigh(state){
      
      firebase.database().ref().on("value",getData);
        function getData(data) {
            state.levelHigh = data.val().levelHigh;
            console.log("levelhigh",state.levelHigh);
            
        }
    },
    getlevelLow(state){
      //let database=firebase.database();
      firebase.database().ref().on("value",getData);
        function getData(data) {
            state.levelLow=data.val().levelLow;
            console.log("levelLow",state.levelLow);
        }
    },
    getData(state){
      //let database=firebase.database();
      firebase.database().ref().on("value",getData);
        function getData(data) {
            state.LED_STATUS=data.val().LED_STATUS;
            console.log(state.LED_STATUS);
        }
    },
    getelectrovan1(state){
      firebase.database().ref().on("value",getData);
      function getData(data) {
          state.electrovan1=data.val().electrovan1
          ;
          console.log('electrovan1',state.electrovan1);
      }

    },
    getelectrovan2(state){
      firebase.database().ref().on("value",getData);
      function getData(data) {
          state.electrovan2=data.val().electrovan2;
          console.log('electrovan2',state.electrovan2);
      }

    },
    getWaterLevel(state){
      firebase.database().ref().on("value",getData);
      function getData(data) {
          state.waterLevel=data.val().waterLevel;
          console.log(state.waterLevel); 
      }
    },
  GOOGLE(state){
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    state.userInfo = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
  },
  actions: {
    

  },
  modules: {
  }
})
