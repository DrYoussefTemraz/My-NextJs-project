import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";

// fetchind data from server in Nextjs
async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });
    // for previous fetching we use {cache: "no-store"} as data is changing all the time 
    // if we need to revalidate the data we use {next:{revalidate:10}}

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
// ***************

const Blog = async () => {
    const data = await getData()
    return (
        <div className={styles.mainContainer}>
            {
                data.map((item) => (
                    <Link href={`/blog/${item?._id}`} className={styles.container} key={item?._id}>
                        <div className={styles.imgContainer}>
                            <Image
                                src={item.img}
                                alt='image'
                                className={styles.image}
                                width={400}
                                height={250}
                            />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                    </Link>

                ))
            }
        </div>



    )
}
export default Blog