import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productsReducer } from '@app/src/view/products';
import thunk from 'redux-thunk'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            products: productsReducer
        }),
        (window as any).__PRELOADED_STATE__,
        composeEnhancers(
            applyMiddleware(
                thunk,
            )
        )
    );
    return store;
}
