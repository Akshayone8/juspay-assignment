import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Home from "./components/home/Home";
import Default from "./components/default/Default";
import OrderTable from "./components/orderTable/OrderTable";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Default />,
      },
      {
        path: "default",
        element: <Default />,
      },
      {
        path: "orders",
        element: <OrderTable />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={routes} />;

export default App;
