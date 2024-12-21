import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage, MdCall, MdMail } from 'react-icons/md';
import { useState } from 'react';

const ContactForm = () => {

  const [name,setName] = useState("test");
  const [email,setEmail] = useState("test@email.com");
  const [text,setText] = useState(" hello world ");

  const onSubmit = (event) => {
    event.preventDefault();
    
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }

  const onClickCall = () => {
    console.log('clicked via call');
  }

  const onClickChat = () => {
    console.log('clicked via Chat');
  }
  const onClickEmail = () => {
    console.log('clicked via Email');
  }

  
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btns}>
          <Button onClick={onClickChat} text="VIA SUPPORT CHAT" icon={<MdMessage fontSize= "24px"/>}/>
          <Button onClick={onClickCall} text="VIA CALL" icon={<MdCall fontSize="24px"/>}/>
          </div>
            <Button onClick={onClickEmail} isOutline={true} text="VIA EMAIL FORM" icon={<MdMail fontSize="24px"/>}/>
            <form onSubmit={onSubmit}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name'/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">E-mail</label>
                <input type="email" name='email'/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea style={{padding : "8px"}} name="text" rows={6}></textarea>
              </div>
              <div style={{display: 'flex',justifyContent: 'end'}}><Button text="Submit" /></div>
            </form>
            <div>{name + " " + email + " " + text}</div>
        </div>
        <div className={styles.contact_image}><img src="/images/calling_image.svg" alt="contact image" /></div>
    </section>
  )
}

export default ContactForm