import React, { useState } from 'react'
import './trending.css'
import { trending } from '../../Data'
import Home from '../Homes/Home'
const Trending = () => {
    const [items,serItems]=useState(trending)
  return (
        <>

         <section className="trending">
            <Home items={items}></Home>
         </section>
         </>
  )
}

export default Trending