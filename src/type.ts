type UserT = {
    id: number
    mail: string
    password: string
    userName: string
    posts?: PostT
}
type PostT = {
    id: number
    title: string
    content?: string
    userId: number
}


export  {UserT, PostT}