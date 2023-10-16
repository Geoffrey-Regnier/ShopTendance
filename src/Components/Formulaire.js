import React, { useRef } from 'react'
import { addProducts, getProducts } from '../Actions/products.action'
import { useDispatch } from 'react-redux';

const Formulaire = () => {
  const form = useRef()
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    console.log(form)

  const postData = {
      title: form.current.title.value,
      description: form.current.description.value,
      categories: form.current.categories.value,
      basePrice: form.current.basePrice.value,
      salePrice: form.current.salePrice.value,
      imageUrl: form.current.imageUrl.value
    }
    
    await dispatch(addProducts(postData));
    dispatch(getProducts());
    form.current.reset();


  }
  return (
    <div>
      <form ref={form} onSubmit={(e) => handleForm(e)}>
        <div>
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="textarea" name="description" id="description" />
        </div>
        <div>
          <label htmlFor="categories">Categories</label>
          <input type="text" name="categories" id="categories" />
        </div>
        <div>
          <label htmlFor="basePrice">Prix de base</label>
          <input type="text" name="basePrice" id="basePrice" />
        </div>
        <div>
          <label htmlFor="salePrice">Prix soldé</label>
          <input type="text" name="salePrice" id="salePrice" />
        </div>
        <div>
          <label htmlFor="imageUrl">Image</label>
          <input type="text" name="imageUrl" id="imageUrl" />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
  
};


export default Formulaire

/** le titre, description, categories, prix de base, prix soldé et image */