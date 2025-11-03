// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // ← あなたのアプリ本体
import "./index.css"; // ← TailwindなどのCSSを読み込む

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
