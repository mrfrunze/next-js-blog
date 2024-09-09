"use client"

import Image from "next/image"
import styles from "./singlePost.module.css"
import { useParams } from 'next/navigation';

const SinglePostPage = () => {
  const params = useParams();
  const slug = params.slug;
  console.log(slug);
  

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/yoga.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1  className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="/avatar.jpg" alt="avatar" className={styles.avatar} width={64} height={64} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis atque aliquam fugiat quibusdam perspiciatis omnis quasi, a et eligendi repellat voluptas reiciendis ducimus expedita.</div>
      </div>
    </div>
  )
}

export default SinglePostPage
