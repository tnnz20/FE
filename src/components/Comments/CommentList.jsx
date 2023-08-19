import Jdenticon from 'react-jdenticon';

export default function CommentList(props) {
    return (
        <div className="m-4 flex space-x-2">
            <div className="w-7 h-7 rounded-full sm:w-8 sm:h-8">
                <Jdenticon value={props.userId.username} />
            </div>

            <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                    <h3 className="text-paragraph text-base font-semibold">
                        {props.userId.username}
                    </h3>
                    <p className="text-[0.5rem] text-gray-400">Seconds</p>
                </div>
                <p className="text-sm text-justify mt-1 leading-snug md:leading-normal">
                    {props.comment}
                </p>
            </div>
        </div>
    );
}
