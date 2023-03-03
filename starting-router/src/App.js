import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import ErrorPage from "./Pages/Error";
import HomePage from "./Pages/Home";
import ProductPage from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import RootLayout from "./Pages/Root";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/product" element={<ProductPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/product/:id", element: <ProductDetails /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinition);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
