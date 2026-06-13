import { products } from "../datas/products"
import { Link } from "react-router-dom"

const ProductList = () => {

    return(
        <div>
            <h2>상품리스트</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                        {/* <h3>{product.name}</h3> */}
                        <p>가격: {product.price}</p>
                        <p>상세보기: {product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductList;