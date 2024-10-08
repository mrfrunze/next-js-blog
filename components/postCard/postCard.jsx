import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = async ({post, index}) => {
   // Заранее определяем переменные
  const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
  const BASE_URL = "https://api.unsplash.com/search/photos"; 

  // Получаем URL картинки на сервере
  const images = await fetch(`${BASE_URL}?query=${post.title}&client_id=${ACCESS_KEY}&per_page=10`);
  const data = await images.json();
  
  // Получаем одну картинку по индексу
  const img = data.results[index % data.results.length]; 
  const imageUrl = img ? img.urls.small : "/yoga.jpg"; // Обработка отсутствия картинки


    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <img src={imageUrl} alt={post.title} className={styles.img} />
          <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title.slice(0, 25)}...</h1>
          <p className={styles.desc}>{post.body.slice(0, 100)}...</p>
          <Link className={styles.link} href={{
             pathname: `/blog/${post.id}`,
             query: { imageUrl }
            }}>READ MORE</Link>
        </div>
      </div>
    )
  }
  
  export default PostCard