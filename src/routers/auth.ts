import { Router } from 'express';
import { lgoupController } from '../controllers/authController';

const router = Router()

router.post('/logup', lgoupController)
router.post('/login', (req, res)=>{
    res.send('auth router')
})

export = router