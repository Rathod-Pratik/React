import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FoodItem from "./components/FoodItem";

export const URL = "react-one-gilt.vercel.app/";
const App = () => {
  const [data, Setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [Error, setError] = useState("");
  const [FilterData, setFilterData] = useState(null);
  const [selectedBtn, setselectedBtn] = useState("all");

  useEffect(() => {
    const FatchData = async () => {
      try {
        setloading(true);
        const response = await fetch(URL);
        const ParseData = await response.json();
        setloading(false);
        Setdata(ParseData);
        setFilterData(ParseData);
      } catch (error) {
        setError("unable to fatch data");
      }
    };
    FatchData();
  }, []);

  const SearchFood = (e) => {
    const searchvalue = e.target.value;
    if (searchvalue === "") {
      setFilterData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setFilterData(filter);
  };
  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      setselectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setselectedBtn(type);
  };

  const FilterBtns = [
    {
      name: "all",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "Breakfast",
    },
    {
      name: "Lunch",
      type: "Lunch",
    },
    {
      name: "Dinner",
      type: "Dinner",
    },
  ];
  if (Error) return <div>{Error}</div>;
  if (loading) return <div>{loading}</div>;
  return (
    <>
      <Container>
        <Navbar>
          <div className="nav">
            <div className="logo">
              <img src="/logo.svg" alt="" />
            </div>
            <div className="search">
              <input
                onChange={SearchFood}
                type="search"
                placeholder="Search Food...."
              />
            </div>
          </div>
          <div className="btn">
            {FilterBtns.map((value) => (
              <Button
                isselectedbtn={selectedBtn == value.type}
                key={value.type}
                onClick={() => filterFood(value.type)}
              >
                {value.name}
              </Button>
            ))}
          </div>
        </Navbar>
        <FoodItem data={FilterData} />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  background-color: #323334;
  margin: 0 auto;
`;
const Navbar = styled.div`
  height: 180px;

  .nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    max-width: 1200px;
    align-items: center;
    margin: 0 auto;
    padding: 32px 12px;
    @media (0<width<600px) {
      flex-direction: column;
      height: 120px;
      gap: 12px;
    }
  }
  .search input {
    border: 2px solid red;
    background-color: transparent;
    width: 285px;
    height: 40px;
    border-radius: 5px;
    padding: 0px 12px;
    outline: none;
    font-size: 16px;
    color: white;
    &::placeholder {
      color: white;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    gap: 22px;
  }
`;
export const Button = styled.button`
  background-color: ${({ isselectedbtn }) =>
    isselectedbtn ? "#f22f2f" : "#ff4343"};
  outline: 1px solid
    ${({ isselectedbtn }) => (isselectedbtn ? "white" : "#ff4343")};
  border: none;
  color: white;
  padding: 7px 15px;
  border-radius: 5px;
  margin: 19px 0px;
  cursor: pointer;
  &:hover {
    background-color: #f22f2f;
  }
`;
