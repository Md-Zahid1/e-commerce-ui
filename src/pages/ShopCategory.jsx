import React, { useContext } from 'react'
import './css/ShopCategory.css'
import dropdown_icon from '../assets/dropdown_icon.png'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Navbar/items/Item'

const ShopCategory = ({banner, category}) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={banner} />
        <div className='shopcategory-indexShort'>
          <p>
            <span>SHOWING 1-12</span>Out Of 36
          </p>
        </div>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='dropdown' />
        </div>
        <div className='shopcategory-products'>
        {
          all_product.map((curPro, ind) => {
            if(category === curPro.category){
              return <Item key={ind} 
              id={curPro.id} 
              name={curPro.name} 
              image={curPro.image} 
              new_price={curPro.new_price} 
              old_price={curPro.old_price} />
            }else {
              return null;
            }
           
          })
        }
        </div>
        <div className='shopcategory-loadmore'>
           Explore More 
        </div>
    </div>
  )
}

export default ShopCategory
