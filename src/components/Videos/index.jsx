import VideoCard from './VideoCard.jsx';
import useVideos from '../../hooks/useVideos.js';
import Search from '../Nav/Search.jsx';

export default function VideoList() {
    const { videos, loading, error } = useVideos('/videos/');

    return (
        <div className="h-screen px-10 py-2 w-full">
            <div className="grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {loading && <p>Loading...</p>}
                {error && <p>There was an error loading the videos</p>}
                {videos.map((video) => (
                    <VideoCard {...video} key={video._id} />
                ))}
            </div>
        </div>
    );
}
