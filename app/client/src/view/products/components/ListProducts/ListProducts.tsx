import * as React from 'react';
import { Product } from '@app/src/view/products/components/Product';
import { ProductModel } from '@app/src/view/products/models/ProductModel';
import {
    Wrapper
} from './styled';

interface Props {
    products?: ProductModel[];
    addProduct: Function;
}

export const ListProducts: React.FC<Props> = ({ products, addProduct }) => (
    <Wrapper>
        {products.map((obj, id) => <Product key={id} {...obj} addProduct={addProduct}/>)}
    </Wrapper>
)