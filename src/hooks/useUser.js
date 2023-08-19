import axiosInstance from '../lib/axios';
import { useState, useEffect } from 'react';

export default function useUser() {
    const [user, setUser] = useState('');
    async function getUser() {
        try {
            const response = await axiosInstance.get('/users/');
            setUser(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser();
    }, []);
    console.log(user);
    return { user };
}
