import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/images/olx-logo-20F1656D13-seeklogo.com-removebg-preview.png'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { FiMessageSquare } from "react-icons/fi";
import LanguageSelector  from './components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, message } from 'antd';
import Home from './components/Home';
import { useEffect } from 'react';
import { Signup } from './components/Signup';
import { SignIn } from './components/Signin';
import Profile from './components/Profile';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../src/context/AuthContext';
import { auth } from '../src/firbese';
import ProductDetails from './components/ProductDetails';
import LikedProducts from './components/LikedProducts';
import Works from './components/catagories/Works';
import KidsWorld from './components/catagories/KidsWorld';
import Animals from './components/catagories/Animals';
import Discount from './components/catagories/Discount';
import ElecItems from './components/catagories/ElecItems';
import Exchange from './components/catagories/Exchange';
import Fashion from './components/catagories/Fashion';
import Furnitures from './components/catagories/Furnitures';
import Houses from './components/catagories/Houses';
import Services from './components/catagories/Services';
import SportItems from './components/catagories/SportItems';
import Transports from './components/catagories/Transports';
import Search from './components/Search';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Breadcrumbs from './components/Breadcrumbs';
function App() {
  const {t} = useTranslation()
  useEffect(() => {
    Aos.init()
  })
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
      }).catch((err) => {
        console.log(err);
      })
  }
  const items = [
    {
      key: '1',
      label: (
        <Link to='signup'>Sign Up</Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link to='signin'>Sign In</Link>
      ),
      disabled: false,
    },
    {
      key: '4',
      danger: true,
      label: (
        <button onClick={handleSignOut}>Log Out</button>
      )
    },
  ];
  const { currentUser } = useContext(AuthContext);
  const RequiredAuth = ({ children }) => {
    return currentUser ? children : navigate('signin');
  }
  return (
    <>
      <nav className='bg-[#002f34]' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800">
        <div className="nav-wrapper flex items-center max-w-[1250px] m-auto justify-between">
          <div className="nav-logo w-[80px]">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-right-side flex gap-[50px]">
            <div className='flex gap-[50px] for-d-none'>
              <div className="nav-message flex text-white gap-[10px] cursor-pointer mt-[7px]">
                <FiMessageSquare className='text-[25px] mt-[2px]' />
                <p className='text-[18px] font-[700]'>{t('message')}</p>
              </div>
              <div className="nav-language flex gap-[15px] mt-[10px]">
                <LanguageSelector />
              </div>
            </div>
            <div className="nav-user-like flex mt-[8px] gap-[45px] cursor-pointer">
              <Link to='/likedproducts2'>
                <FaRegHeart className='text-[25px] text-white' />
              </Link>
              <Link to='profile'>
                <div className="profile flex gap-[15px]">
                  <FaUser className='text-[25px] text-[white]' />
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space className='text-white text-[18px] font-[700] cursor-pointer'>
                        {t('profile')}
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </Link>
            </div>
            <div className="nav-button">
              <Link to='profile'><button className='bg-[white] py-[10px] px-[22px] rounded-[8px] text-[#002f34] font-[700] text-[18px]'>
                {t('giveAn')}!
              </button></Link>
            </div>
          </div>
        </div>
      </nav>
      <Breadcrumbs />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='productdetail/:productId' element={<ProductDetails />} />
          <Route path='profile' element={<RequiredAuth> <Profile /></RequiredAuth>} />
          <Route path='likedproducts2' element={<RequiredAuth><LikedProducts /></RequiredAuth>}></Route>
          <Route path='works' element={<RequiredAuth><Works /></RequiredAuth>}></Route>
          <Route path='kidsworld' element={<RequiredAuth><KidsWorld /></RequiredAuth>}></Route>
          <Route path='houses' element={<RequiredAuth><Houses /></RequiredAuth>}></Route>
          <Route path='animals' element={<RequiredAuth><Animals /></RequiredAuth>}></Route>
          <Route path='exchange' element={<RequiredAuth><Exchange /></RequiredAuth>}></Route>
          <Route path='fashion' element={<RequiredAuth><Fashion /></RequiredAuth>}></Route>
          <Route path='furnitures' element={<RequiredAuth><Furnitures /></RequiredAuth>}></Route>
          <Route path='services' element={<RequiredAuth><Services /></RequiredAuth>}></Route>
          <Route path='sportitems' element={<RequiredAuth><SportItems /></RequiredAuth>}></Route>
          <Route path='transport' element={<RequiredAuth><Transports /></RequiredAuth>}></Route>
          <Route path='electricalitems' element={<RequiredAuth><ElecItems /></RequiredAuth>}></Route>
          <Route path='discount' element={<RequiredAuth><Discount /></RequiredAuth>}></Route>
          <Route path='search' element={<RequiredAuth><Search /></RequiredAuth>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App

