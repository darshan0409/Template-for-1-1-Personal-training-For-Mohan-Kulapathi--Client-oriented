const mongoose = require("mongoose");

const formmodelSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
    },
    mobile:{
        type: Number,
        require:true,
        // unique:true
    },
    email:{
        type: String,
    },
    plan:{
        type:String,
    },
    appointment_date:{
        type:String,
    }  
   
},{
    timestamps:true
});
module.exports = mongoose.model("FormModel", formmodelSchema);