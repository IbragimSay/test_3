import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import { logupController } from '../controllers/authController';

const router = Router()
const prisma = new PrismaClient

const getar = async ()=>{
    const user = await prisma.user.findMany()
    console.log(user)
}
getar()
router.post('/logup', logupController)
router.post('/login', (req, res)=>{
    res.send('auth router')
})

export = router