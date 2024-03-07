import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number; label: string }
) {

    const progressColorIndicator=()=>{
        if(props.value<50){
            return "success"
        }else if(props.value>=50 &&props.value<80){
            return "primary"
        }else if(props.value>=80 &&props.value<90){
            return "warning"
        }else{
            return "error"
        } 
    }
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress color={progressColorIndicator()} size={80} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding:0
        }}
      >
        <p className="absoluter pb-4 font-bold">{`${Math.round(props.value)}%`}</p>
        <p className=" absolute pt-4 ">{props.label}</p>
      </Box>
    </Box>
  );
}

export default function CustomCircularProgress({ value, label }) {
  return <CircularProgressWithLabel value={value} label={label} />;
}
