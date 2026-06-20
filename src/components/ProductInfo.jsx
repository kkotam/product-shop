import { useNavigate, useParams } from "react-router-dom";
import { products } from "../datas/products";

const ProductInfo = () => {
    //
    // const params = useParams();
    const {id} = useParams(); //반환된 객채구조분해 할당
    const navigate = useNavigate();

    //productList에서 id와 일치하는 상품찾기 - find() 사용
    // 외부에 입력된  id가 숫자이므로 형변환 필수
    const product = products.find(product => product.id == parseInt(id))

    //페이지이동 핸들러
    const doClick = () => {
        navigate("/products");
    }

    return(
        <div className="product-detail">
            {/* <h3>상품id: {params.id}</h3> */}
            <h3>상품id: {id}</h3>
            <h3>이름: {product.name}</h3>
            <h3>가격: {product.price}</h3>
            <h3>상세: {product.description}</h3>
            <div className="btn-list">
                <button onClick={doClick}>목록보기</button>
            </div>
        </div>

    )
}

export default ProductInfo;