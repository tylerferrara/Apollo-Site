// The message-feed and messager-user-input will be added to alot. Only access it once
const Feed = document.getElementById('messager-feed');
const Input = document.getElementById('messager-user-input');

// Add a message to the message-feed
function addMessage(msg, isUser) {

    const words = Util.makeElement('p', 'message-content')
    words.innerText = msg;
    const message = Util.makeElement('div', 'message-box');
    // find who gave this message
    if (isUser) {
        message.className += ' right-align';
    }
    message.appendChild(words);
    // add message to feed
    Feed.appendChild(message);
    // Feed.scrollIntoView(true)
    message.scrollIntoView({
        behavior: 'smooth' 
    });
    // Feed.scrollTop = Feed.scrollHeight;
}

// Give user another response
function addUserChoice(msg) {
    const choice = Util.makeElement('div', 'suggestion');
    choice.innerText = msg;
    choice.onclick = function() {choiceSelectHandler(choice)};
    Input.appendChild(choice);
}


const Util = {
    makeElement: (type, className) => {
        const el = document.createElement(type);
        el.className = className;
        return el;
    }
}

// Handle user choice selection
function choiceSelectHandler(el) {
    console.log(el.innerText)
}

setTimeout(() => {
    addMessage('hi im paul', true)
    addUserChoice('nahhhh thanks')
}, 2000)
