"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const STORY = new mongoose_1.Schema({
    idAuth0: String,
    username: String,
    title: String,
    description: String,
    imagePath: String
});
exports.default = mongoose_1.model('Photo', STORY);
