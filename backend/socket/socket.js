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

io.on('connection', (socket) => {
    console.log("A user has been connected", socket.id);

    socket.on('disconnect', () => {
        console.log("A user has been disconnected", socket.id);
    });
});

export { app, io, server };
