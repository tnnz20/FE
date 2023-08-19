import axiosInstance from '../lib/axios';
import { useState, useEffect } from 'react';

export default function useVideos(url) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchVideos() {
        try {
            const response = await axiosInstance.get(url);
            setVideos(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchVideos();
    }, [url]);

    return { videos, loading, error };
}
