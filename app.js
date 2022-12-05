const express = require('express')
const app = express();
const User = require('./Models/user');
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/showuser',(req,res)=>{
    User.find({},(err,users)=>{
        if(err){
            console.log(err);
        }else{

            res.send(users);
        }
    })
})


//create New User
// http://localhost:3000/create

app.post('/create',async(req,res)=>{
    //create product
    const user = await User.create(req.body);

    res.status(200).json({
        success:true,
        user,
    })
})


module.exports = app