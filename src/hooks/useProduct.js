import axiosInstance from '../lib/axios';
import { useState, useEffect } from 'react';

export default function useProduct(url, videoId) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchProduct() {
        try {
            const response = await axiosInstance.get(
                url + '/' + videoId + '/products'
            );
            setProducts(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return { products, loading, error };
}
