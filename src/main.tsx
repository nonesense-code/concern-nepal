import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ReactLenis } from "./utils/lenis";

createRoot(document.getElementById("root")!).render(
  <ReactLenis root>
    <StrictMode>
      <App />
    </StrictMode>
  </ReactLenis>
);
