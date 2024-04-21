function homecontroller(req,res){
    console.log(req.body)
    return res.json({"msg":"ok"})
}

module.exports={
    homecontroller
}