import { ListProductsContainer } from './components/ListProducts/ListProductsContainer';
import { products } from './state/products';
import { fetchProducts } from './state/products/actions';
import { ProductModel } from './models/ProductModel';
import * as selectProducts from './state/products/selectors';

export {
    ListProductsContainer as ListProductsFeature,
    products as productsReducer,
    fetchProducts,
    ProductModel,
    selectProducts
}