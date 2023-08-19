import { useNavigate, useSearchParams } from 'react-router-dom';
// import VideoList from '../components/Videos/';
import useVideos from '../hooks/useVideos';
import VideoCard from '../components/Videos/VideoCard';
import Search from '../components/Nav/Search';
import Button from '../components/Button';

export default function SearchVideo() {
    const [search] = useSearchParams();
    const navigate = useNavigate();
    const { videos, loading, error } = useVideos(
        '/videos/' + '?search=' + search.get('search')
    );
    return (
        <div className="h-screen px-10 py-2 w-full">
            <div className="flex">
                <Button title={'Home'} onClick={() => navigate('/videos/')} />
                <Search />
            </div>

            <div className="grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {loading && <p>Loading...</p>}
                {videos.length == 0 && error && <p>Not found</p>}
                {videos.map((video) => (
                    <VideoCard {...video} key={video._id} />
                ))}
            </div>
        </div>
    );
}
