"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css"
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import loading from "../contact/loading";
import Image from "next/image";
import { Island_Moments } from "next/font/google";
const Dashboard = () => {

    //OLD WAY TO FETCH DATA
    // const [data, setData] = useState([])
    // const [error, setError] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true)
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //             cache: "no-store",
    //         });
    //         // for previous fetching we use {cache: "no-store"} as data is changing all the time 
    //         // if we need to revalidate the data we use {next:{revalidate:10}}

    //         if (!res.ok) {
    //             setError(true)
    //         }

    //         const data = await (res.json())

    //         setData(data)
    //         setIsLoading(false)
    //     }
    //     getData()
    // }, [])


    // **using useSession
    const session = useSession();
    const router = useRouter()
    console.log(session);

    // Fetching data with SWR
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error, mutate, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);
    console.log(data)

    // ✅ Use useEffect for navigation
    useEffect(() => {
        if (session.status === "unauthenticated") {
            router?.push('/dashboard/login');
        }
    }, [session.status, router]);  // Runs when session.status changes

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = e.target[0].value
        const desc = e.target[1].value
        const img = e.target[2].value
        const content = e.target[3].value

        try {
            //creating a post  and send it to the backend
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    desc,
                    img,
                    content,
                    username: session?.data?.user.name,
                }),
            });
            mutate()
            e.target.reset()

        } catch (err) {
            console.log(err)
        }

    }
    const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, { method: "DELETE" })
            mutate()
        } catch (err) {
            console.log(err)
        }

    }

    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {isLoading
                        ? "loading"
                        : data?.map((post) => (
                            <div className={styles.post} key={post._id}>
                                <div className={styles.imgContainer}>
                                    <Image src={post.img} alt="" width={200} height={100} />
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <span
                                    className={styles.delete}
                                    onClick={() => handleDelete(post._id)}
                                >
                                    X
                                </span>
                            </div>
                        ))}
                </div>
                <form className={styles.new} onSubmit={handleSubmit}>
                    <h2>Add New Post</h2>
                    <input type="text" placeholder="title" className={styles.input} />
                    <input type="text" placeholder="Desc" className={styles.input} />
                    <input type="text" placeholder="Image" className={styles.input} />
                    <textarea
                        placeholder="Content"
                        className={styles.textArea}
                        cols="30"
                        rows="8">
                    </textarea>
                    <button className={styles.button}>Send</button>

                </form>


            </div>
        );
    }

    return null; // Return null if user is unauthenticated to prevent rendering issues
};

export default Dashboard;