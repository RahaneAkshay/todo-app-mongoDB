"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var url = "mongodb://akshay:s6TezIaVeXgiRJuN@cluster0-shard-00-00.9lb3l.mongodb.net:27017,cluster0-shard-00-01.9lb3l.mongodb.net:27017,cluster0-shard-00-02.9lb3l.mongodb.net:27017/todo-app?ssl=true&replicaSet=atlas-ix4euu-shard-0&authSource=admin&retryWrites=true&w=majority";
var options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default
    .connect(url, options)
    .then(function () {
    console.log("Connection Succesfull !!!");
})
    .catch(function (err) {
    console.error(err);
});
module.exports = { mongoose: mongoose_1.default };
