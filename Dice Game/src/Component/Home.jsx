import styled from "styled-components";

const Home = ({ toggle }) => {
  return (
    <div>
      <Dice>
        <div>
          <img src="public\Image\dices 1.png" alt="" />
        </div>
        <div>
          <h1>Dice Game</h1>
          <div className="btn">
            <Button onClick={toggle}>Play now</Button>
          </div>
        </div>
      </Dice>
    </div>
  );
};
export default Home;

const Dice = styled.div`
  height: 100vh;
  min-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  img {
    height: 522px;
    width: 649px;
  }
  h1 {
    font-size: 96px;
    white-space: nowrap;
    margin: 3.5rem 0;
  }
  .btn {
    display: flex;
    justify-content: end;
  }
`;

const Button = styled.button`
  display: flex;
  padding: 1.5625rem;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 0.3125rem;
  width: 13.75rem;
  height: 2.75rem;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.25s ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    font-size: 15px;
    transition: all ease-in 0.25s;
  }
`;
