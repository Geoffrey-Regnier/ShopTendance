import React from 'react'
import { isEmpty } from './Utils';
import { useSelector } from "react-redux"

const Boutique = () => {
  const products = useSelector((state) => state.productReducer)

  return (
    <div className='shop'>
    {!isEmpty(products) && products.map((product) => {
      return (
        <div className='etiquette'>
          <div className='photoProduit'>
            <img src={product.imageUrl} alt={product.title} />
          </div>
          <p>{product.title}</p>
          <p>Prix : {product.basePrice}€</p>
          <p>Prix soldé : {product.salePrice}€</p>
          <p>{product.description}</p>
        </div>
      )
    })}
  </div>
  )
  


};


export default Boutique

