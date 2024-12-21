import Button from "../Button/Button";
import styles from "./GamePage.module.css";
import { useState } from "react";

const GamePage = () => {
  const [isRulesShown, setIsRulesShown] = useState(false);

  const toggleRules = () => {
    setIsRulesShown((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.control_panel}>
        <div className={styles.score_board}>
          <h1>0</h1>
          <p>Total Score</p>
        </div>
        <div className={styles.number_selector}>
          <div className={styles.number_box}>
            <div className={styles.number}>
              <span>1</span>
            </div>
            <div className={styles.number}>
              <span>2</span>
            </div>
            <div className={styles.number}>
              <span>3</span>
            </div>
            <div className={styles.number}>
              <span>4</span>
            </div>
            <div className={styles.number}>
              <span>5</span>
            </div>
            <div className={styles.number}>
              <span>6</span>
            </div>
          </div>
          <h2>Select Number</h2>
        </div>
      </div>

      <main>
        <div className={styles.dice_box}>
          <div className={styles.dice_image}>
            <img src="/images/cubes_gambling.png" alt="dice image" />
          </div>
          <p>Click on Dice to roll</p>
          <div className={styles.game_btns}>
            <Button isOutline={true} text="Reset Score" />
            <Button onClick={toggleRules} text="Show Rules" />
          </div>
        </div>
      </main>
      {isRulesShown == true ? (
        <div className={styles.rules}>
          <h1>How to play dice game</h1>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
          <p>if you get wrong guess then  2 point will be dedcuted</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GamePage;
