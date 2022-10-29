import React from 'react'
import socketio from 'socket.io-client'

const SOCKET_URL = ':3333'

export const socket = socketio.connect(SOCKET_URL)
export const SocketContext = React.createContext()
