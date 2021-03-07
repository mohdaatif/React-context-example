import React from "react";
import UserDetail from "./UserDetail";
const HomePage = () => {
  const myCss = {
    width: "50%",
    background: "#eaeaea",
    boxShadow: "0px 2px 3px 4px #eee",
    padding: "15px 30px 40px",
    margin: "20px auto",
    textAlign: "center",
  };
  return (
    <div style={myCss}>
      <h3>Home Page</h3>
      <UserDetail />
    </div>
  );
};
export default HomePage;
