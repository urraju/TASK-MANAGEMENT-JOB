import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthContext from "./Components/AuthContext/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <DndProvider backend={HTML5Backend} >
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </DndProvider>
    </AuthContext>
  </React.StrictMode>
);
