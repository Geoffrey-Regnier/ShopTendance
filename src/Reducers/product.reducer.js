import { EDIT_PRODUCTS, GET_PRODUCTS, ADD_PRODUCTS } from "../Actions/products.action";




const initialState = {};


export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload;
        case ADD_PRODUCTS:
            return [action.payload, ...state];
        case EDIT_PRODUCTS:
            return state.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        title: action.payload.title,
                        description: action.payload.description,
                        categories: action.payload.categories,
                        basePrice: action.payload.basePrice,
                        salePrice: action.payload.salePrice,
                        imageUrl: action.payload.imageUrl,
                        id: action.payload.id
                    };
                  } else return product;
                });
          
        default : return state;
    }
}