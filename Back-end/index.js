const express = require("express");
const cors = require("cors");
const mongoose  = require("mongoose");
const FormModel = require("./formmodel");




const app = express()

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));


app.use(cors({
    origin:"*"
}));

mongoose.connect('mongodb://localhost:27017/form_proj',
    {
        useNewUrlParser: true,
    },(err)=>{
        if(err){
            console.log('error in db connection')
        }else{
            console.log('database connected successfully')
        }
    }
)

app.use('/', (req, res, next) => {
        next()
})

app.post('/api/form_submit', async(req,res)=>{
    return await FormModel.create(req.body,(err,data)=>{
        console.log('err',err)
        err && res.status(403).send({status:false,err:err});
        data && res.status(200).send({status:true,message:'Form Submit Was Successfully'});
     });
})




app.use('', (req, res) => {
    return res.status(200).send("Application working as you think")
})


app.listen(8080, () => {
    console.log("server is running",8080)
})
