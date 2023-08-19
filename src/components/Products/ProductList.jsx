import priceFormat from '../../utils/priceFormater.js';

export default function ProductList(props) {
    return (
        <div key={props.id}>
            <div className="flex bg-cardBg border rounded m-3">
                <img
                    src={props.urlThumb}
                    alt="Product ID"
                    className="sm:w-20 md:w-30 lg:w-40 h-auto rounded"
                />
                <div className="max-w-sm p-5 rounded-lg shadow overflow-hidden relative">
                    <a href="#">
                        <h5 className="mb-2 text-sm truncate font-bold tracking-tight text-paragraph">
                            {props.title}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                        {priceFormat(props.price)}
                    </p>
                    <a
                        href="#"
                        className="absolute bottom-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                        More details
                        <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
