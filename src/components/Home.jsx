import React, { useState, useEffect } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../firbese';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import LikedProducts from './LikedProducts';
import { FaRegHeart } from "react-icons/fa";
import kdworld from '../assets/images/detskiy-mir-36-1x.png'
import houses from '../assets/images/nedvizhimost-1-1x.png'
import transport from '../assets/images/transport-3-1x.png'
import workimg from '../assets/images/rabota-6-1x.png'
import animalimg from '../assets/images/zhivotnye-35-1x.png'
import furnitureimg from '../assets/images/dom-i-sad-899-1x.png'
import elecItemsimg from '../assets/images/elektronika-37-1x.png';
import servicesimg from '../assets/images/uslugi-7-1x.png'
import fashionimg from '../assets/images/moda-i-stil-891-1x.png'
import sportitemsimg from '../assets/images/hobbi-otdyh-i-sport-903-1x.png'
import discountimg from '../assets/images/otdam-darom-1151-1x.png'
import exchangeimg from '../assets/images/obmen-barter-1153-1x.png'
import { v4 } from 'uuid';
export const Home = () => {
    const [defProducts, setdefProducts] = useState([])
    const dbValue1 = collection(db, 'defaultProducts')
    const shuffledArray = shuffleArray(defProducts);
    const sliceDefProducts= shuffledArray.slice(0,12)
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            ),
        },
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
    const [likedProducts, setLikedProducts] = useState(() => {
        const storedLikedProducts = localStorage.getItem('likedProducts');
        return storedLikedProducts ? JSON.parse(storedLikedProducts) : [];
    });
    const addToLikedProducts = (product) => {
        setLikedProducts([...likedProducts, product]);
    };

    const removeFromLikedProducts = (index) => {
        const updatedLikedProducts = [...likedProducts];
        updatedLikedProducts.splice(index, 1);
        setLikedProducts(updatedLikedProducts);
    };
    
    useEffect(() => {
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    }, [likedProducts]);

    useEffect(() => {
        const getdefProducts = async () => {
            const dbVal1 = await getDocs(dbValue1)
            setdefProducts(dbVal1.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getdefProducts()
    }, [])
    return (
        <div className='bg-[#f2f4f5]'>
            <div className='pb-[30px] pt-[1px]'>
                <div className="search-input text-center mt-[60px]">
                    <div class="input-group mb-3 m-auto max-w-[1200px]">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" className='w-[1100px] rounded-lg h-[60px] border-black box-border pl-[20px]' />
                        <Link to='search' className='btn btn-outline-secondary'><button class="btn" type="button" id="button-addon2">Search</button></Link>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <section className='max-w-[1250px] m-auto pb-[80px]'>
                    <h1 className='text-center pt-[30px] font-[700]'>Products type</h1>
                    <div className="catagories-wrapper flex gap-[18px] flex-wrap  catagory  mt-[55px]">
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={kdworld} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#ffc232]' />
                            <Link to='kidsworld' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Kids World</Link>
                        </div>
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={houses} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#3a77ff]' />
                            <Link to='houses' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Houses</Link>
                        </div>
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={transport} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#23e5db]' />
                            <Link to='transport' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Transport</Link>
                        </div>
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={workimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] mb-[10px] bg-[#ff5636]' />
                            <Link to='works' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Works</Link>
                        </div>
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={animalimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#fff6d9]' />
                            <Link to='animals' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Animals</Link>
                        </div>
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={furnitureimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#3a77ff]' />
                            <Link to='furnitures' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Furnitures</Link>
                        </div>
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={elecItemsimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#23e5db]' />
                            <Link to='electricalitems' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Electrical items</Link>
                        </div>
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={servicesimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#ff5636]' />
                            <Link to='services' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Services</Link>
                        </div>                        
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={fashionimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#ffc232]' />
                            <Link to='fashion' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Fashion</Link>
                        </div>
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={sportitemsimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#3a77ff]' />
                            <Link to='sportitems' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Sport items</Link>
                        </div>
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={discountimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#23e5db]' />
                            <Link to='discount' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Discount</Link>
                        </div>
                        <div key={v4} className='w-[120px] text-center'>
                            <img src={exchangeimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#ff5636]' />
                            <Link to='exchange' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Exchange</Link>
                        </div>
                    </div>
                </section>
            </div>
            <>
            </>

            <div>
                <h1 className='text-center font-[700] pt-[55px]'>Top Products</h1>
                <div className="defaultProductsWrapper defaultProducts max-w-[1250px] m-auto flex gap-[10px] justify-center flex-wrap pt-[30px] pb-[80px]">
                    {sliceDefProducts.map((defProduct) => {
                        return (
                            <>
                                <div className='bg-white w-[280px] rounded-md leading-none'>
                                    <img src={defProduct.imgUrl} alt="" className='w-[100%] max-w-[280px] h-[250px] rounded-t-md' />
                                    <p className='text-[18px] font-medium px-[15px] mt-[10px]'>{defProduct.name}</p>
                                    <p className='text-[#002f34] font-semibold text-[18px] px-[15px]'>{defProduct.price}$</p>
                                    <p className='text-[14px] font-normal px-[15px]'>{defProduct.region}</p>
                                    <p className='text-[14px] font-normal px-[15px]'>17/02/2024  10:19</p>
                                    <FaRegHeart onClick={() => addToLikedProducts(defProduct, defProduct.id)} className='float-right mt-[10px] text-[24px] mr-[20px] mb-[10px] text-black'/>
                                    <Link to={`/productdetail/${defProduct.id}`}><button className='btn btn-primary ml-[15px]'>View</button></Link>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='d-none'>
                <LikedProducts
                    likedProducts={likedProducts}
                    onUnlike={removeFromLikedProducts}
                />
            </div>
        </div>
    )
}
export default Home