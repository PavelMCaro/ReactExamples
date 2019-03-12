import * as React from 'react';
import { HeaderFeature } from '@app/src/view/header';
import { ListProductsFeature } from '@app/src/view/products';
import {
    Wrapper
} from './styled';

export const App = () => (
    <React.Fragment>
        <HeaderFeature />
        <Wrapper>
            <ListProductsFeature />
        </Wrapper>
    </React.Fragment>
);