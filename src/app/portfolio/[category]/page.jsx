import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Botton/Button';
import Image from 'next/image';
const Category = async ({ params }) => {
  const { category } = await params;
  // Destructure it after ensuring it's awaited, **Next.js 13+ (App Router), dynamic route parameters (params) should be asynchronous.
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ea quisquam explicabo eligendi labore. Optio autem enim a quidem sint tenetur aut, aliquam quasi recusandae repudiandae ratione et corporis non.</p>
          <Button text='see more' url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          src='https://images.pexels.com/photos/30417489/pexels-photo-30417489/free-photo-of-dramatic-monochrome-wilderness-in-madeira.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' 
          fill={true}
          alt=''
          className={styles.img}
           />
        </div>
      </div>
      <div className={styles.item}>item
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque eligendi quibusdam, blanditiis iure tempore ducimus esse, doloremque eaque numquam consequuntur temporibus facilis dignissimos ab fugiat, id repellat. Veniam, fugiat?</p>
          <Button text='see more' url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          src='https://images.pexels.com/photos/30417489/pexels-photo-30417489/free-photo-of-dramatic-monochrome-wilderness-in-madeira.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' 
          fill={true}
          alt=''
          className={styles.img}
           />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique consequuntur sed ducimus provident natus explicabo quia asperiores praesentium tenetur! Provident dignissimos ipsa, aperiam vitae vel maxime soluta nostrum praesentium.</p>
          <Button text='see more' url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          src='https://images.pexels.com/photos/30417489/pexels-photo-30417489/free-photo-of-dramatic-monochrome-wilderness-in-madeira.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' 
          fill={true}
          alt=''
          className={styles.img}
           />
        </div>
      </div>
    </div>
  )
}

export default Category
