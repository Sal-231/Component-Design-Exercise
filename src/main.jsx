import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.jsx";

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    import.meta.hot.invalidate();
  });
}

ReactDOM.createRoot(document.getElementById("root"))
        .render(
	        <React.StrictMode>
		        <App />
	        </React.StrictMode>
        );
