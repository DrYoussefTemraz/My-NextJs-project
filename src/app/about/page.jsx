import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Button from "@/components/Botton/Button";
const About = () => {
    return (
        <div className={styles.container}>About
            <div className={styles.imgContainer}>
                <Image
                    src='https://images.pexels.com/photos/20087467/pexels-photo-20087467/free-photo-of-woman-in-jeans-lying-on-chair.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
                    alt=""
                    fill={true}
                    className={styles.img}


                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}></h1>
                    <h2 className={styles.imgDesc}></h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>here is the left <br/>title</h1>
                    <p className={styles.desc}>here is the left <br/>desc</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>here is the right <br/>title</h1>
                    <p className={styles.desc}>here is the right <br/> desc</p>
                    <Button url='/contact' tet='contact'/>
                </div>

            </div>

        </div>
    )
}
export default About