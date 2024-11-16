import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/FireBase";
import ContectCard from "./ContectCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddAndUpdateContect from "./AddAndUpdateContect";
import useDisclous from "../useDisclous";
import NotFoundContect from "./NotFoundContect";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigate();
    const [contects, setContects] = useState([]);
    const { isOpen, onClose, onOpen } = useDisclous();
    const [login, setlogin] = useState(false);

    // Replace 'currentUserId' with the actual ID of the logged-in user
    const currentUserId = localStorage.getItem('id'); // Assume this is fetched from your authentication system

    useEffect(() => {
        if (localStorage.getItem('id')) {

        } else {
            navigation('login');
        }
        if (currentUserId) {
            setlogin(true);
        } else {
            setlogin(false);
        }
        const getContacts = async () => {
            try {
                const contactRef = collection(db, "contects");
                // Query to fetch contacts specific to the logged-in user
                const userContactQuery = query(contactRef, where("_id", "==", currentUserId));

                // Listen for changes in the user's contacts
                onSnapshot(userContactQuery, (snapshot) => {
                    const contactList = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setContects(contactList);
                });
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };

        getContacts();
    }, [currentUserId]); // Ensure currentUserId is included in the dependency array

    const Logoutbtn = () => {
        localStorage.removeItem('id');
        navigation('/')
    }

    const filterContects = (e) => {
        const value = e.target.value;
        // Use the same query to filter contacts
        const contactRef = collection(db, "contects");
        const userContactQuery = query(contactRef, where("_id", "==", currentUserId));

        onSnapshot(userContactQuery, (snapshot) => {
            const contactList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            // Filter contacts based on search input
            const filteredContacts = contactList.filter(contect =>
                contect.name.toLowerCase().includes(value.toLowerCase())
            );
            setContects(filteredContacts);
        });
    };

    return (
        <div>
            {login && (
                <div>
                    <div className="mx-auto w-[370px] px-4">
                        <Navbar />
                        <div className="flex justify-center w-[360px]">
                            <button onClick={Logoutbtn} className="bg-orange rounded text-white px-4 m-auto py-1">Logout</button>
                        </div>

                        {/* White background section */}
                        <div className="bg-white p-4 rounded-lg my-4 shadow-lg w-[360px]">
                            <div className="flex gap-2">
                                <div className="relative my-2 flex items-center">
                                    <FiSearch className="absolute ml-1 text-3xl text-gray-500" />
                                    <input
                                        onChange={filterContects}
                                        type="text"
                                        className="outline-none h-10 w-[280px] flex-grow rounded-md border border-gray-300 pl-9"
                                        placeholder="Search Contacts"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <AiFillPlusCircle
                                        className="cursor-pointer text-5xl text-gray-500"
                                        onClick={onOpen}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Displaying contacts */}
                        <div>
                            {contects.length <= 0 ? <NotFoundContect /> : contects.map((contect) => (
                                <ContectCard contect={contect} key={contect.id} />
                            ))}
                        </div>
                    </div>

                    <AddAndUpdateContect isOpen={isOpen} onClose={onClose} />
                    <ToastContainer position="bottom-center" />
                </div>
            )}
        </div>
    );
}

export default Home;
