import { User } from "../models/user.model"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/jwt"

export class AuthService {

    static async register(email: string, password: string){

        const exist = await User.findOne({where:{email}})

        if(exist) throw new Error("User exists")

        const hash = await bcrypt.hash(password,10)

        const user = await User.create({
            email,
            password:hash
        })

        return user
    }

    static async login(email: string, password: string){

        const user = await User.findOne({where:{email}})
        if(!user) throw new Error("User not found")
        const valid = await bcrypt.compare(password,user.password)
        if(!valid) throw new Error("Wrong password")
        return generateToken(user.id)
    }

    static async getProfile(id: number){
        return User.findByPk(id,{
            attributes:["id","email","name","birthDate","bio","createdAt"]
        })
    }

    static async updateProfile(id: number, data: any){
        const user = await User.findByPk(id)
        if(!user) throw new Error("User not found")
        await user.update(data)
        return user
    }
}