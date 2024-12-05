import express from 'express'
import { RecipesData} from './RecipesData.js'


export const RecipesRoute = express.Router()


RecipesRoute.get('/',(req,res)=>{
    res.status(200).send({status:"success",message:"got data successfully" , data:RecipesData})
})