import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/FireBase";
import ContectCard from "./Components/ContectCard";

const App = () => {
  const [contects, setcontects] = useState([]);
  useEffect(() => {
    const getcontects = async () => {
      try {
        const contectRef = collection(db, "Contect");
        const contectsSnapshot = await getDocs(contectRef);
        const ContectList = contectsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setcontects(ContectList);
      } catch (error) {}
    };
    getcontects();
  }, []);
  return (
    <div className="w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex items-center relative my-2">
          <FiSearch className="absolute text-white ml-1 text-3xl" />
          <input
            type="text"
            className="rounded-md h-10 border text-white border-white bg-transparent pl-9 flex-grow w-[295px]"
            placeholder="Search Contect"
          />
        </div>
        <div className="flex items-center">
          <AiFillPlusCircle className="text-white text-5xl cursor-pointer" />
        </div>
      </div>
      <div>
        {contects.map((contect) => (
         <ContectCard contect={contect} key={contect.id}/>
        ))}
      </div>
    </div>
  );
};

export default App;
