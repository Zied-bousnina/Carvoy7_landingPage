import React from "react";

const CustomFileInput = (props) => {
  return (
<div className="container mx-auto p-4 ">
    <label className="block">
        <input type="file" className="file:mr-4 file:py-2 file:px-4 
               file:rounded-full file:border-0 
               file:text-sm file:font-normal 
               file:bg-[#e5f3fb] file:text-[#0085db] 
               hover:file:bg-[#0085db] hover:file:text-white file:duration-200 file:cursor-pointer cursor-pointer"
               accept="*" {...props} />
    </label>
</div>

  );
};

export default CustomFileInput;
