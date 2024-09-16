// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartItems from "./components/cart/CartItems";
import ProductPage from "./components/product/ProductPage";
import ProductDetails from "./components/product/ProductDetails";
import Root from "./components/layouts/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <ProductPage />,
        },
        {
          path: "/cart",
          element: <CartItems />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
