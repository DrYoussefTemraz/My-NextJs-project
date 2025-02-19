import mongoose from "mongoose"

const connect = async () => {
    try {
         // Suppress the strictQuery deprecation warning
         mongoose.set("strictQuery", false);

         
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        // handleError(error);
        throw new Error("connection failed")
    }
};

export default connect;
