import express from "express"
import { ProductData } from "./ProductData.js"


export const ProductRoutes = express.Router()


ProductRoutes.get('/',(req,res)=>{
    res.status(200).send({status:"Success",message:"got data successfully" , data : ProductData})
})