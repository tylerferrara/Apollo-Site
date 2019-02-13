
const messageBox = document.getElementById('message-box');

console.log(messageBox)

function addMessage(msg) {
    let message = document.createElement('div');
    let container = document.createElement('div');
    message.innerHTML += msg;
    message.className = 'message';
    container.className = 'message-container';
    container.appendChild(message);
    messageBox.appendChild(container);
    console.log('it was called');
}

addMessage('super-duper')
