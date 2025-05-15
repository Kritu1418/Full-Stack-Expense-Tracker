const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const colors=require('colors');
const connectDb=require("./config/connectDb");
// config dot env file
dotenv.config();

// database call
connectDb();



const app=express();


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


// routes
app.get('/',(req,res)=>{
    res.send("<h1>hello from server</h1>")
});

// port
const PORT=5173||process.env.PORT;

// listen
app.listen(PORT,()=>{
    console.log(`server running on port${PORT}`);
})

