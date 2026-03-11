import { Request,Response } from "express"
import { AuthService } from "../services/auth.service"

export const register = async(req: Request, res: Response)=>{
    try{
        const {email,password} = req.body
        const user = await AuthService.register(email,password)
        res.json(user)
    } catch(e:any){
        res.status(400).json({message:e.message})
    }
}

export const login = async(req: Request, res: Response)=>{
    try{
        const {email,password} = req.body
        const token = await AuthService.login(email,password)
        res.json({token})
    } catch(e:any){
        res.status(400).json({message:e.message})
    }
}

export const getProfile = async(req: any, res: Response)=>{
    const user = await AuthService.getProfile(req.user.id)
    res.json(user)
}

export const updateProfile = async(req: any, res: Response)=>{
    const user = await AuthService.updateProfile(req.user.id,req.body)
    res.json(user)
}