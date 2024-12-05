import express from 'express'
// import { PostsData } from "../Posts/PostsData.js"

import {PostsData} from './PostsData.js'


const PostRoute = express.Router()


PostRoute.get('/' ,(req,res)=>{
    res.status(200).send({status:"success", message:"got data successfully" , data: PostsData})
})

export default PostRoute