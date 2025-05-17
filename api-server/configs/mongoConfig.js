import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/cryptoStat`);
    } catch (error) {
        console.log(error);
        console.log
    }
}
export default connectDB;