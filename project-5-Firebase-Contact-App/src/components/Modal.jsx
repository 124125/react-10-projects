import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom"

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {" "}
      {isOpen && (
        <div className="grid place-items-center absolute top-0 z-40 h-screen w-screen backdrop-blur">
          <div className="relative z-50 min-h-[200px] w-[80%] max-w-[400px] bg-white p-4 m-auto">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  ,document.getElementById("modal-root"));
};

export default Modal;
