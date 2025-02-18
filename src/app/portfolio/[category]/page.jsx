import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Botton/Button';
import Image from 'next/image';
import {items} from "./data"
import { notFound } from 'next/navigation';

const getData = (cat)=>{
  const data = items[cat]

  if (data){
    return data
  }
  return notFound()
}

const Category = async ({ params }) => {
  const { category } = await params;
  const data = getData(category)
  // Destructure it after ensuring it's awaited, **Next.js 13+ (App Router), dynamic route parameters (params) should be asynchronous.
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      {data.map((item)=>(
      <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <Button text='see more' url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          src={item.image} 
          fill={true}
          alt=''
          className={styles.img}
           />
        </div>
      </div>
     ))}
    </div>
  )
}

export default Category
