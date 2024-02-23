
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextprovider from "./Context/Shopcontext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextprovider>
      <App />
  </ShopContextprovider>
);
