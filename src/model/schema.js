const mongoose=require('mongoose');

const schema={

    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
}
const signUp=mongoose.model('SignUp',schema);

module.exports=signUp;