import React from "react";
import { Header } from "../Templates/Header";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  // define useNavigation
  const navigate = useNavigate();

  // function to redirect the page to "/todos"
  window.setTimeout(() => {
    navigate("/todos");
  }, 5000);

  return (
    <div className="w-full h-screen">
      <Header />
      <img
        src={`${process.env.PUBLIC_URL}/NotFoundImage.png`}
        alt="Page Not found"
        className="h-4/5 mx-auto object-fill"
      />
    </div>
  );
};
