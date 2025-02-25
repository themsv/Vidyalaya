import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import RootProvider from "./providers/RootProvider";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RootProvider />
    </StrictMode>,
  );
}
