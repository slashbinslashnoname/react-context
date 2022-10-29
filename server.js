const httpServer = require('http').createServer()
const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log('emit')
  socket.emit('pushState', new Date())

  socket.on('ping', (msg) => {
    socket.emit('pong', msg)
  })

  socket.on('disconnect', () => {
    console.log('disconnect')
  })
})

httpServer.listen(3333)
