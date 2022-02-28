import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/cricketNew.js"

const app=express();


app.use(bodyParser.json({limit:"30mb" ,extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended:true}));
app.use(cors());


app.use('/api',router);

app.get('/',(req,res)=>{
    res.send("Cricket API");
})


const port=process.env.PORT||9000
app.listen(port,console.log(`server start ${port}`));