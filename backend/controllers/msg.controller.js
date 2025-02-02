

export const sendMsg=(req,res)=>{
    try{

    }catch(e){
        console.log("SendMsg controller error ",e);
        res.status(500).json({
            message:"Server Error"
        })
    }
}

export const getMsg=(req,res)=>{
    try{

    }catch(e){
        console.log("getMsg controller error ",e);
        res.status(500).json({
            message:"Server Error"
        })
    }
}