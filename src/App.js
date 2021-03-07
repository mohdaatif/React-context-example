import React from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import { UserDetailProvider } from "./UserDetailContext";
const App = () => (
  <div>
    <UserDetailProvider>
      <HomePage />
    </UserDetailProvider>
  </div>
);

render(<App />, document.getElementById("root"));
export default App;
