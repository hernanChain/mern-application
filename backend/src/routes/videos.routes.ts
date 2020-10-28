import {Router} from 'express'
import {getVideos} from './videos.controller'
import * as videoController from './videos.controller'
const router = Router();

router.post('/createVideo', videoController.createVideo)
router.get('/getVideo/:id', videoController.getVideo)
router.get('/getVideos', videoController.getVideos)
router.patch('/updateVideo/:id', videoController.updateVideo)
router.delete('/deleteVideo/:id', videoController.deleteVideo)


export default router;
