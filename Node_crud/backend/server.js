var express=require('express');
var server=express();
var routes=require('./routes/routes');
var mongoose=require('mongoose')
const cors=require('cors');

mongoose.connect("mongodb://127.0.0.1:27017/crud",{useNewUrlParser:true,useUnifiedTopology:true},
).then(() => console.log('Connected DB'))

 .catch((err) => { console.error(err); });

 server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("error")
    }
    else{
        console.log("started")
    }
});
