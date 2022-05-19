import React from "react";
import { DocumentContent } from "../Organisms/DocumentContent";

import { DocumentHeader } from "../Organisms/DocumentHeader";

export const Document = () => {
  return (
    <>
      <div className="w-full h-full bg-sky-50">
        <DocumentHeader />
        <DocumentContent />
      </div>
      <div className="w-full h-10 text-center pt-3 bg-sky-50 font-mono ">
        &copy; Tasky
      </div>
    </>
  );
};
