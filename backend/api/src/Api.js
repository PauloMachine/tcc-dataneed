const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const socketio = require("socket.io");
const http = require("http");

const routes = require("./routes");
const conexao = require("./database/Mongo");

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use((req, res, next) => { req.io = io; return next(); });
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect(conexao.uri, { useNewUrlParser: true, useUnifiedTopology: true });

server.listen(3333, function() { console.log("API RUNNING!") });


