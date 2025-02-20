import { NextResponse } from "next/server"
import connect from "@/utils/db"
import { cache } from "react"
import Post from "@/modules/Post"

export const GET= async (request)=>{
//fetch data from mongodb

try{
    await connect()
    const posts= await Post.find()
    return new NextResponse(JSON.stringify(posts),{ status: 200})

}catch (error){
    return new NextResponse("Database Error",{ status: 500})
    
}


}