import '../App.css';

function ProductList({ product, addToCart }) {
    return (
        <div classNameName='flex'>{
            product.map((productItem, productIndex) => {
                return (
                    <div style={{ width: '25%' }}>
                        <div classNameName='product_item'>
                            <img src={productItem.url} width={'60%'} alt='#' />
                            <p>{productItem.name} | {productItem.category}</p>
                            <p>{productItem.seller}</p>
                            <p> Rs. {productItem.price} only</p>
                            <button classNameName='btn-className-01'
                                onClick={() => addToCart(productItem)}>Add to Cart</button>
                        </div>
                    </div>
                )

            })
        }
        </div>
    )
}
export default ProductList;