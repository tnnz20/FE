import { Link } from 'react-router-dom';
export default function VideoCard(props) {
    return (
        <div
            className="my-8 rounded shadow-lg shadow-gray-200  bg-white  duration-300 hover:-translate-y-1"
            key={props._id}>
            <Link
                to={'/videos/video/' + props._id}
                className="hover:opacity-75">
                <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                    <img
                        className="rounded-t-lg"
                        src={props.urlThumb}
                        alt={`Thumbnail ${props._id}`}
                    />
                    <div className="py-2 px-4 rounded-lg bg-white">
                        <h1 className="text-gray-700 font-bold text-base md:text-sm hover:text-gray-900 hover:cursor-pointer">
                            {props.title}
                        </h1>
                        <p className="text-gray-500 tracking-wide font-semibold text-sm">
                            {props.owner}
                        </p>
                        <p className="text-gray-500 tracking-wide font-semibold text-xs my-1">
                            {props.views} views . 1 month ago
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
