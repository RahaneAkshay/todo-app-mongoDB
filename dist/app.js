"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require('./database/connection');
var app = express_1.default();
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server start at port " + PORT);
});
