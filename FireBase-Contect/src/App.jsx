import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "./config/FireBase";
import ContectCard from "./Components/ContectCard";
import Model from "./Components/Model";
import AddAndUpdateContect from "./Components/AddAndUpdateContect";

const App = () => {
  const [contects, setcontects] = useState([]);
  const [isOpen,setOpen] =useState(false);

  const onOpen=()=>{
    setOpen(true);
  }
  const onClose=()=>{
    setOpen(false);
  }
  useEffect(() => {
    const getContacts = async () => {
        try {
          const contactRef = collection(db, "contects");
          const contactsSnapshot = await getDocs(contactRef);
          console.log(contactsSnapshot)
          const contactList = contactsSnapshot.docs.map((doc) =>{ return{
            id:doc.id,
            ...doc.data()
          }});
  
          setcontects(contactList);
          console.log(contactList);
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
    };
  
    getContacts();
  }, []);
  
  return (
    <>
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
          <AiFillPlusCircle className="text-white text-5xl cursor-pointer" onClick={onOpen}/>
        </div>
      </div>
      <div>
        {contects.map((contect) => (
         <ContectCard contect={contect} key={contect.id}/>
        ))}
      </div>
    </div>
    <AddAndUpdateContect isOpen={isOpen} onClose={onClose}/>

    </>
  );
};

export default App;
