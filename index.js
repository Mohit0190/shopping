// const fs = require('fs');

// const data = JSON.parse( fs.readFileSync('data.json', 'utf-8'));

// const express = require('express');
// const morgan = require('morgan');

// const server = express();


// server.get('/',(req,res)=>{

//   res.status(201).send('<h1>mohit</h1>')
//   // res.json(data)
//   // res.sendStatus(404)
// })

//body parser
// server.use(express.json())

// server.use(morgan('default'))
// server.use(express.static('public'))

// middleware.
// server.use((req,res,next)=>{
//   console.log(req.method,req.ip,req.hostname,req.get('User-Agent'))
//   next()
// })


// const auth = (req,res,next)=>{

// console.log(req.body)
// if(req.body.password ==='123'){

//   next()
// }
// else{
//   res.sendStatus(401)
// }
//   next()
// }


// // Api Endpoint Route
// server.get('/pro/:id',auth,(req,res)=>{
//   console.log(req.params)
//   res.send({type:'GET'})

// })
// server.post('/',auth,(req,res)=>{
//   res.send({type:'post'})
// })
// server.put('/',(req,res)=>{
//   res.send({type:'Put'})
// })
// server.delete('/',(req,res)=>{
//   res.send({type:'delete'})
// })
// server.patch('/',(req,res)=>{
//   res.send({type:'patch'})
// })

// server.listen(8080 ,()=>console.log('server started'))


// Assignment 
// const express = require('express')
// const morgan = require('morgan')
// require('dotenv').config()

// const server = express()

// server.use(express.json())
// server.use(morgan('default'))
// server.get('/', (req, res)=>{
//   console.log(req.body)
//  res.send(req.body)
// })
// server.listen(process.env.Port)


require('dotenv').config()

// Rest API
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');

const server1 = express();
console.log(process.env.DB_PASSWORD)
const ProductRouter = require('./routes/product')
const userRouter = require('./routes/user');
const path = require('path');

//Mongoose connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connection established')
}





// body parser
server1.use(cors())
server1.use(express.json())
server1.use(morgan('default'))
server1.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))
server1.use('/products', ProductRouter.router)
server1.use('/users', userRouter.router)
server1.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname ,'dist', 'index.html'))
})
//Mvc Controller
server1.listen(process.env.PORT)

