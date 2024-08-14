import styled from "styled-components"
import { useState } from "react";
const Number = () => {
    const number = [1, 2, 3, 4, 5, 6];
  const [color, setcolor] = useState();
  return (
    <SelectNumber>
       <div className="flex">
          <div className="number">
            {number.map((value, i) => (
              <Box key={i} onClick={() => setcolor(value)} isvalue={value == color}>
              {value}
            </Box>
            ))}
          </div>
          <div>
            <p className="select-number">Select Number</p>
          </div>
        </div>
    </SelectNumber>
  )
}

export default Number

const SelectNumber = styled.div`

  .number {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  .flex{
    display: flex;
    gap: 24px;
    flex-direction: column;
    margin-top: 40px;
  }
  .select-number{
     display: flex;
    justify-content: end;
    font-size: 30px;
    font-weight: bold;
  }
`;
const Box = styled.p`
  border: 2px solid black;
  color: black;
  height: 72px;
  width: 72px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: ${(props) => props.isvalue ?"black":"white"};
  color: ${(props) => !props.isvalue ?"black":"white"};
`;
