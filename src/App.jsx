import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Videos from './pages/Videos';
import Video from './pages/Video';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFoundPages from './pages/404';
import SearchVideo from './pages/SearchVideo';

function App() {
    return (
        <div className="bg-primary h-screen">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/videos/" element={<Videos />} />
                    <Route path="/videos/video">
                        <Route path=":id" element={<Video />} />
                    </Route>
                    <Route path="/search" element={<SearchVideo />} />
                    <Route path="*" element={<NotFoundPages />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
