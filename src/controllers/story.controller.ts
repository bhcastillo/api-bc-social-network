import { Request, Response } from 'express';
import Story from '../models/Story';
import path from 'path';
import fs from 'fs-extra';

export async function getStories(req: Request, res: Response): Promise<Response> {
  const stories = await Story.find();
  return res.json(stories);
}
export async function getStory(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const story = await Story.findById(id);
  return res.json(story);
}
export async function postStory(req: Request, res: Response): Promise<Response> {
  const { idAuth0, username,title, description } = req.body;
  const newStory = {
    idAuth0,
    username,
    title,
    description,
    imagePath: req.file.path,
  };
  const story = new Story(newStory);
  await story.save();
  return res.json({
    message: 'Story successfully saved',
    story,
  });
}
export async function postStoryImageEmpty(req: Request, res: Response): Promise<Response> {
  const { idAuth0, username,title, description } = req.body;
  const newStory = {
    idAuth0,
    username,
    title,
    description,
  };
  const story = new Story(newStory);

  await story.save();
  return res.json(
    {
    message: 'Photo successfully saved',
    story,
  });
}
export async function putStory(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const { title, description } = req.body;
  const updateStory = await Story.findByIdAndUpdate(
    id,
    {
      title,
      description,
    },
    { new: true }
  );
  return res.json({
    message: 'Successfully Update',
    updateStory,
  });
}
export async function deleteStory(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const story = await Story.findByIdAndDelete(id);
  if (story) {
    if (story.imagePath){
      await fs.unlink(path.resolve(story.imagePath));
    }
    return res.json({
      message: 'Story Deleted',
      story,
    });
  } else {
    return res.json({
      message: 'Not Found Story',
    });
  }
}
