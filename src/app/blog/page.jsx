import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
    return (
        <div className={styles.mainContainer}>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image
                        src='https://images.pexels.com/photos/30082117/pexels-photo-30082117/free-photo-of-pouring-traditional-tea-in-ornate-setting.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
                        alt=''
                        className={styles.image}
                        width={400}
                        height={250}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>desc</p>
                </div>
            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image
                        src='https://images.pexels.com/photos/30082117/pexels-photo-30082117/free-photo-of-pouring-traditional-tea-in-ornate-setting.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
                        alt=''
                        className={styles.image}
                        width={400}
                        height={250}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>desc</p>
                </div>
            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image
                        src='https://images.pexels.com/photos/30082117/pexels-photo-30082117/free-photo-of-pouring-traditional-tea-in-ornate-setting.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
                        alt=''
                        className={styles.image}
                        width={400}
                        height={250}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>desc</p>
                </div>
            </Link>

        </div>


    )
}
export default Blog