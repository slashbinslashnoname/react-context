const server = require('http').createServer()
const io = require('socket.io')(server)

io.on('connection', (client) => {
  console.log('client=', client.id)

  client.on('event', (data) => {
    console.log(data)
    /* … */
  })
  client.on('disconnect', (client) => {
    /* … */
    console.log('client disconnected =', client)
  })
})
server.listen(3630)
