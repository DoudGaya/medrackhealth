import mongoose from "mongoose"
export const connectMongoDB = async () => {
    try {
        // @ts-ignore
        await mongoose.connect(process.env.DB)
        console.log('Connection Established')
    } catch (error) {
        console.log("Error Connecting to MongoDB", error)
    }
}