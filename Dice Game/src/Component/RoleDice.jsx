import { useState } from "react";
import styled from "styled-components";

const RoleDice = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const random = () => {
    const number = getRandomNumber(1, 7);
    setCurrentDice(number);
  };
  return (
    <RollDice>
      <img src={`/Image/dice_${currentDice}.png`} onClick={random} alt="Dice" />
      <p>Click on Dice to roll</p>
    </RollDice>
  );
};

export default RoleDice;

const RollDice = styled.div`
  line-height: 48px;
  display: flex;
  margin: auto;
  flex-direction: column;
  p {
    font-size: 24px;
    display: flex;
    margin: auto;
    font-weight: bold;
  }
  img {
    margin: auto;
    height: 250px;
    width: 250px;
  }
`;
