import ProductList from './ProductList';

export default function Product(props) {
    const { products, loading, error } = props.fetchProducts;

    return (
        <div className="w-[28%] ml-4 border overflow-auto aspect-video rounded">
            <h2 className="p-2 font-bold text-paragraph">Product List</h2>
            {loading && (
                <p className="flex justify-center mt-20"> Loading...</p>
            )}
            {products.length === 0 && error && (
                <p className="flex justify-center mt-20">Product empty</p>
            )}
            {products.length > 0 &&
                products.map((item) => (
                    <ProductList {...item} key={item._id} />
                ))}
        </div>
    );
}
