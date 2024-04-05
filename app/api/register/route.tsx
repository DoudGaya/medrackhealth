import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export const POST = async (req: any) => {
    try {
        const {fullName, email, password} = await req.json()
        const hashedPassword = await bcrypt.hash(password, 10)

        await connectMongoDB()
        const userInfo = await User.create({fullName, email, password: hashedPassword})

        return NextResponse.json({ message: "Account created successfully"}, {status: 201})
        
    } catch (error) {
        return NextResponse.json({message: 'Error creating the user'}, {status: 500})
    }
}