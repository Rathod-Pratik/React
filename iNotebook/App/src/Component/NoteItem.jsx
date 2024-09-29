import React from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import contextValue from './contect/notes/noteContect'

const NoteItem = (props) => {
  const context=useContext(contextValue);
  const {deleteNode}=context;
  const {updatenote,note}=props;
    return (
      <div>
        <div className="w-[250px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {props.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-black">
            {props.description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-black">
            {props.tag}
          </p>

          <div className="flex gap-2">
          <a
            onClick={()=>{deleteNode(props.id)}}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <MdDelete  />
          </a>
          <a
           onClick={() => updatenote(note)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaRegEdit  />
          </a>
            </div>
        </div>
      </div>
    );
  };

export default NoteItem;
