"use client"
import React, { useEffect } from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {
    const session = useSession()
    const router = useRouter()
    // ordering the hooks is important not to violate react roles.
    useEffect(() => {
        if (session.status === "authenticated") {
            router?.push('/dashboard');
        }
    }, [session.status, router]);  // Runs when session.status changes

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        const result = await signIn("credentials", {
            redirect: false,  // Prevents automatic navigation
            email,
            password,
        });

        if (result?.error) {
            console.error("Login error:", result.error);
        } else {
            console.log("Login successful:", result);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>

                <input
                    type='email'
                    placeholder='email '
                    className={styles.input}
                    required />
                <input
                    type='password'
                    placeholder='password '
                    className={styles.input}
                    required />
                <button
                    className={styles.button}>
                    Login
                </button>

            </form>
            {/* <button onClick={()=>{signIn("google", { redirect: false })}}>login with Google</button> */}
            <button
                className={styles.button + " " + styles.google}
                onClick={async () => {
                    const result = await signIn("google", { redirect: false });
                    if (result?.error) {
                        console.error("Google login error:", result.error);
                    }
                }}>Login with Google
            </button>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/register">
                Create new account
            </Link>
        </div>
    )
}

export default Login
