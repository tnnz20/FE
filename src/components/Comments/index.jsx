import { useParams } from 'react-router-dom';
import CommentList from './CommentList';
import { AiOutlineSend } from 'react-icons/ai';
import { useState } from 'react';
import axiosInstance from '../../lib/axios';

export default function Comment(props) {
    const { comments, loading, error } = props.fetchComments;
    const [comment, setComment] = useState('');

    const { id } = useParams();

    const url = '/videos/video/' + id + '/comments';

    const handleComment = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post(url, { comment });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="">
            <h2 className="p-2 font-bold text-paragraph">
                {comments.length} Comments
            </h2>
            <form onSubmit={handleComment}>
                <div className="flex space-x-2 gap-1">
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-[65%] ml-2 block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-stroke "
                    />
                    <button className=" mt-2 flex items-center gap-2 text-sm font-bold border px-4 rounded hover:border-0 ease-in-out duration-150">
                        <AiOutlineSend
                            size={20}
                            type="submit"
                            className=" hover:text-blue-500 ease-in-out duration-150"
                        />
                    </button>
                </div>
            </form>

            <div className="w-[65%] space-y-5">
                {loading && <p className="ml-2 mt-5"> Loading...</p>}
                {comments.length === 0 && error && (
                    <p className="ml-2 mt-5">Comment still empty...</p>
                )}
                {comments.length > 0 &&
                    comments.map((item) => (
                        <CommentList {...item} key={item._id} />
                    ))}
            </div>
        </div>
    );
}
