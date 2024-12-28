import React from "react";

const NavBar = () => {
  return (
    <div className="mt-2 flex h-[60px] justify-center gap-2 rounded-lg bg-white items-center text-lg font-medium">
      <img src="/logos_firebase.svg" alt="firebase logo" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default NavBar;
