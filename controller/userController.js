const {userModel} = require("../database/psql.js")
module.exports.studentDetails=async(req,res)=>{
    try{
        const users=await userModel.findAll();
        if(users.length==0){
            return res.status(200).json({"error":"No data to fetch"});
        }
        return res.status(200).json(users);
    }
    catch(error){
        console.log(error);
        return res.status(404).json({"error":"Error occured"});
    } 
}
module.exports.newStudent=async(req,res)=>{
    const{rollId,firstName,middleName,lastName,totalMarks}=req.body;
    try{
        const stud=await userModel.findOne({where:{rollId:rollId}});
        if(stud==null){
            await userModel.create(req.body);
            return res.status(200).json({message:"Added successfully"});
        }
        return res.status(200).json({message:"Already available"});   
    }
    catch(error){
        console.log(error);
        return res.status(404).json({"error":"Error occured"});
    }
}
module.exports.updateStud=async(req,res)=>{
    let roll=req.params.rollId;
    const{rollId,firstName,middleName,lastName,totalMarks}=req.body;
    try{
        const modify=await userModel.update(req.body,{where:{rollId}});
        return res.status(200).json({message:"updated successfully"});   
    }
    catch(error){
        console.log(error);
        return res.status(404).json({"error":"Error occured"});
    }
}
module.exports.deleteStud=async(req,res)=>{
    let rollId=req.params.rollId;
    const toDelete=await userModel.findOne({where:{rollId:rollId}});
    try{
        if(toDelete==null){
            return res.status(200).json({message:"No data to delete"});  
        }
        await toDelete.destroy();
        return res.status(200).json({message:"deleted successfully"});   
    }
    catch(error){
        console.log(error);
        return res.status(404).json({"error":"Error occured"});
    }
}