import React, { useState } from 'react'
import { useSelector, useDispatch,   } from "react-redux"
import { isEmpty } from './Utils';
import { editProducts } from '../Actions/products.action';

const Boutique = () => {
  const products = useSelector((state) => state.productReducer)
  const [editToggle, setEditToggle] = useState(products.content)
  const [editContent, setEditContent] = useState(products.content);
  const dispatch = useDispatch();


  const handleEdit = (e) => {
    e.preventDefault();

    const postData = {
      title: editContent,
      description: editContent,
      categories: editContent,
      basePrice: editContent,
      salePrice: editContent,
      imageUrl: editContent
    }

    dispatch(editProducts(postData));
    setEditToggle(false)
  }



  return (
    <div className='shop'>
    {!isEmpty(products) && products.map((product, index) => {
      return (
        <div className='etiquette'>
      
          <div className='photoProduit'>
            <img src={product.imageUrl} alt={product.title} />
          </div>
          <p>{product.title}</p>
          <p>Prix : {product.basePrice}€</p>
          <p>Prix soldé : {product.salePrice}€</p>
          <p>{product.description}</p>
          <div className='btnContainer'>
            <button className='btn' onClick={() => setEditToggle(!editToggle)}>Modifier</button>
            <button className='btn'>Supprimer</button>
          </div>
          
        </div>
      )
    })}
  </div>
  )

};


export default Boutique

/**
 {editToggle ? (
          <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            autoFocus={true}
            defaultValue={product.imageUrl}
            onChange={(e) => setEditContent(e.target.value)}>
            </textarea>
            <input type="submit" value="Valider" />
        </form>) : 
        (
        <p>{products.content}</p>
        )}
 */