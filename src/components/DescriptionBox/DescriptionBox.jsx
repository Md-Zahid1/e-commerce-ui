import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='DescriptionBox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>Product description. This is a high-level overview of the product that usually sits beneath the product title and succinctly describes features and benefits. This section handles most of the “informative” heavy-lifting, telling customers exactly why they should invest in your product.</p>
        <p>Additional product details. This section provides more information to describe other product attributes that audiences want to know, such as item size, color options, availability, and more.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
