import mongoose from 'mongoose';

const dbConnect = () => {
  mongoose
    .connect("mongodb+srv://himani:himani123@cluster0.rrn1k.mongodb.net/FeedbackSystem", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected successfully"))
    .catch((error) => {
      console.log("DB connection failed");
      console.error(error);
      process.exit(1); // Exit the process on DB connection failure
    });
};

export default dbConnect;
