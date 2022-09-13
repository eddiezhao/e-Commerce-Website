import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client'

const Home = ( {products, banner} ) => {
  return (
    <div>
      <HeroBanner heroBanner={banner.length && banner[0]}/>
      <div className="products-heading">
        <h2>
          Best Selling Products
        </h2>
        <p>
          Banner
        </p>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={banner && banner[0]}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const prodquery = '*[_type == "product"]'
  const products = await client.fetch(prodquery);
  const banquery = '*[_type == "banner"]'
  const banner = await client.fetch(banquery);
  return { props: {products, banner}}
}

export default Home
