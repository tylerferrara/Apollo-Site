
const messageBox = document.getElementById('message-box');

console.log(messageBox)

function addMessage(msg, position) {
    let message = document.createElement('div');
    let container = document.createElement('div');
    if (position === 'left') {
        message.classList.add('message-left')
    } else {
        message.classList.add('message-right')
    }
    message.innerHTML += msg;
    message.classList.add('message');
    container.className = 'message-container';
    container.appendChild(message);
    messageBox.appendChild(container);
    console.log('it was called');
}

addMessage('super-duper', 'left')
addMessage('megladon', 'right')
addMessage('super-duper', 'left')
addMessage('megladon', 'right')
addMessage('super-duper', 'left')
addMessage('megladon', 'right')
addMessage('super-duper', 'left')
addMessage('megladon', 'right')
addMessage('super-duper', 'left')
addMessage('megladon', 'right')
addMessage('super-duper', 'left')
addMessage('megladon', 'right')
addMessage('super-duper', 'left')
addMessage('megladon', 'right')
