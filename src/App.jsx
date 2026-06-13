import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import ProductList from './components/ProductList'
import SignIn from './components/SignIn'
import Header from './layout/Header'
import ProductInfo from './components/ProductInfo'
import AddProduct from './components/AddProduct'

function App() {
  //로그인 상태관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //로그인한 사용자 아이디 관리
  const [ username, setUsername ] = useState('');

  //로그인 핸들러
  const handleLogin = (username) => {
    setIsLoggedIn(true); //로그인 성공 시 상태 업데이트
    setUsername(username); //로그인한 사용자아이디 저장 
  }

  //로그인 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <>
      <section className="app">
        {/* <h2>상품관리</h2> */}
        <BrowserRouter>
          {/* 헤더영역 */}
          <Header 
            isLoggedIn = {isLoggedIn}
            username= {username}
            onLogout= {handleLogout}
          />

          {/* 본문영역 */}
          <div>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/products' element={<ProductList />}></Route>
              <Route path='/products/:id' element={<ProductInfo />}></Route>
              <Route path='/add-product' element={<AddProduct />}></Route>
              <Route path='/sign-in' element={<SignIn onLogin={handleLogin}/>}></Route>
            </Routes>

          </div>
        </BrowserRouter>

      </section>

    </>
  )
}

export default App
