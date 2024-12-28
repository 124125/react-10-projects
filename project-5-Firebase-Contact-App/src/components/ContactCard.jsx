import { IoMdTrash } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDiscouse from "../hooks/useDiscouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {

  
  const {isOpen,onClose,onOpen} = useDiscouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("Contact Deleted Successfully.")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-md bg-yellow"
      >
        <div className="flex items-center py-1 pl-1">
          <HiOutlineUserCircle className="m-1 text-3xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex gap-1">
          <RiEditCircleLine onClick={onOpen} className="text-3xl cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-3xl text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact isUpdate={true}  up_contact={contact} onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default ContactCard;
