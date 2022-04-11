
const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const professionSchema = new Schema(
    {
        name: {
            type:"string",
            required:true
        },
        info: {
            type:"string",
            required:true
        }
    
    }
)

module.exports=mongoose.model('profession', professionSchema);