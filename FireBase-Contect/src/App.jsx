import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "./config/FireBase";
import ContectCard from "./Components/ContectCard";
import Model from "./Components/Model";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddAndUpdateContect from "./Components/AddAndUpdateContect";
import useDisclous from "./useDisclous";
import NotFoundContect from "./Components/NotFoundContect";
const App = () => {
  const [contects, setcontects] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclous();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contects");

        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setcontects(contactList);
        });
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    getContacts();
  }, []);

  const filterContects=(e)=>{
    const value =e.target.value;
    const contactRef = collection(db, "contects");

    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      
      const filterContect=contactList.filter(contect=>contect.name.toLowerCase().includes(value.toLowerCase()))
      setcontects(filterContect);
      return filterContect;
    })
  }

  return (
    <>
      <div className="mx-auto w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative my-2 flex items-center">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
            onChange={filterContects}
              type="text"
              className="h-10 w-[295px] flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
              placeholder="Search Contect"
            />
          </div>
          <div className="flex items-center">
            <AiFillPlusCircle
              className="cursor-pointer text-5xl text-white"
              onClick={onOpen}
            />
          </div>
        </div>
        <div>
          {contects.length<=0 ?<NotFoundContect/>: contects.map((contect) => (
            <ContectCard contect={contect} key={contect.id} />
          ))}
        </div>
      </div>
      <AddAndUpdateContect isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center"/>
    </>
  );
};

export default App;
