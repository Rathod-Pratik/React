import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../config/FireBase';
import AddAndUpdateContect from "./AddAndUpdateContect";
import useDisclous from "../useDisclous";
import { toast } from "react-toastify";

const ContectCard = ({ contect }) => {
  const deleteContect = async (id) => {
    try {
      await deleteDoc(doc(db, "contects", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete contact");
    }
  };

  const { isOpen, onClose, onOpen } = useDisclous();

  return (
    <>
      <div key={contect.id} className="bg-white w-full sm:w-[360px] rounded-lg mt-2 p-4 shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Left side: Contact info */}
        <div className="flex gap-3 items-center">
          <HiOutlineUserCircle className="text-orange text-5xl" />
          <div className="flex flex-col max-w-[250px]">
          <h2 className="font-medium text-lg break-all">{contect.name}</h2>
  <p className="text-sm text-gray-600 break-all">{contect.email}</p>
  <p className="text-sm text-gray-600 break-all">{contect.mobile}</p>
          </div>
        </div>

        {/* Right side: Actions (Edit & Delete) */}
        <div className="flex gap-4 text-xl items-center mt-4 sm:mt-0">
          <RiEditCircleLine
            onClick={onOpen}
            className="cursor-pointer text-blue-500 text-3xl hover:text-blue-700"
          />
          <IoMdTrash
            onClick={() => deleteContect(contect.id)}
            className="cursor-pointer text-red-600 hover:text-red-800 text-3xl"
          />
        </div>
      </div>

      {/* Modal for editing contact */}
      <AddAndUpdateContect contect={contect} isupdate={true} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContectCard;
