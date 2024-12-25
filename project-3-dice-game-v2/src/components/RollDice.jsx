import { useState } from 'react';
import styled from 'styled-components';

const RollDice = ({currentDice,rollDice}) => {

  return (
    <DiceContainer>
        <div className="dice" 
        onClick={rollDice}
        >
            <img style={{borderRadius:'25px'}} src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
        </div>
        <p>Click On Dice To Roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`