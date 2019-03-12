export const getData = state => state.products.data || []; 
export const getFetchingState = state => state.products.isFetching;
export const getErrorState = state => state.products.error;