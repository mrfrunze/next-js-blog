import Image from "next/image"
import styles from "./singlePost.module.css"
// import { useParams } from 'next/navigation';
import PostUser from "../../../components/postUser/postUser"
import { Suspense } from "react";
import PostImageClient from "../../../components/PostImageClient" 

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const SinglePostPage = async ({params, searchParams }) => {
  const {slug} = params
  const post = await getData(params.slug);
  // console.log(params.slug);

  // Извлекаем imageUrl из searchParams (или получаем через query в Link)
  const imageUrl = searchParams.imageUrl || "/yoga.jpg"; // Замена при отсутствии URL
  

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <PostImageClient imageUrl={imageUrl} fallbackImage="/yoga.jpg" alt={post.title} className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1  className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src="/avatar.jpg" alt="avatar" className={styles.avatar} width={64} height={64} />
          <Suspense fallback={<div>Loading..</div>}>
             <PostUser userId = {post.id}/>
          </Suspense>
         
          <div className={styles.detailText}>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage
