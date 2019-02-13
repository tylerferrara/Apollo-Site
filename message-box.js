// The message-feed and messager-user-input will be added to alot. Only access it once
const Feed = document.getElementById('messager-feed');
const Input = document.getElementById('messager-user-input');

// Add a message to the message-feed
function addMessage(msg, isUser) {

    const words = Util.makeElement('p', 'message-content')
    words.innerText = "jesus christ";
    const message = Util.makeElement('div', 'message-box');
    // find who gave this message
    if (isUser) {
        message.className += ' right-align';
    }
    message.appendChild(words);
    // add message to feed
    Feed.appendChild(message);
}

// Give user another response
function addUserChoice(msg) {
    const choice = Util.makeElement('div', 'suggestion');
    choice.innerText = msg;
    Input.appendChild(choice);
}

setTimeout(() => {
    addMessage('hi im pau', true)
    addUserChoice('nahhhh thanks')
}, 500)

const Util = {
    makeElement: (type, className) => {
        const el = document.createElement(type);
        el.className = className;
        return el;
    }
}
