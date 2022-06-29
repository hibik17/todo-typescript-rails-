import React from "react";
import { DocumentHeaderDown } from "../Molecules/DocumentHeaderDown";
import { DocumentHeaderTop } from "../Molecules/DocumentHeaderTop";

export const DocumentHeader = () => {
  return (
    <div className="w-full h-80 text-white bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <DocumentHeaderTop />
      <DocumentHeaderDown />
    </div>
  );
};
