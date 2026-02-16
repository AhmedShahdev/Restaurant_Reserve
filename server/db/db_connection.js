import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "MERNDB"
    }).then(()=>{
        console.log("Database connected successfully")
    }).catch(err=>{
        console.log(`Error occured ${err}`);
    });
}

