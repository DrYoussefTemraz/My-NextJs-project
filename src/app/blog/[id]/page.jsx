import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import { notFound } from "next/navigation";


async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });
    // for previous fetching we use {cache: "no-store"} as data is changing all the time 
    // if we need to revalidate the data we use {next:{revalidate:10}}

    if (!res.ok) {
        return notFound()
    }

    return res.json();

}
// Dynamic Metadata
export async function generateMetadata({params}) {
    const {id} = await params
   const post = await getData(id)
   return {
        title: post.title, 
        description: post.desc
        
    }
}

const BlogPost = async ({ params }) => {
    // New way of waiting params in Next
    const {id} = await params
    const data = await getData(id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title} </h1>
                    <p className={styles.desc}>
                        {data.desc}
                    </p>
                    <div className={styles.author}>
                        <Image
                            src={data.img}
                            alt="image"
                            width={40}
                            height={40}
                            className={styles.avatar}

                        />
                        <span className={styles.username}>{data.username}</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={data.img}
                        alt="image"
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
        <p className={styles.text}>
         {data.content}
        </p>
      </div>
        </div>
    )
}
export default BlogPost