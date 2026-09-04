import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CreateProduct from "./product/CreateProduct";
import ReadAllProduct from "./product/ReadAllProduct";
import ReadSingleProduct from "./product/ReadSingleProduct";
import UpdateProduct from "./product/UpdateProduct";

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
            <Route
              path=":id"
              element={<ReadSingleProduct></ReadSingleProduct>}
            ></Route>
            <Route index element={<ReadAllProduct></ReadAllProduct>}></Route>
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
                element={<UpdateProduct></UpdateProduct>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default DwRoutes;
