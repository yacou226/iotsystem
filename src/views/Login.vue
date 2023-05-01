<template>
<!-- component -->

    <div class="max-w-lg mx-auto my-8 bg-white p-6 rounded-xl shadow shadow-slate-300">
        <h1 class="text-4xl font-medium">Login</h1>
        <p class="text-slate-500">Hello, Bienvenue 👋</p>

        <div class="my-5">
            <button @click="Google()" class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-6 h-6" alt=""> <span>Se connecter Avec Google</span>
            </button>
        </div>
        <form @submit="signIn" action="" class="my-10">
            <div class="flex flex-col space-y-5">
                <label for="email">
                    <p class="font-medium text-slate-700 pb-2 text-left">Email address</p>
                    <input v-model="email" id="email" name="email" type="email" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address">
                </label>
                <label for="password">
                    <p class="font-medium text-slate-700 pb-2 text-left">Password</p>
                    <input v-model="password" id="password" name="password" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password">
                </label>
                <div class="flex flex-row justify-between">
                    <div>
                        <label for="remember" class="">
                            <input type="checkbox" id="remember" class="w-4 h-4 border-slate-200 focus:bg-indigo-600">
                            Remember me
                        </label>
                    </div>
                    <div>
                        <a href="#" class="font-medium text-indigo-600">Forgot Password?</a>
                    </div>
                </div>
                <button  class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Login</span>
                </button>
                <p class="text-red-800">{{erreur}}</p>
                
            </div>
        </form>
    </div>
    

</template>
<script>
import store from '../store/index'
import firebase from 'firebase'
import {mapActions} from 'vuex'
export default {
    name:'Login',
    data() {
        return {
            firebase,
            email:"",
            password:"",
            erreur:"",
            
        }
    },
    computed:{
        $store() {
      return store
    }
    },
    methods: {
        Google(){
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then((result) =>{
               this.$store.state.userInfo=result.user;
               console.log(this.$store.state.userInfo);
              this.$router.push("/home");
            }).catch((err)=>{
                console.log(err);
            })
            
            
        },
 
    signIn(e){
      e.preventDefault();  
      firebase.auth() // get the auth api
      .signInWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        this.$router.push('/home') // redirect to the feed
      })
      .catch(error => {
        // console.log(error.code)
        // this.erreur=error.message;

        switch (error.code) {
          case 'auth/invalid-email!':
              this.erreur= 'email invalid!'
              break
          case 'auth/user-not-found':
              this.erreur= 'ce compte est introuvable!'
              break
          case 'auth/wrong-password':
              this.erreur= 'Mot de passe incorrect!'
              break
          default:
              this.erreur=  "L'mail ou  le password est incorrect!"
              break
        }
      });
        }
    //  signIn  () { // we also renamed this method
   
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
    //   .then((data) => {
    //     console.log('Successfully logged in!');
    //     router.push('/home') // redirect to homepage
    //   })
    //   .catch(error => {
    //     switch (this.erreur=error.code) {
    //       case 'auth/invalid-email':
    //           errMsg.value = 'Invalid email'
    //           break
    //       case 'auth/user-not-found':
    //           errMsg.value = 'No account with that email was found'
    //           break
    //       case 'auth/wrong-password':
    //           errMsg.value = 'Incorrect password'
    //           break
    //       default:
    //           errMsg.value = 'Email or password was incorrect'
    //           break
    //     }
    //   });
    // }
    },
}
</script>