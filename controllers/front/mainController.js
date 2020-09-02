const async = require("async")

exports.index = async(req,res,next)=>{
    res.render("front/index")
}

exports.contact = async(req,res,next)=>{
    res.render("front/contact")
}

exports.about = async(req,res,next)=>{
    res.render("front/about")
}
