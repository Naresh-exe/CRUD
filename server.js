const express=require('express')
const app=express();
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
var cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

mongoose.connect('mongodb://127.0.0.1:27017/userDB',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("strictQuery", true); 

const db=mongoose.connection
db.once('open',(err,conect)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("Connected")
    }
})
const userSchema=new mongoose.Schema({
    name:String,
    profession:String,
    age:Number,
    phoneNumber:Number,
    gender:String
})

const userModel=mongoose.model('user',userSchema)

app.post('/addUsers',(req,res)=>{
    const userDoc=new userModel({

        name:req.body.name,
        profession:req.body.profession,
        age:req.body.age,
        phoneNumber:req.body.phoneNumber,
        gender:req.body.gender
        
    })
    
    userDoc.save().then(data=>{
        console.log('................', data)
        res.send(data);
        res.end();
    })
    
    
    
})
app.get('/list',(req,res)=>{
    userModel.find({},(err,data)=>{
        res.send(data)
    })
    
        
    
    })

app.put('/updateUser',(req,res)=>{
    console.log(req.body)
    const updateDoc={
        name:req.body.name,
        profession:req.body.profession,
        age:req.body.age,
        phoneNumber:req.body.phoneNumber,
        gender:req.body.gender
        

    }
   userModel.findByIdAndUpdate(req.body.id,{$set:updateDoc}, {new:true}).then(data=>{
    res.send(data)
    
    res.end()
   })

   
   
        
    
})
app.delete('/deleteUser/:_id',(req,res)=>{
    var _id=req.params._id
     userModel.findByIdAndDelete(_id,(err,data)=>{
        res.send(data)
        res.end()
     })
})
app.listen(3001)