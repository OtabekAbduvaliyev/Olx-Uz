import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { onSnapshot,collection } from 'firebase/firestore'
import { db } from '../firbese'
export const ProductDetails = () => {
    const [defProducts, setdefProducts] = useState([])
    const dbValue1 = collection(db, 'defaultProducts')
    const [showNumber, setShowNumber] = useState(true)
    useEffect(() => {
        onSnapshot(
            dbValue1,
            (snapshot) => {
                let userList = []
                snapshot.docs.forEach((doc) => {
                    userList.push({ id: doc.id, ...doc.data() })
                })
                setdefProducts(userList)
            }
        ), (err) => {
            console.log(err);
        }
    }, [])
    let { productId } = useParams()
    const product = defProducts.find((product)=>product.id === productId)
    const {name,price,imgUrl,region,phoneNumber,desc} = product || {   }
    console.log(productId);
    console.log(name);
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={imgUrl} />
                            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 class="text-sm title-font text-gray-500 tracking-widest">Product Name</h2>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                                <div class="flex mb-4">
                                    <span class="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <span class="text-gray-600 ml-3">4 Reviews</span>
                                    </span>
                                </div>
                                <p class="leading-relaxed">{desc}</p>
                                <div class="flex mt-6 items-center border-b-2 border-gray-100 mb-5">
                                    <div className='flex items-center'>
                                        <h4>Region:</h4>
                                        <h5 className='ml-[10px]'>{region}</h5>
                                    </div>
                                </div>
                                <div className="proDetailsNumber">
                                    {showNumber ?<button className='btn btn-warning mb-[20px]' onClick={()=>setShowNumber(false)}>Call to owener</button>:
                                    <button className='btn btn-warning mb-[20px]' onClick={()=>setShowNumber(true)}>{phoneNumber}</button>}
                                </div>
                                <div class="flex">
                                    <span class="title-font font-medium text-2xl text-gray-900">${price}</span>
                                    <Link to='/' className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'><button>Back</button></Link>
                                    {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button> */}
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ProductDetails