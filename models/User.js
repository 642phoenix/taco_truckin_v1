const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

const userSchema = new mongoose.Schema({
  fname:{
    type:String,
    required:true
  },
  lname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  number:{
    type:Number,
    required:false
  },
  comment:{
    type:String,
    required:false
  }
},{timestamps: true});

// userSchema.methods.matchPassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// };

// userSchema.pre('save', async function(next){
//   if(!this.isModified('password')){
//     next();
//   }
//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt);
// })

module.exports = User = mongoose.model('User', userSchema);