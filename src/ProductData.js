import { Api } from "./utils/Api";
export const ProductData = Api;



export const getProductData = (id) => {
    let product = ProductData.find(el => el._id === id);
    return product
}