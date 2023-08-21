"use strict";
const userForm = document.querySelector('.user-form');
userForm.addEventListener('submit', addUser);
const changeUsername = document.querySelector('.change-username');
const messageContainer = document.querySelector('.message-container');
function addUser(e) {
    e.preventDefault();
    const target = e.target;
    const username = target.username.value;
    localStorage.setItem('username', username);
    showMessage(username);
}
function showMessage(username) {
    userForm.style.display = 'none';
    messageContainer.style.display = 'block';
    changeUsername.style.display = 'block';
    document.getElementById('message').innerText = `Hi ${username}, please click on start to begin the game`;
}
window.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    if (username)
        showMessage(username);
    else
        userForm.style.display = 'block';
});
function changeUser() {
    userForm.style.display = 'block';
    messageContainer.style.display = 'none';
}
