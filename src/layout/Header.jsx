import { Link, useNavigate } from "react-router-dom"

const Header = ({isLoggedIn, username, onLogout }) => {
    const navigate = useNavigate();

    return(
        <div className='header'>
            <Link to='/'>Home</Link>            
            <Link to='/products'>상품목록</Link>
            <Link to='/add-product'>상품등록</Link>
            {/* 삼항연산자  */}
            {isLoggedIn ? (
                <div>
                    <span>{username}님</span>
                    <button
                        type='button'
                        onClick={()=> {onLogout(); navigate('/');}}
                    >로그아웃</button>
                </div>
            ) : (
                <Link to='/sign-in'>로그인</Link>
            )}

        </div>
    )
}

export default Header;