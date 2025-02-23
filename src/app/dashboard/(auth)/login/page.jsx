"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

const Login = () => {
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
            <button onClick={async () => {
                const result = await signIn("google", { redirect: false });
                if (result?.error) {
                    console.error("Google login error:", result.error);
                }
            }}>Login with Google</button>
        </div>
    )
}

export default Login
