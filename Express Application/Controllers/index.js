const profession= require("../Models/profession"); 

exports.getprofession=(req,res) => {
    profession.find()
    .then(response => res.status(200).json({message:"Professions fetched successfully", professions:response}))
    .catch(error=> console.log(error))
}