import React, {useContext} from 'react'
import {ShopContext} from "../context/ShopContext"
import { useParams } from 'react-router-dom'
import BreadCrums from '../components/BreadCrums/BreadCrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {Id} = useParams();
  const product = all_product.find((e) => e.id === Number(Id));
  console.log('Id', Id);
  console.log('productssss', product);
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
