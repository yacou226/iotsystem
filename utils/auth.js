import firebase from "firebase"

  const authListener = firebase.auth().onAuthStateChanged(function(user) {
    if (!user) { // not logged in
        alert('you must be logged in to view this. redirecting to the home page')
        router.push('/');
    }
})
