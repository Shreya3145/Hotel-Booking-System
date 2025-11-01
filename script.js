import { app } from "./firebase-config.js";
import { getDatabase, ref, push, set } from "firebase/database";
//To reference a collections - like Tables
const db = getDatabase(app);
const messagesRef = ref(db, "messages");

//TODO: Validation implementation
document.getElementById('contactform').addEventListener('submit', 
submitForm);

//Form submission
function submitForm(e){
    e.preventDefault();

    //Get values
    var name = getInputValue('name');
    var email = getInputValue('email');
    var persons = getInputValue('persons');
    var roomtype = getInputValue('roomtype');
    var phone =  getInputValue('phone');
    var payment =  getInputValue('payment');
    var checkin =  getInputValue('checkin');
    var checkout =  getInputValue('checkout');
    var message =  getInputValue('message');

    //Save message
    saveMessage(name, email, persons, roomtype, phone, payment, checkin, checkout, message);

    //Alert message sent
    //show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert after 3 seconds
    setTimeout(function(){
       document.querySelector('.alert').style.display = 'none';
    },3000);

    document.getElementById('contactform').reset();

    

}

//To get form values
function getInputValue(id){
    return document.getElementById(id).value;

}

//To save messages
function saveMessage(name, email, persons, roomtype, phone, payment, checkin, checkout, message){
    var newMessageRef = push(messagesRef);
    const newMsgRef = push(messagesRef);
    set(newMsgRef, {
        name, email, persons, roomtype, phone, payment, checkin, checkout, message
    });
}


