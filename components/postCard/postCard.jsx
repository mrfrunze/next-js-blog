import styles from "./postCard.module.css"
import Link from "next/link"
import PostImg from "../postImg/postImg"

const PostCard = ({post, index}) => {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <PostImg query="nature" index={index} />
          <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title.slice(0, 25)}...</h1>
          <p className={styles.desc}>{post.body.slice(0, 100)}...</p>
          <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
        </div>
      </div>
    )
  }
  
  export default PostCard