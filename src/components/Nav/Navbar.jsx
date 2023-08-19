import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Search from './Search';
import Dropdown from './Dropdown';
import useVideos from '../../hooks/useVideos';

function Navbar() {
    const [search, setSearch] = useState('');

    return (
        <nav className="bg-white flex justify-between items-center text-sm px-8 py-0 w-full border-2">
            <Link to="/">
                <h1 className="justify-start cursor-pointer font-medium">
                    <span className="text-blue-700">Tokopei</span>Tube
                </h1>
            </Link>
            <Search search={search} setSearch={setSearch} />
            <ul className="flex space-x-2 items-center text-center justify-end ">
                <li>
                    <Dropdown />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
