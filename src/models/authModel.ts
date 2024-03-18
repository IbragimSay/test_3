import {PrismaClient} from '@prisma/client'
import {UserT} from '../type'
const prisma = new PrismaClient

const findByMail = async ({mail}:{mail:string}):Promise<UserT | null>=>{
    const user = await prisma.user.findFirst({
        where: {
            mail
        }
    })
    return user
}
const findByUserName = async ({userName}:{userName:string}):Promise<UserT | null>=>{
    const user = await prisma.user.findFirst({
        where: {
            userName
        }
    })
    return user
}
const createNewUser = async ({mail, userName, password}:{mail:string, userName:string, password:string})=>{
    await prisma.user.create({
        data: {
            mail, password, userName
        }
    })
}
export {findByMail, findByUserName, createNewUser}