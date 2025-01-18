import mongoose from "mongoose";

const alumniSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    company:{
        type: String,
    },
    linkedin:{
        type: String,
    },
    instituteId:{
        type: String,
        required: true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
})

const Alumni = mongoose.model("Alumni",alumniSchema);

export default Alumni;