import axiosInstance from '../lib/axios';
import { useState, useEffect } from 'react';

export default function useVideo(url, videoId) {
    const [video, setVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchVideo() {
        try {
            const response = await axiosInstance.get(url + '/' + videoId);
            setVideo(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchVideo();
    }, []);

    return { video, loading, error };
}
