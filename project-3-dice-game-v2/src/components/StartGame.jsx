import styled from "styled-components";
import { Button } from "./styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        {" "}
        <img src="/images/dices1.png" alt="dice image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: 800;
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;