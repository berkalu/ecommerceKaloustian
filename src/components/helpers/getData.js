
import { productList } from '../../utils/product.mock';

const getById = (id, array) => array.find((el) => el.id === id);

const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productList);
  }, 2000);
});


const getAllProducts = async (setState) => {
  try {
    const result = await getProducts;
    setState(result);
  } catch (error) {
    console.log(error);
    alert('No podemos mostrar los productos en este momento');
  }
};


const getProductById = async (id, setState) => {
  try {
    const result = await getProducts;
    setState(getById(id, result));
  } catch (error) {
    console.log(error);
  }
};

export { getAllProducts, getProductById };