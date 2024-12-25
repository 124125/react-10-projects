import styled from "styled-components";

export const Rules = () => {
  return (
    <RulesContainer >
      <h1 id="target-for-auto-scroll">How to play dice game</h1>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
      </div>
    </RulesContainer>
  );
};

const RulesContainer = styled.div`
  background-color: #f9e5e5;
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  border-radius: 10px;

  h1 {
    font-size: 24px;
    font-weight: 600;
  }

  .text {
    font-weight: 400;
    font-size: 16px;
    margin-top: 10px;
  }
`;
