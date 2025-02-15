import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Lorem, ipsum dolor sit amet </h1>
                    <p className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ullam! Magni, recusandae voluptates aperiam illum repellendus fuga provident mollitia repudiandae temporibus qui laboriosam voluptas, ducimus, tempore rem ipsum eos consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perferendis enim voluptatibus quas ad, ullam officia asperiores quis quo. Reiciendis assumenda expedita aspernatur minus cumque adipisci! Temporibus optio illum quis!
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/19986440/pexels-photo-19986440/free-photo-of-sweet-cake-with-heart-and-letter.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>username</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/18049026/pexels-photo-18049026/free-photo-of-woman-in-a-black-blouse-and-jeans-with-a-pink-ball.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minus deleniti, veniam dolorem expedita nobis fugit repellendus sequi nostrum amet, voluptates, error quas consequuntur ea animi. Officiis non nisi exercitationem?
                </p>
            </div>
        </div>
    )
}
export default BlogPost