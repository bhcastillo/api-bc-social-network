import { Router } from 'express';
import multer from '../libs/multer';
import {
  getStories,
  postStory,
  getStory,
  deleteStory,
  putStory,
  postStoryImageEmpty,

} from '../controllers/story.controller';
const router = Router();

router.route('/stories').get(getStories);
router.route('/story').post(multer.single('image'), postStory);
router.route('/story-image-empty').post(postStoryImageEmpty);
router.route('/story/:id').get(getStory).put(putStory).delete(deleteStory);
export default router;
