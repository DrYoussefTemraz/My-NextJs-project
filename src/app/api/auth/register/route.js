const { NextResponse } = require("next/server");
import User from "@/modules/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs"

export const POST = async (request)=>{
    const {name, email, password} = await request.json();
    await connect()
    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = new User({
        name,
        email,
        password: hashedPassword
    })

    try{
        await newUser.save()
        return new NextResponse("user has been created",{
            status: 201
        })
       

    }catch(err){
        return new NextResponse(err.message, {
            status: 500
        } )
    }
}