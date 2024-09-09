import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          {/* {post.img &&  */}
          <div className={styles.imgContainer}>
            <Image src="/yoga.jpg" alt="" fill className={styles.img}/>
          </div> {/*}  */}
          <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsam commodi aperiam tenetur repudiandae totam quis, facere excepturi eum ad vero quam distinctio! Quo, corporis?</p>
          <Link className={styles.link} href="/blog/post">READ MORE</Link>
        </div>
      </div>
    )
  }
  
  export default PostCard