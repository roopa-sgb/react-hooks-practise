import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Useeffect from "./useeffect.jsx";
import UseContext from "./useContext.jsx";
import TempConverterSharedState from "./TempConverterSharedState.jsx";
import ProductListSharedState from "./ProductListSharedState.jsx";
import Accordian from "./SynchronizedAccordian.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Accordian />
  </StrictMode>,
);
