"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStory = exports.putStory = exports.postStoryImageEmpty = exports.postStory = exports.getStory = exports.getStories = void 0;
const Story_1 = __importDefault(require("../models/Story"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function getStories(req, res) {
    const stories = await Story_1.default.find();
    return res.json(stories);
}
exports.getStories = getStories;
async function getStory(req, res) {
    const { id } = req.params;
    const story = await Story_1.default.findById(id);
    return res.json(story);
}
exports.getStory = getStory;
async function postStory(req, res) {
    const { idAuth0, username, title, description } = req.body;
    const newStory = {
        idAuth0,
        username,
        title,
        description,
        imagePath: req.file.path,
    };
    const story = new Story_1.default(newStory);
    await story.save();
    return res.json({
        message: 'Story successfully saved',
        story,
    });
}
exports.postStory = postStory;
async function postStoryImageEmpty(req, res) {
    const { idAuth0, username, title, description } = req.body;
    const newStory = {
        idAuth0,
        username,
        title,
        description,
    };
    const story = new Story_1.default(newStory);
    await story.save();
    return res.json({
        message: 'Photo successfully saved',
        story,
    });
}
exports.postStoryImageEmpty = postStoryImageEmpty;
async function putStory(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateStory = await Story_1.default.findByIdAndUpdate(id, {
        title,
        description,
    }, { new: true });
    return res.json({
        message: 'Successfully Update',
        updateStory,
    });
}
exports.putStory = putStory;
async function deleteStory(req, res) {
    const { id } = req.params;
    const story = await Story_1.default.findByIdAndDelete(id);
    if (story) {
        if (story.imagePath) {
            await fs_extra_1.default.unlink(path_1.default.resolve(story.imagePath));
        }
        return res.json({
            message: 'Story Deleted',
            story,
        });
    }
    else {
        return res.json({
            message: 'Not Found Story',
        });
    }
}
exports.deleteStory = deleteStory;
