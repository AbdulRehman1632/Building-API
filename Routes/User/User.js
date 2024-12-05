import express from 'express'
import { UserData } from './UserData.js'

export const UserRoutes= express.Router()

UserRoutes.get('/',(req,res)=>{
    res.status(200).send({status:"Success" ,message:"got data successfully" ,data :UserData})
})