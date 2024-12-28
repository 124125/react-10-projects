import React from "react";

const NotFoundContact = () => {
  return (
    <div className="flex m-auto h-[80vh] gap-4 justify-center items-center">
      <div>        <img src="/HandsContact.png" alt="contact not found image" />
      </div>
      <h1 className="text-2xl font-semibold text-white">No Contact Found
      </h1>
    </div>
  );
};

export default NotFoundContact;
