import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer, toast } from 'react-toastify';
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDiscouse from "./hooks/useDiscouse";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const {isOpen,onClose,onOpen} = useDiscouse();
  

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");

        onSnapshot(contactsRef,(snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
  
          setContacts(contactList);
        })
      } catch (e) {
        console.log(e);
      }
    };

    getContacts();
  }, []);

  const filterdContacts = (e) => {
    const value = e.target.value;

    try {
      const contactsRef = collection(db, "contact");

      onSnapshot(contactsRef,(snapshot) => {
        const contactList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        const filterdContacts = contactList.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase()));

        setContacts(filterdContacts);
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="mx-auto max-w-[270px]">
        <NavBar />
        <div className="flex justify-between gap-2">
          <div className="relative flex flex-grow items-center">
            <IoMdSearch className="absolute ml-1 text-3xl text-white" />
            <input
              type="text"
              onChange={filterdContacts}
              className="h-9 flex-grow rounded-md border border-white bg-transparent pl-10 text-white"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="cursor-pointer text-6xl text-white"
          />
        </div>
        <div className="mx-auto flex flex-col gap-2">
          {contacts.length === 0 ? <NotFoundContact /> : contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer 
       position="bottom-center"
      />
    </>
  );
};

export default App;
