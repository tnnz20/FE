import axiosInstance from '../lib/axios';
import { useState, useEffect } from 'react';

export default function useComment(url, videoId) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchComment() {
        try {
            const response = await axiosInstance.get(
                url + '/' + videoId + '/comments'
            );
            setComments(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchComment();
    }, []);

    return { comments, loading, error };
}
