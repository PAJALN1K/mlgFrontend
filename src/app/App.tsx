import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routing/AppRouter/AppRouter";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <MLGDevPanel /> */}
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
