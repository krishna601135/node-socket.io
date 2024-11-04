module.exports = (io, socket) => {
  
   console.log('A User Connected:', socket.id);
  
  // Listen for a message event from the client
  socket.on('message', (msg) => {
     console.log('message is recieved..', msg);
   
   // Broadcast message to all connected clients
   io.emit('message', {user: socket.id, msg});
  })
  
   // Handle a typing indicator
   socket.on('typing', () => {
        socket.broadcast.emit('typing', `${socket.id} is typing...`);
    });

  // When the client disconnects
  socket.on('disconnect', () => {
     console.log('User Disconnected..', socket.id);
  })
  
}
