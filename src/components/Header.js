import React from "react";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            {/* <img src={Logo} alt="" /> */}
            <p className="text-5xl font-bold">ADIL</p>
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
