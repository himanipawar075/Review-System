import mongoose from "mongoose";
const dbConnect=async()=>{
    try {
       await mongoose.connect("mongodb+srv://himani:himani123@cluster0.rrn1k.mongodb.net/FeedbackSystem")
       console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed",error)
    }
}
export default dbConnect;
