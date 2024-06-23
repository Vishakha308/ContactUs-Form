import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdEmail, MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {


  const [name, setName] = useState("Vishakha");
  const [email, setEmail] = useState("vishakhasinghal30@gmail.com");
  const [text, setText] = useState("Studying in Manipal University Jaipur!")

  const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };



  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="21px" />}
          />
          <Button
          text="VIA CALL" icon={<FaPhoneAlt fontSize="21px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="21px" />}
        />

        <form onSubmit = {onSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="text">Text</label>
            <textarea name="name" rows="5"/>
          </div>
          <div style={
            {display:"flex",
              justifyContent:"end",
            }}>
          <Button
            text="SUBMIT"
            icon={<MdMessage fontSize="21px" />}
          />
          </div>
          <div>
            {
              name + " " + email + " " + text + " "
            }
          </div>
        </form>
      </div>
      <div className={styles.contactImage}> 
        <img src="./images/contact.svg" alt="contact Image" srcset="" />
      </div>
    </section>
  );
};
export default ContactForm;
