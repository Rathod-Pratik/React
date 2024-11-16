import React from "react";
import Model from "./Model";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { db } from "../config/FireBase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contectSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^\d{10}$/, "Mobile number must be 10 digits")
});

const AddAndUpdateContect = ({ isOpen, onClose, isupdate, contect }) => {
  const addContect = async (contect) => {
    try {
      const contectRef = collection(db, "contects");

      const data = {
        name: contect.name,
        email: contect.email,
        mobile: contect.mobile,
        _id: localStorage.getItem("id")
      };
      await addDoc(contectRef, data);
      onClose();
      toast.success("Content Added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContect = async (contect, id) => {
    try {
      const contectRef = doc(db, "contects", id);
      await updateDoc(contectRef, contect);
      onClose();
      toast.success("Content updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contectSchemaValidation}
          initialValues={
            isupdate
              ? {
                  name: contect.name,
                  email: contect.email,
                  mobile: contect.mobile
                }
              : {
                  name: "",
                  email: "",
                  mobile: ""
                }
          }
          onSubmit={(values) => {
            isupdate ? updateContect(values, contect.id) : addContect(values);
          }}
        >
          <Form className="bg-white p-6 rounded-lg ">
            <h2 className="text-xl font-semibold text-center mb-6">
              {isupdate ? "Update Contact" : "Add New Contact"}
            </h2>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <Field
                  name="name"
                  className="h-10 border px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="text-red-500">
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  name="email"
                  className="h-10 border px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="text-red-500">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <Field
                  name="mobile"
                  className="h-10 border px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="text-red-500">
                  <ErrorMessage name="mobile" />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-2 bg-orange text-white border-none rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                {isupdate ? "Update" : "Add"} Contact
              </button>
            </div>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddAndUpdateContect;
