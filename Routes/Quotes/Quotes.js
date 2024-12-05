import express from 'express'
import { Quotesdata } from './QuotesData.js'
export const QuotesRoute = express.Router()

QuotesRoute.get("/" ,(req,res)=>{
    res.status(200).send({status:"Success",message:"got data successfully" ,data : Quotesdata})
})