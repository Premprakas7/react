import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { store } from "./Redux/store";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import { Provider } from "react-redux";

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
