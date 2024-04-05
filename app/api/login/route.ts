import { Http2ServerRequest } from "http2";
import { NextResponse } from "next/server";


const POST = async (req: any) => {
    try {
        const {username, password} = await req.json()
        return NextResponse.json({ message : "User logged in successfully"}, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Failed to log in"}, {status: 500})
    }
}