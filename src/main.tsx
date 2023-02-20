import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CombinedProvider } from "./providers/CombinedProvider";
import { GlobalStyle } from "./styles/globalStyles";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CombinedProvider>
    <GlobalStyle />
    <App />
  </CombinedProvider>
);
