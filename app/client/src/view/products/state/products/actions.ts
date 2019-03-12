import * as actionTypes from './actionTypes';
import { serviceProducts } from './services';
import { ProductModel } from '@app/src/view/products';
    
const fetchProductsRequest = () => ({
    type: actionTypes.FETCH_PRODUCTS_REQUEST
});

const fetchProductsSuccess = (data : ProductModel[]) => ({
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    data
});

const fetchProductsFailure = (error : string) => ({
    type: actionTypes.FETCH_PRODUCTS_FAILURE,
    error
});

export const fetchProducts = (): Function => {
    return async dispatch => {
        dispatch(fetchProductsRequest());
        try {
            const data = await serviceProducts.get();
            dispatch(fetchProductsSuccess(data));
        } catch (e) {
            dispatch(fetchProductsFailure(e.message));
        }
    }
}