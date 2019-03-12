import * as actionTypes from './actionTypes';
import { ProductModel } from '@app/src/view/products';

interface State {
  data: ProductModel[];
  isFetching: boolean;
  error: boolean;
  errorMessage: string;
}

const initialState: State = {
  data: [],
  isFetching: false,
  error: false,
  errorMessage: ''
}

export const products = (state: State = initialState, action): State => {
  switch(action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error
      }
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: action.data
      }
    default:
      return state;
  }
}