const { Server } = require("socket.io");

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  // ...
});
setInterval(()=>{
  io.emit('data','xxxxxx')

},1000)

io.listen(3000);
