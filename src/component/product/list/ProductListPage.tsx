import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProductItem } from '../types';

const ProductListPage = () => {
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState<IProductItem[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products?categoryId=${id}`)
            .then(resp => {
                setProducts(resp.data);
            });
    }, [id]);

    const handleDelete = (productId: number) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(() => {
                setProducts(products.filter(product => product.id !== productId));
            })
            .catch(error => {
                console.error('There was an error deleting the product!', error);
            });
    };

    return (
        <>
            <h1 className="text-center text-4xl font-bold">Список продуктів</h1>
            <Link to={`/categories/${id}/create-product`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Додати продукт
                </button>
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        {product.product_images.length > 0 && (
                            <img className="w-full"
                                 src={`http://localhost:8000/upload/300_${product.product_images[0].name}`}
                                 alt={product.name}
                            />
                        )}
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center">{product.name}</div>
                            <p className="text-gray-700 text-base">{product.description}</p>
                            <p className="text-gray-700 text-base">{product.price} грн</p>
                            <p className="text-gray-700 text-base">Кількість: {product.quantity}</p>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleDelete(product.id)}
                            >
                                Видалити
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductListPage;

