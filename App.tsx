import React from "react";
import { View, Text } from 'react-native';
//import Main from "./Screens/Main";
import { Provider } from "react-redux";
import { MyStore } from "./src/newredux/MyStore";
import Main from "./Screens/Main";
const App = () => {
  return (
    <Provider store={MyStore}>
      <Main />

    </Provider>



  )
}
export default App;