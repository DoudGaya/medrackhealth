import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import bcrypt from "bcryptjs"
import  CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            // @ts-ignore
            async authorize( credentials) {
                // @ts-ignore
                const {email, password} = credentials

                try {
                    await connectMongoDB()
                    const user = await User.findOne({email})
                    if (!user) return null
                    const passwordCheck = await bcrypt.compare(password, user.password)
                    if (!passwordCheck) return null
                    return user
                } catch (error) {
                    console.log("Error:", error) 
                }
               
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
}
// @ts-ignore
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}