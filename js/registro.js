import {rendSerie, arraySeries} from "./series.js"
import {peli1, DomPeliculas} from "./domPeliculas.js"

const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
  }
};

// Registro
const signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", (e) => { //captura el evento submit
  e.preventDefault(); // desde ese evento cancelo el reinicio del formulario
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;
  // Autenttificacion usuario
  auth
    .createUserWithEmailAndPassword(email, password) //crea un usuario basado en mail y contraseña
    .then((userCredential) => { //una vez me devuelva la respuesta la capturo y va a ser la credencial del usuario
      // limpiar form
      signUpForm.reset();
      // cerrar modal
      $("#signupModal").modal("hide"); //bootstrap usa jquery
    });
});

// salida
const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => { //si el cierre de la sesion fue correcto quiero que hagas luego
    console.log("signup out");
    document.location.reload()
  });
});

// ingreso
const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  // autentificacion usuario para imprimir cards
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => { //
    // clear the form
    signInForm.reset();
    // cerrar el modal
    $("#signinModal").modal("hide");
  });
});


// events
//lista para cambios de estado de autenticación
auth.onAuthStateChanged((user) => { //desde auth voy a usar un metodo onauth que se dispara 
  if (user) { // cada vez que cambia la autenticacion y obtiene el objeto user, si user existe
    console.log("signin");
    fs.collection("peliculas") //consulta la coleccion Peliculas en firebase
      .get()                    //metodo get para traer esos datos
      .then((snapshot) => {      // entonces muestra el estado actual de esos datos(snapshot hace eso)
        peli1.renderizarPeliculas(snapshot.docs);//snapshot.docs encontramos los datos de la base de datos dentro de la coleccion
       // rendSerie.renderizarSeries();
        peli1.renderizarPelis2();
        
      loginCheck(user);
      });
      
  } else {
    console.log("signout");

        peli1.renderizarVacio();
       // rendSerie.renderizarVacio();
        peli1.renderizarVacioPeli();
   /* //setupPelis([]);
   // setupSeries([]);
   rendSerie.renderizarSeries([]);

     loginCheck(user);*/
  } 
});



// events
// list for auth state changes

 
/*
// Login with Google
const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", (e) => {
  e.preventDefault();
 /* signInForm.reset();
  $("#signinModal").modal("hide");

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log("google sign in");
  })
    .catch(err => {
      console.log(err);
    })
});

*/