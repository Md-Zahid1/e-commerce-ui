import React from 'react'
import "./RelatedProducts.css"
import data_product from '../../assets/data'
import Item from '../Navbar/items/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>RelatedProducts</h1>
      <hr/>
      <div className='relatedproducts-item'>
        {data_product.map((item, ind) => {
             return <Item key={ind} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
