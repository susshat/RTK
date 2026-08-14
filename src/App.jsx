import React from 'react'
import DwNavLink from './Component/DwNavLink'
import DwRoutes from './Component/DwRoutes'
import CreateProduct from './Component/product/CreateProduct'
import CreateUser from './Component/user/CreateUser'
import CreateReview from './Component/Review/CreateReview'

const App = () => {
  return (
    <div>
      <DwNavLink></DwNavLink>
      <DwRoutes></DwRoutes>
      {/* <CreateProduct></CreateProduct>
      <CreateUser></CreateUser>
      <CreateReview></CreateReview> */}
    </div>
  )
}

export default App