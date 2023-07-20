import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import DataPage from "./pages/DataPage";
import AddPage from "./pages/AddPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/users",
    element: <DataPage />,
  },
  {
    path: "/addUser",
    element: <AddPage />,
  },
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
