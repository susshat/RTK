import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ReadAllProduct from './product/ReadAllProduct'
import CreateProduct from './product/CreateProduct'
import ReadSingleProduct from './product/ReadSingleProduct'
import UpdateProduct from './product/UpdateProduct'
import ReadAllUser from './user/ReadAllUser'
import CreateUser from './user/CreateUser'
import ReadSingleUser from './user/ReadSingleUser'
import UpdateUser from './user/UpdateUser'
import ReadAllReview from './Review/ReadAllReview'
import CreateReview from './Review/CreateReview'
import ReadSingleReview from './Review/ReadSingleReview'
import UpdateReview from './Review/UpdateReview'

const DwRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="product">
                <Route index element={<ReadAllProduct />}></Route>
                <Route path="create" element={<CreateProduct />}></Route>
                <Route path=":id" element={<ReadSingleProduct />}></Route>
                <Route path=":id/update" element={<UpdateProduct />}></Route>
            </Route>
            <Route path="user">
                 <Route index element={<ReadAllUser />}></Route>
                <Route path="create" element={<CreateUser />}></Route>
                <Route path=":id" element={<ReadSingleUser />}></Route>
                <Route path=":id/update" element={<UpdateUser />}></Route>
            </Route>
            <Route path="review">
                 <Route index element={<ReadAllReview />}></Route>
                <Route path="create" element={<CreateReview />}></Route>
                <Route path=":id" element={<ReadSingleReview />}></Route>
                <Route path=":id/update" element={<UpdateReview />}></Route>
            </Route>
        </Routes>
    </div>
  )
}

export default DwRoutes