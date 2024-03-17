import { Router } from 'express';

const router = Router()

router.post('/logup', (req, res)=>{
    res.send('auth router')
})
router.post('/login', (req, res)=>{
    res.send('auth router')
})

export default router