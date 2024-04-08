import mongoose from "mongoose"
export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DB || 'mongodb+srv://adaagad:QYHdfz7clx2boZse@cluster0.vsdn8go.mongodb.net/medrackhealth')
        console.log('Connection Established')
    } catch (error) {
        console.log("Error Connecting to MongoDB", error)
    }
}