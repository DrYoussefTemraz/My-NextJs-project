import Image from 'next/image';
import styles from './page.module.css'
import Hero from '../../public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for you</h1>
        <p className={styles.desc}>  Craft intuitive and visually stunning digital experiences that captivate your audience. Our design solutions blend creativity with functionality,
        </p>
        <button className={styles.button}>See our works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='hhh' className={styles.img} />
      </div>
    </div>
  )

}
