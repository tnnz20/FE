import Jdenticon from 'react-jdenticon';
import useUser from '../../hooks/useUser';
import axiosInstance from '../../lib/axios';
import { useNavigate } from 'react-router-dom';
export default function Dropdown() {
    const { user } = useUser();
    console.log('🚀 ~ file: Dropdown.jsx:7 ~ Dropdown ~ user:', user);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post('/users');

            if (response.status === 200) {
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="dropdown group relative z-[999] ">
            <button className="link w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 ">
                <Jdenticon value="example" />
            </button>
            <div className="menu absolute right-0 top-[calc(100%+.25rem)] opacity-0 transition-opacity ease-in-out group-hover:opacity-100">
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <div className="px-4 py-3 text-sm text-gray-900">
                        <div>{user.username}</div>
                        <div className="font-medium text-xs">{user.email}</div>
                    </div>
                    <div className="flex justify-center w-full">
                        <button
                            onClick={handleLogout}
                            className="w-full rounded block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
