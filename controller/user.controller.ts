import { Request,Response } from 'express';//Nhúng kiểu Request và Response từ module express
import NguoiDung from '../model/NguoiDung.model';

export const login= async (req:Request,res:Response)=>{
    const users=await NguoiDung.findAll({
        raw: true
    });
    res.json(users);
}