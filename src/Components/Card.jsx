import React from "react";

const Card = ({ id, first_name, last_name, email, src }) => {
  return (
    <div className=" shadow-lg m-8 p-1 w-72">
      <div className=" bg-red-600 text-white text-center w-[100%] h-8">
        USER : {id}
      </div>
      <div className=" p-3 items-center flex flex-col">
        <img src={src} alt="user_logo" className="  h-16 w-16 m-4" />
        <h2 className=" text-md">Name - {first_name + last_name}</h2>
        <p className=" text-sm">Email-Id: {email}</p>
      </div>
    </div>
  );
};

export default Card;
