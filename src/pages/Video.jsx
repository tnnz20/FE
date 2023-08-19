import VideoDetail from '../components/Videos/VideoDetail';
import ProductList from '../components/Products';
import Comment from '../components/Comments';

import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import useVideo from '../hooks/useVideo';
import useProduct from '../hooks/useProduct';
import useComment from '../hooks/useComment';

export default function Video() {
    const BASE_URL = '/videos/video';
    const { id: videoId } = useParams();

    const fetchVideo = useVideo(BASE_URL, videoId);
    const fetchProducts = useProduct(BASE_URL, videoId);

    const fetchComments = useComment(BASE_URL, videoId);

    return (
        <div className="">
            <div className="h-screen">
                <div className="p-3 ml-2 my-1">
                    <Link to="/Videos">
                        <Button title="Back" />
                    </Link>
                </div>
                <div className="flex ml-6 px-6 ">
                    <VideoDetail fetchVideo={fetchVideo} />
                    <ProductList fetchProducts={fetchProducts} />
                </div>
            </div>
            <div className="ml-6 px-6 mt-6 h-screen">
                <Comment fetchComments={fetchComments} />
            </div>
        </div>
    );
}
