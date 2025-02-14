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
                    <h1 className={styles.imgTitle}>Image text </h1>
                    <h2 className={styles.imgDesc}>Image description</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>here is the left title </h1>
                    <p className={styles.desc}>here is the left <br/>desc <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nihil! Tempora voluptatem ab laboriosam sunt odio impedit eos delectus iure dolore optio earum cum hic, <br/>beatae totam inventore sed quod.</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>here is the right title</h1>
                    <p className={styles.desc}>here is the right <br/> desc <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nihil! Tempora voluptatem ab laboriosam sunt odio impedit eos delectus iure dolore optio earum cum hic, <br/>beatae totam inventore sed quod.</p>
                    <Button url='/contact' text='contact'/>
                </div>

            </div>

        </div>
    )
}
export default About