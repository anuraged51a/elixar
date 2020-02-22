var firebaseConfig = {
    apiKey: "AIzaSyA5FkiENboylPC74dBiQnZlgWt1mlDgqfU",
    authDomain: "elixar-f9ed1.firebaseapp.com",
    databaseURL: "https://elixar-f9ed1.firebaseio.com",
    projectId: "elixar-f9ed1",
    storageBucket: "elixar-f9ed1.appspot.com",
    messagingSenderId: "303510902156",
    appId: "1:303510902156:web:3ef5610fe83d56089032a9",
    measurementId: "G-Z3CP4PP0G8"
  };
  firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');

  saveMessage(firstname, lastname, email, phone);

}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(firstname, lastname, email, phone){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname:lastname,
    email:email,
    phone:phone,
  });
}