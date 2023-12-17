import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = ({product}) => {
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
           <img src={ product.image } alt='image'/>
           <img src={product.image} alt='image'/>
           <img src={product.image} alt='image'/>
           <img src={product.image} alt='image'/>
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='image'/>
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
            <img src={star_icon} alt='star' />
            <img src={star_icon} alt='star'/>
            <img src={star_icon} alt='star'/>
            <img src={star_icon} alt='star'/>
            <img src={star_dull_icon} alt='star_dull'/>
            <p>(122)</p>
        </div>  
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>
             ${product.old_price}
          </div>
          <div className='productdisplay-right-price-new'>
             ${product.new_price}
          </div>
        </div>
        <div className='productdisplay-right-discription'>
        Product description. This is a high-level overview of the product that usually sits beneath the product title and succinctly describes features and benefits. This section handles most of the “informative” heavy-lifting, telling customers exactly why they should invest in your product.
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-sizes'>
             <div>S</div>
             <div>M</div>
             <div>L</div>
             <div>XL</div>
             <div>XXL</div>
          </div>
          <div>
            <button onClick={() => {addToCart(product.id)}}>Add To Cart</button>
            <p className='productdisplay-right-category'><span>Category :</span> women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
