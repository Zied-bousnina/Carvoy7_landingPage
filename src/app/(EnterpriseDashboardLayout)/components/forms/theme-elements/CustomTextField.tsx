import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Icon } from "@iconify/react";

const CustomTextField = styled((props: any) => {
  const [showPwd, setShowPwd] = useState(false);
  const toggleShowPwd = () => {
    setShowPwd(!showPwd);
  };
  return (
    <>
      {props.type === "password" ? (
        <div className="relative">
          <TextField {...props} type={showPwd ? "text" : "password"} />

          <Icon
            icon={showPwd ? "heroicons:eye-slash" : "heroicons:eye"}
            className="absolute right-3 top-3 text-xl text-gray-700 cursor-pointer"
            onClick={toggleShowPwd}
          />
        </div>
      ) : (
        <TextField {...props} />
      )}
    </>
  );
})(({ theme }) => ({
  "& .MuiOutlinedInput-input::-webkit-input-placeholder": {
    color: theme.palette.text.secondary,
    opacity: "0.8",
  },
  "& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder": {
    color: theme.palette.text.secondary,
    opacity: "1",
  },
  "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[200],
  },
}));

export default CustomTextField;
