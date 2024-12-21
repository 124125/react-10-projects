import Button from '../Button/Button';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.hero_image}>
            <img src="/images/dices1.png" alt="dices image" />
        </div>
        <div className={styles.hero_title_btn}>
            <h1>DICE GAME</h1>
            <Button text={'Play Now'}/>
        </div>
    </div>
  )
}

export default LandingPage