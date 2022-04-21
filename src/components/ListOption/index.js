import React from "react";
import "./style.css";

const customStyle = (backColor = "#9090ff") => ({
  backgroundColor: backColor,
  margin: "20px 30px",
});

const ListOption = (props) => {
  console.log(props);
  return (
    <li style={customStyle()}>
      {props.children} {props.tiempo}
    </li>
  );
};

export default ListOption;
