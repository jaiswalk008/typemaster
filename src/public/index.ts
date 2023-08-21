const userForm = document.querySelector('.user-form') as HTMLFormElement;
userForm.addEventListener('submit',addUser);
const changeUsername :HTMLButtonElement= document.querySelector('.change-username') ;
const messageContainer:HTMLElement = document.querySelector('.message-container');
function addUser(e:Event){
    e.preventDefault();
    const target  = e.target as HTMLFormElement;
    const username:string = target.username.value;
    localStorage.setItem('username',username);
    showMessage(username);
    
}
function showMessage(username:string){
    userForm.style.display= 'none';
    messageContainer.style.display='block';
    
    changeUsername.style.display='block';
    document.getElementById('message').innerText=`Hi ${username}, please click on start to begin the game`;
    
}

window.addEventListener('DOMContentLoaded',() =>{
    const username = localStorage.getItem('username');
    if(username) showMessage(username);
    else userForm.style.display= 'block';
})
function changeUser(){
    userForm.style.display= 'block';
    messageContainer.style.display='none';
}