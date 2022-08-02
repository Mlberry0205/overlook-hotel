// ############# Imports #############

import './css/styles.css';
import {fetchData} from './apiCalls';
import Bookings from './classes/Bookings';
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
const loginButton.addEventListener('click', displayHomeView);
