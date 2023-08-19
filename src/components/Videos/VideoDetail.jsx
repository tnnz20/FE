import { useParams } from 'react-router-dom';

export default function VideoDetail(props) {
    const { video, loading, error } = props.fetchVideo;
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {video && (
                <div className="w-[70%] relative " key={video._id}>
                    <iframe
                        src={video.urlVideo}
                        title="YouTube Video"
                        allow="accelerometer; clipboard-write; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        className="w-full aspect-video"></iframe>
                    <div className="mt-3 space-y-4">
                        <h2 className="font-semibold text-paragraph ">
                            {video.title}
                        </h2>
                        <div className="flex justify-between">
                            <h3 className="font-semibold text-paragraph">
                                {video.owner}
                            </h3>
                            <p className="text-gray-600 text-xs ">
                                {video.views} Views
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
