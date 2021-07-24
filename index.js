import express from "express";


const zomato = express();

zomato.get("/" , (req,res) => res.json({message:"Setup sucessfull"}));
zomato.listen(4000,()=> console.log("Server running "));