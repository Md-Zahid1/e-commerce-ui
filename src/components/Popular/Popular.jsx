import React from 'react'
import "./Popular.css";
import data_product from '../../assets/data'
import Item from '../Navbar/items/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In womens</h1>
      <hr/>
      <div className='popular-item'>
         {data_product.map((curElem, ind) => {
            return (
                <Item key={ind} 
                id={curElem.id} 
                name={curElem.name} 
                image={curElem.image} 
                new_price={curElem.new_price} 
                old_price={curElem.old_price}/>
            )
         })}
      </div>
    </div>
  )
}

export default Popular
