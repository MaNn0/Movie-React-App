import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Ensure this is the correct path for your CSS file
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./components/store/index.js"; // Fixed path for the store

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);