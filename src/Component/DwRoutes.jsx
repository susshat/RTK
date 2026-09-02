import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CreateProduct from "./product/CreateProduct";

const DwRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar></NavBar>
              <Outlet></Outlet>
              {/* <Footer></Footer> */}
            </div>
          }
        >
          <Route index element={<div>Home Page</div>}></Route>
          <Route
            path="products"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route path=":id" element={<div>Show product details</div>}></Route>
            <Route index element={<div>Show all products</div>}></Route>
            <Route
              path="create"
              element={<CreateProduct></CreateProduct>}
            ></Route>
            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route index element={<div>Update products</div>}></Route>
              <Route
                path=":id"
                element={<div>Form to update Products</div>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default DwRoutes;
