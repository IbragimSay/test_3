import { Router } from 'express';

const router = Router()

router.post('/login', (req, res)=>{
    res.send('auth router')
})

export default router