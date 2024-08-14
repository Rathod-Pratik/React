import Score from "./score";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import Number from "./Number";

const Gameplay = () => {
  return (
    <>
      <Nav>
        <div>
          <Score />
        </div>
        <div>
          <Number />
        </div>
      </Nav>
      <RoleDice />
    </>
  );
};

export default Gameplay;

const Nav = styled.nav`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
`;
