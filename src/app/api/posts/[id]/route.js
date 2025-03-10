import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/modules/Post"

export const GET = async (request, { params }) => {
    const { id } = await params;
    try {
      await connect();
  
      const post = await Post.findById(id);
  
      return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };

  export const DELETE = async (request, { params }) => {
    const { id } = await params;
    try {
      await connect();
  
     await Post.findByIdAndDelete(id);
  
      return new NextResponse("post has been deleted", { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };