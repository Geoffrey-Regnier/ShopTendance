import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from './Utils';
import { editProducts } from '../Actions/products.action';

const Boutique = () => {
	const products = useSelector((state) => state.productReducer);
	const dispatch = useDispatch();

	const [editProduct, setEditProduct] = useState(null);
	const [editedFields, setEditedFields] = useState({
		title: '',
		description: '',
		categories: '',
		basePrice: '',
		salePrice: '',
		imageUrl: '',
	});

	const startEditing = (product) => {
		setEditProduct(product);
		setEditedFields({
			title: product.title,
			description: product.description,
			categories: product.categories,
			basePrice: product.basePrice,
			salePrice: product.salePrice,
			imageUrl: product.imageUrl,
		});
	};

	const saveEditedProduct = () => {
		if (editProduct) {
			dispatch(editProducts(editProduct, editedFields));
			setEditProduct(null);
		}
	};

	return (
		<div className='shop'>
			{isEmpty(products) ? (
				<p>No products available.</p>
			) : (
				products.map((product) => (
					<div className='etiquette' key={product.id}>
						<div className='photoProduit'>
							<img src={product.imageUrl} alt={product.title} />
						</div>
						<p>{product.title}</p>
						<p>Prix : {product.basePrice}€</p>
						<p>Prix soldé : {product.salePrice}€</p>
						<p>{product.description}</p>
						<div className='btnContainer'>
							<button className='btn' onClick={() => startEditing(product)}>
								Modifier
							</button>
							<button className='btn'>Supprimer</button>
						</div>
						{editProduct && editProduct.id === product.id && (
							<div className='formModif'>
                <div className='formEtiqu'>
                  <p>Nouveau lien :</p>
                  <textarea
                    value={editedFields.imageUrl}
                    onChange={(e) =>
                      setEditedFields({
                        ...editedFields,
                        imageUrl: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className='formEtiqu'>
                  <p>Nouveau titre :</p>
                  <input
                    type="text"
                    value={editedFields.title}
                    onChange={(e) =>
                      setEditedFields({
                        ...editedFields,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='formEtiqu'>
                  <p>Nouvelle description :</p>
                  <textarea
                    value={editedFields.description}
                    onChange={(e) =>
                      setEditedFields({
                        ...editedFields,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className='formEtiqu'>
                  <p>Nouvelle(s) catégorie(s) :</p>
                  <input
                    type="text"
                    value={editedFields.categories}
                    onChange={(e) =>
                      setEditedFields({
                        ...editedFields,
                        categories: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='formEtiqu'>
                  <p>Nouveau prix :</p>
                  <input
                    type="text"
                    value={editedFields.basePrice}
                    onChange={(e) =>
                      setEditedFields({
                        ...editedFields,
                        basePrice: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='formEtiqu'>
                  <p>Nouveau prix soldé :</p>
                  <input
                    type="text"
                    value={editedFields.salePrice}
                    onChange={(e) =>
                      setEditedFields({
                        ...editedFields,
                        salePrice: e.target.value,
                      })
                    }
                  /> 
                </div>              
								<button onClick={saveEditedProduct}>Valider</button>
							</div>
						)}
					</div>
				))
			)}
		</div>
	);
};

export default Boutique;
