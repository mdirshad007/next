import React, { useState } from "react";

function Pagination() {
  const [pageNo,setpageNo]=useState(1);
  const handelNextClick=()=>{   
    setpageNo(pageNo+1)
  }
  const handelPrevClick=()=>{
    if(pageNo>=2){
      setpageNo(pageNo-1)
    }
  }
  return (
    <div className="flex border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-10">
      <div className="flex flex-1 justify-between">
        <button
        disabled={pageNo<=1}
        onClick={handelPrevClick}
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${pageNo<=1?"bg-gray-300 hover:bg-gray-300":""}`}
        >
          Previous
        </button>
        <button
        onClick={handelNextClick}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
