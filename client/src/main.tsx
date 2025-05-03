import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import App from "./App";
import "./index.css";
// Import i18n config
import "./i18n";

const loadingMarkup = (
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Carregando...</p>
    </div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>
);
