"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
var mongoose_1 = require("mongoose");
var taskSchema = new mongoose_1.Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
});
exports.TaskModel = mongoose_1.model("todo", taskSchema);
