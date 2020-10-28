import {Router} from 'express'
const router = Router();

router.get('/videos',(req,res)=>{
    res.json('gell all videos')
})

export default router;
