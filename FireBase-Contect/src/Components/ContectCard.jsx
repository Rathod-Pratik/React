import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const ContectCard = ({contect}) => {
  return (
    <div key={contect.id} className="bg-yellow flex justify-between rounded-lg mt-2 p-2 gap-2">
            <div className="flex gap-1">
              <HiOutlineUserCircle className="text-orange text-4xl flex items-center" />
              <div className="flex flex-col">
                <h2 className="font-medium">{contect.name}</h2>
                <p className="text-sm">{contect.email}</p>
              </div>
            </div>
            <div className="text-4xl items-center flex">
              <RiEditCircleLine className="cursor-pointer" />
              <IoMdTrash className="text-purple-800 cursor-pointer" />
            </div>
          </div>
  )
}

export default ContectCard
