import { axiosAjax } from '@app/src/config/axios';
import { ProductModel } from '@app/src/view/products';

export const serviceProducts= {
    async get(): Promise<ProductModel[]> {
        try {
            const { data } = await axiosAjax.get('http://localhost:3005/products');
            if (data.error) {
                throw new Error();
            }
            return data.data;
        } catch (e) {
            throw new Error(e.message);
        }
    }
}