import express from 'express'
import { CommentsData } from './CommentsData.js'

export const CommentRoutes= express.Router()

CommentRoutes.get('/',(req,res)=>{
    res.status(200).send({status:"Success" ,message:"got data successfully" ,data :CommentsData})
})