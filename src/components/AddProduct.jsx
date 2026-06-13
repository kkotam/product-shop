import { useState } from "react";

const AddProduct = () => {
    const { formData, setFormData } = useState({
        name: '',
        price: ''
    })

    //입력값 변경
    const handleChange = (e) => {
        const { name, value } = e.target;
        //변경된 값만 업데이트
        setFormData({...formData, [name]: value})
    }

    //폼전송 핸들러
    const handleSubmit = (e) => {
        e.prevantDefault(); //기본동작 막아줌

        if(!formData.name.trim() | !formData.price.trim()){
            alert("모든 필드를 입력하세요!")
            return;
        }

        //가격필드 검증
        if(isNull(formData.price) | formData.price < 0){
            alert("가격은 0원 이상이어야합니다 ");
            return;
        }

        console.log('추가된상품', formData );
        alert("상품이 등록되었습니다")
    }

    return(
        <div>
            <h2>상품등록</h2>
            <form className="add-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    placeholder="상품명을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input
                    type="number"
                    id="price"
                    name="price"
                    onChange={handleChange}
                    placeholder="가격을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="price">설명</label>
                    <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={handleChange}
                    placeholder="설명을 입력하세요"
                    />
                </div>
                
                <div>
                    <button type="submit">등록</button>
                </div>                
            </form>
    </div>
    )


}



export default AddProduct;