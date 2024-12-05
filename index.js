import express from 'express'
import dotenv from 'dotenv'
import PostRoute from './Routes/Posts/Posts.js'
import { ProductRoutes } from './Routes/Products/Product.js'
import { QuotesRoute } from './Routes/Quotes/Quotes.js'
import { RecipesRoute } from './Routes/Recipes/Recipes.js'
import { UserRoutes } from './Routes/User/User.js'
import { CommentRoutes } from './Routes/Comments/Comments.js'



const app = express()
dotenv.config()
const Port = process.env.Port || 8000


app.get('/',(req,res)=>{
    res.status(200).send('welcome')
})


app.use('/posts',PostRoute)
app.use('/products' , ProductRoutes)
app.use('/recipes' , RecipesRoute)
app.use('/quotes',QuotesRoute)
app.use('/users',UserRoutes)
app.use('/comments',CommentRoutes)


app.get ("*",(req,res)=>{
    res.status(404).send("<h1>Route not Found</h1>")
})




app.listen(Port,()=>{
    console.log(`server is running ${Port}`)
})