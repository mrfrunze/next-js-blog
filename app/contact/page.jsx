import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt=""
         className={styles.img} 
         width={500}
         height={500}
         layout="responsive"
        />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
        <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
