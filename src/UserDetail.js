import React, { useContext } from "react";
import { UserDetailContext } from "./UserDetailContext";

/* Using useContext hook 
in functional component */


const UserDetail = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div>
      <p>
        Name: <strong>{userDetail.name}</strong>
        <br></br>
        Email: <strong>{userDetail.email}</strong>
      </p>
    </div>
  );
};

/* Using static context type 
in class based component */

// class UserDetail extends React.Component {
//   static contextType = UserDetailContext;
//   render() {
//     const { userDetail } = this.context;
//     return (
//       <div>
//         <p>
//           Name: <strong>{userDetail.name}</strong>
//           <br></br>
//           Email: <strong>{userDetail.email}</strong>
//         </p>
//       </div>
//     );
//   }
// }

/* Using context's consumer
 class based component */

// class UserDetail extends React.Component {
//   render() {
//     const { userDetail } = this.context;
//     return (
//       <UserDetailContext.Consumer>
//         {(props) => (
//           <div>
//             <p>
//               Name: <strong>{props.userDetail.name}</strong>
//               <br></br>
//               Email: <strong>{props.userDetail.email}</strong>
//             </p>
//           </div>
//         )}
//       </UserDetailContext.Consumer>
//     );
//   }
// }

export default UserDetail;
