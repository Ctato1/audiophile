import React from 'react';
import ProductCard from './ProductCard';
import SimilarCard from './SimilarCard';

const ProductsList = ({data,similar = false}) => {
  return (
    <>

    {!similar && data?.map((item,index)=>(
        <ProductCard item={item} length={index} key={item.id} />
    ))}
    {
      similar && data?.map((item,index)=>(
        <SimilarCard item={item}  key={item.id} />
    ))
    }
    </>
  )
} 

export default ProductsList;