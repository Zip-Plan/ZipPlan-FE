import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import Topbar from "./Pages/Topbar";
import TotalAssets from "./Pages/TotalAssets";
import Navbar from "./Pages/Navbar";
import LoanRecommendation from "./Pages/LoanRecommendation";
import Mymap from "./Pages/Mymap";
import HomePage from "./Pages/HomePage";
import Main from "./Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "topbar",
        element: <Topbar />,
      },
      {
        path: "TotalAssets",
        element: <TotalAssets />,
      },
      {
        path: "Navbar",
        element: <Navbar />,
      },
      {
        path: "LoanRecommendation",
        element: <LoanRecommendation />,
      },
      {
        path: "mymap",
        element: <Mymap />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
