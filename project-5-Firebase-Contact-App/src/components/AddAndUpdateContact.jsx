import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "Yup";

const contactSchemaValidation = Yup.object().shape({
  name:Yup.string().required("name is required."),
  email:Yup.string().email("invalid email.").required("email is required.")
})
const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, up_contact}) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully.")
    } catch (error) {
      console.log(error);
    }
    
  };


  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contact",id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully.")
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={ isUpdate ? { name: up_contact.name, email: up_contact.email }:{ name: "", email: "" }}
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, up_contact.id) : addContact(values);
            onClose();
          }}
        >
          <Form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border-2" />
              <div className="text-red-500 text-xs"><ErrorMessage name="name"></ErrorMessage></div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="h-10 border-2" />
              <div className="text-red-500 text-xs"><ErrorMessage name="email"></ErrorMessage></div>
            </div>
            <button
              type="submit"
              className="self-end border bg-orange px-3 py-1.5"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
