"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
});
exports.UserModel = mongoose_1.model('User', schema);
