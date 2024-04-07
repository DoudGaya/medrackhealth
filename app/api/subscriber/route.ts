import { connectMongoDB } from "@/lib/mongodb";
import Subscriber from "@/models/subscriber";
import { NextResponse } from "next/server";
export async function POST(req: any) {
    try {
        const {email} =  await req.json();
        await connectMongoDB();
        await Subscriber.create({ email })
        return NextResponse.json({message: 'subscription sent'}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Error occured while submitting mail'}, {status: 500})
    }
}