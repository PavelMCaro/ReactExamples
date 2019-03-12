import * as React from 'react';
import { ListProducts } from './ListProducts';
import { connect } from 'react-redux';
import { fetchProducts, selectProducts, ProductModel} from '@app/src/view/products';

interface Props {
    products?: ProductModel[];
    addProduct?: Function;
    fetchProducts: Function;
}

export const Container: React.FC<Props> = ({ products, fetchProducts }) => {

    React.useEffect(() => {
        fetchProducts()
    },[]);

    const onAddProducts = () => {

    }

    const props = {
        products: products,
        addProduct: onAddProducts
    }
    return <ListProducts {...props}/>
};

const mapStateToProps = state => ({
    products: selectProducts.getData(state)
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export const ListProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);