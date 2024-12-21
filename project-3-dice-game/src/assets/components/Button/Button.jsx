import styles from './Button.module.css';

const Button = ({isOutline,text, ...rest}) => {
  return (
    <button {...rest} className={isOutline == true ? styles.outline_btn : styles.primary_btn}>{text}</button>
  )
}

export default Button