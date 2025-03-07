import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Button from "@/components/Botton/Button";

// static metadata
export const metadata = {
    title: "youssef contact info",
    description: "This is contact page",
  };

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let's keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src='/contact.png'
                        alt=""
                        fill={true}
                        className={styles.image} />
                </div>
                <form className={styles.form}>
                    <input
                        type="text"
                        placeholder="Name"
                        className={styles.input}
                    />
                    <input
                        type="email"
                        placeholder="email"
                        className={styles.input}
                    />
                    <textarea
                        className={styles.textArea}
                        placeholder="message"
                        cols="30"
                        rows="5"
                    ></textarea>
                    <Button url='' text='Send' />
                </form>

            </div>
        </div>
    )
}
export default Contact