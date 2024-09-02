import Image from "next/image"
import styles from "./about.module.css"

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.textContainer}>
      <h2 className={styles.subtitle}>About Agency</h2>
      <h1 className={styles.title}>
        We create digital ideas that are bigger, bolder, braver and better.
      </h1>
      <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <span>10 K+</span>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <span>10 K+</span>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <span>10 K+</span>
            <p>Year of experience</p>
          </div>
        </div>
    </div>
      <div className={styles.imgContainer}>
        <Image 
          src="/about.png" 
          alt="about" 
          fill
          className={styles.img}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}

export default AboutPage
