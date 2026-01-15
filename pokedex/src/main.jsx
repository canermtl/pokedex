import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
