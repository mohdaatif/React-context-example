import React, { useState } from "react";

const UserDetailContext = React.createContext();

function UserDetailProvider(props) {
  const [userDetail, setUserDetail] = useState({
    name: "Mohd Aatif",
    email: "atif@sofyrus.com",
  });
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {props.children}
    </UserDetailContext.Provider>
  );
}

export { UserDetailContext, UserDetailProvider };
