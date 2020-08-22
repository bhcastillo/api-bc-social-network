"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../libs/multer"));
const story_controller_1 = require("../controllers/story.controller");
const router = express_1.Router();
router.route('/stories').get(story_controller_1.getStories);
router.route('/story').post(multer_1.default.single('image'), story_controller_1.postStory);
router.route('/story-image-empty').post(story_controller_1.postStoryImageEmpty);
router.route('/story/:id').get(story_controller_1.getStory).put(story_controller_1.putStory).delete(story_controller_1.deleteStory);
exports.default = router;
