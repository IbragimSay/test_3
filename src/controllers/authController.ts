import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import { findByMail, findByUserName, createNewUser} from '../models/authModel'


const lgoupController = async (req: Request, res:Response)=>{
    try{
        const {mail, password, userName}:{mail: string, password: string, userName: string} = req.body
        if(!/\S+@\S+\.\S+/.test(mail) || password.length < 4 || userName.length < 4){
            return res.json({
                msg: "Невалидные даные "
            })
        }
        const userMail = await findByMail({mail})
        
        if(userMail){
            return res.json({
                msg: "пользователь с таким mail уже существует"
            })
        }
        const user = await findByUserName({userName})
        if(user){
            return res.json({
                msg: "пользователь с таким userName уже существует"
            })
        }
        const hashPassword = bcrypt.hashSync(password, 5)
        await createNewUser({mail, userName, password : hashPassword})
        return res.json({
            msg: "login === ok"
        })
    }catch(e){
        console.log(e)
        return res.json({
            msg: "Error"
        })
    }
}   

export  {lgoupController}