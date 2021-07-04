import React from "react";
import { Provider } from "react-redux";
import configStore from "./store";

import "./app.scss";
const store = configStore();

const App = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default App;
