import Image from 'next/image';
import styles from './page.module.css'
import hello from '../../public/hellothere.png'
import Button from '@/components/Botton/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for you</h1>
        <p className={styles.desc}>  Craft intuitive and visually stunning digital experiences that captivate your audience. Our design solutions blend creativity with functionality,
        </p>
        <Button url='/portfolio' text='See our works'/>
        
      </div>
      <div className={styles.item}>
        <Image src={hello} alt='hhh' className={styles.img} />
      </div>
    </div>
  )

}
