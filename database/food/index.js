import mongoose from "mongoose";


const FoodSchama = new mongoose.Schema({

     name : {type: String, required: true },
     descript: { type: String, required: true},
     isVeg : {type:Boolean , required: true}  ,
     isContainsEgg:{type:Boolean ,required: true},
     category :{type:String, required: true},
     photos:{
         type:mongoose.Types.ObjectId,
         ref: "Images",
     },
     price:{type: Number, required: true, default:150 },
     addOns:[{
        type:mongoose.Types.ObjectId,
        ref:"Foods",
     },],
     restuarant:{
         type:mongoose.Types.ObjectId,
         ref:"Restaurants",
         required:true,
     },
});
export const FoodModel = mongoose.model("Foods",FoodSchema);