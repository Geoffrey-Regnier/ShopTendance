import { GET_PRODUCTS, ADD_PRODUCTS, DELETE_PRODUCTS } from "../Actions/products.action";

const initialState = {};


export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload;
        case ADD_PRODUCTS:
            return [action.payload, ...state];
        case DELETE_PRODUCTS:
            return state.filter((product) => product.id !== action.payload);
        default : return state;
    }
}