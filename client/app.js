const socket = io();

// Elements
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');

// Send a message
sendBtn.addEventListener('click', () => {
    const msg = messageInput.value;
    if (msg) {
        socket.emit('message', msg);
        messageInput.value = '';
    }
});

// Typing indicator
messageInput.addEventListener('input', () => {
    socket.emit('typing');
});

// Listen for messages from the server
socket.on('message', (data) => {
    const message = document.createElement('div');
    message.textContent = `${data.user}: ${data.msg}`;
    messagesDiv.appendChild(message);
    typingIndicator.textContent = '';
});

// Listen for typing notifications
socket.on('typing', (data) => {
    typingIndicator.textContent = data;
});

