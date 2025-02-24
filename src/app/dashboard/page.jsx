"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css"
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import loading from "../contact/loading";
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
    const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher);

    // ✅ Use useEffect for navigation
    useEffect(() => {
        if (session.status === "unauthenticated") {
            router?.push('/dashboard/login');
        }
    }, [session.status, router]);  // Runs when session.status changes

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>Dashboard</div>
        );
    }

    return null; // Return null if user is unauthenticated to prevent rendering issues
};

export default Dashboard;