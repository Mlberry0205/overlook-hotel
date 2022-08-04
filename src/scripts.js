// ############# Imports #############

import './css/styles.css';
//import {fetchData} from './apiCalls';
import Booking from './classes/Booking';
import Client from './classes/Client';
import Room from './classes/Room';
import Manager from './classes/Manager';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// console.log('This is the JavaScript entry file - your code begins here.');



// ############# Query Selectors #############

const clientUserNameInput = document.querySelector('.client-name-input');
const clientPasswordInput = document.querySelector('.client-password-input');
const loginButton = document.querySelector('.login-button');

// ############# Global Variables #############
// ############# Promises #############



// ############# Event Listeners #############

window.addEventListener('load', getPromiseData);
loginButton.addEventListener('click', displayLoginView);


// ############# Event Listeners #############

function hide(elements) {
    elements.forEach((element) => {
        element.classList.add('hidden');
    })
}

function show(elements) {
    elements.forEach((element) => {
        element.classList.remove('hidden');
    })
}


function displayLoginView() {
  hide([displayHomeView,

])

  show([loginButton,
        clientUserNameInput,
        clientPasswordInput,
])
}


function displayHomeView() {
hide([loginButton,
    clientUserNameInput,
    clientPasswordInput,

])
    
show([
])
}

