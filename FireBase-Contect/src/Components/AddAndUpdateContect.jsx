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
});

const AddAndUpdateContect = ({ isOpen, onClose, isupdate, contect }) => {
  const addContect = async (contect) => {
    try {
      const contectRef = collection(db, "contects");
      await addDoc(contectRef, contect);
      onClose();
      toast.success("content Added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContect = async (contect, id) => {
    try {
      const contectRef = doc(db, "contects", id);
      await updateDoc(contectRef, contect);
      onClose();
      toast.success("content updated successfully");
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
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isupdate ? updateContect(values, contect.id) : addContect(values);
          }}
        >
          <Form className="my-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border" />
              <div className="text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 border" />
              <div className="text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button
              type="submit"
              className="self-end border bg-orange px-3 py-1.5"
            >
              {isupdate ? "Update" : "add"} contect
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddAndUpdateContect;
