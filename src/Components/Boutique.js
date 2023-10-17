import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from './Utils';
import { deleteProducts } from '../Actions/products.action';
import { useDispatch } from 'react-redux';



const Boutique = ({product}) => {
	const products = useSelector((state) => state.productReducer);
	const dispatch = useDispatch();

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
						<p>Catégorie : {product.categories}</p>
						<p>{product.description}</p>
						<div className='btnContainer'>
							<button className='btn' onClick={() => dispatch(deleteProducts(product.id))}>Supprimer</button>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default Boutique;






