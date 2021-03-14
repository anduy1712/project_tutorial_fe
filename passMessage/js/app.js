function passMessage(){
    const message = document.querySelector('.message');
    const  messagesv = document.querySelector('.messagesave');

    
    
    messagesv.textContent = message.value;
    message.value = '';
}



