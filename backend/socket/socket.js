import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: true,
        credentials: true,
    },
    allowEIO3: true,
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};
const userSocketMap ={}

io.on('connection', (socket) => {
    //console.log("A user has been connected", socket.id);

    const userId =socket.handshake.query.userId;
   // console.log("userId from socket",userId)
    if (userId !='undefiend') {
        userSocketMap[userId]=socket.id;

    }
   // console.log(userSocketMap)
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
    
    socket.on('disconnect', () => {
     //   console.log("A user has been disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    });
});

export { app, io, server };
