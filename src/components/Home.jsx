import React, { useState, useEffect } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../firbese';
import { useTranslation } from 'react-i18next';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
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
import { v4 as uuidv4 } from 'uuid';
import Aos from 'aos';
import Footer from './Footer';
export const Home = () => {
    const { t } = useTranslation()
    useEffect(() => {
        Aos.init()
    })
    const [defProducts, setdefProducts] = useState([])
    const dbValue1 = collection(db, 'defaultProducts')
    const shuffledArray = shuffleArray(defProducts);
    const sliceDefProducts = shuffledArray.slice(0, 12)
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
    const addToLikedProducts = async (newDone, id, likedPr) => {
        const updateData = doc(db, 'defaultProducts', id)
            await updateDoc(updateData, {
                liked: !likedPr
            })
        if (!likedPr) {
            // If the product is not already liked, add it to the liked products
            setLikedProducts([...likedProducts, newDone]);
        } else {
            // If the product is already liked, remove it from the liked products
            const updatedLikedProducts = likedProducts.filter(product => product.id !== id);
            setLikedProducts(updatedLikedProducts);
        }
        const updatedProducts = defProducts.map(product => {
            if (product.id === id) {
                return { ...product, liked: !product.liked };
            }
            return product;
        });
        setdefProducts(updatedProducts)
    }
    const removeFromLikedProducts = async (index) => {
        const updateData = doc(db, 'defaultProducts', index)
        await updateDoc(updateData, {
            liked: !likedPr
        })
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
    const divIds = [
        uuidv4(),
        uuidv4(),
        uuidv4(),
        uuidv4(),
        uuidv4(),
        uuidv4(),
        uuidv4(),
        uuidv4(),
        uuidv4(),
        uuidv4(),
        uuidv4(),
        uuidv4()
      ];
    return (
        <>
            <div className='bg-[#f2f4f5]'>
                {/* {contextHolder} */}
                <div className='pb-[30px] pt-[1px] ' data-aos="zoom-in-down" data-aos-easing="linear"
                    data-aos-duration="800">
                    <div className="search-input text-center mt-[60px]">
                        <div class="input-group mb-3 m-auto max-w-[1200px]">
                            <input type="text" class="form-control" placeholder={t('placeholder')} aria-label="Recipient's username" aria-describedby="button-addon2" className='w-[1100px] rounded-lg h-[60px] border-black box-border pl-[20px]' />
                            <Link to='search' className='btn btn-outline-secondary'><button class="btn" type="button" id="button-addon2">{t('placeholder')}</button></Link>
                        </div>
                    </div>
                </div>
                <div className='bg-white' data-aos="zoom-in-up" data-aos-easing="linear"
                    data-aos-duration="800">
                    <section className='max-w-[1250px] m-auto pb-[80px]'>
                        <h1 className='text-center pt-[30px] font-[700]'>{t('productType')}</h1>
                        <div className="catagories-wrapper flex gap-[18px] flex-wrap  catagory  mt-[55px]">
                            <div key={divIds[uuidv4]} className='w-[120px] text-center '>
                                <img src={kdworld} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#ffc232]' />
                                <Link to='kidsworld' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('kw')}</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={houses} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#3a77ff]' />
                                <Link to='houses' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('house')}</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={transport} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#23e5db]' />
                                <Link to='transport' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>Transport</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={workimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] mb-[10px] bg-[#ff5636]' />
                                <Link to='works' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('work')}</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={animalimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#fff6d9]' />
                                <Link to='animals' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('animal')}</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={furnitureimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#3a77ff]' />
                                <Link to='furnitures' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('furniture')}</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={elecItemsimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#23e5db]' />
                                <Link to='electricalitems' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('elecItems')}</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={servicesimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#ff5636]' />
                                <Link to='services' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('services')}</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={fashionimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#ffc232]' />
                                <Link to='fashion' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('fashion')}</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={sportitemsimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#3a77ff]' />
                                <Link to='sportitems' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('sportItems')}</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={discountimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#23e5db]' />
                                <Link to='discount' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('discount')}</Link>
                            </div>
                            <div key={divIds[uuidv4]} className='w-[120px] text-center'>
                                <img src={exchangeimg} alt="" className='rounded-[50%] w-[100%] mb-[10px] max-w-[90px] ml-[15px] bg-[#ff5636]' />
                                <Link to='exchange' className='no-underline hover:no-underline decoration-[white] text-[#002f34] cursor-pointer hover:bg-[#002f34] px-[10px] rounded-[5px] text-[18px] font-[600] hover:text-[white]'>{t('exchange')}</Link>
                            </div>
                        </div>
                    </section>
                </div>
                <>
                </>

                <div>
                    <h1 className='text-center font-[700] pt-[55px]'>Top products</h1>
                    <div className="defaultProductsWrapper defaultProducts max-w-[1250px] m-auto flex gap-[10px] justify-center flex-wrap pt-[30px] pb-[80px]">
                        {sliceDefProducts.map((defProduct) => {
                            return (
                                <>
                                    <div className='bg-white w-[280px] rounded-md leading-none' key={defProduct.id}>
                                        <img src={defProduct.imgUrl} alt="" className='w-[100%] max-w-[280px] h-[250px] rounded-t-md' />
                                        <p className='text-[18px] font-medium px-[15px] mt-[10px]'>{defProduct.name}</p>
                                        <p className='text-[#002f34] font-semibold text-[18px] px-[15px]'>{defProduct.price}$</p>
                                        <p className='text-[14px] font-normal px-[15px]'>{defProduct.region}</p>
                                        <p className='text-[14px] font-normal px-[15px]'>{defProduct.time}</p>
                                        <FaRegHeart onClick={() => addToLikedProducts(defProduct, defProduct.id, defProduct.liked)} className={`float-right mt-[10px] text-[24px] mr-[20px] mb-[10px] `} style={{ color:defProduct.liked ? 'red' : 'grey' }} />
                                        <Link to={`/productdetail/${defProduct.id}`}><button className='btn btn-primary ml-[15px]'>View</button></Link>
                                    </div>
                                    <div className='d-none'>
                                        <LikedProducts
                                            likedPr={defProduct.liked}
                                            likedProducts={likedProducts}
                                            onUnlike={removeFromLikedProducts}
                                        />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home