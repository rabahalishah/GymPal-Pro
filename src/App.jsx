import React from "react";
import "./App.css";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Detail from "./pages/Detail"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "detail/:excerciseId", element: <Detail /> },
      // { path: "products/:productId", element: <ProductDetails /> }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
