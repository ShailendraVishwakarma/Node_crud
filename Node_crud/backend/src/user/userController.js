var userService=require('./userService'); 


var getDataControllerfn=async(req,res)=>{
    var employee=await userService.getDataFromDBService();
    res.send({"status":true,"data":employee});
}


var createUserControllerFn=async(req,res)=>{

    var status=await userService.createUserDBService(req.body);
    
    if(status){
        res.send({"status":true,"message":"User Created Successfully"});
    }else{
        res.send({"status":false,"message":"Error Creating user"});
    }
}

var updateUserController=async(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    var result=await userService.updateUserDBService(req.params.id,req.body);
    if(result){
        res.send({"status":true,"message":"User Updated Successfully"});
    }else{
        res.send({"status":false,"message":"Updated failed"});
    }
}

var deleteUserController=async(req,res)=>{
    console.log(req.params.id);
    // console.log(req.body);
    var result=await userService.removeUserDBService(req.params.id);
    if(result){
        res.send({"status":true,"message":"User Deleted Successfully"});
    }else{
        res.send({"status":false,"message":"Deleted failed"});
    }
}

module.exports={getDataControllerfn,createUserControllerFn,updateUserController,deleteUserController};