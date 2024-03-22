import React from 'react'
import { FaRegHeart, FaBars, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
export const Products = ({ defProduct, isLiked, toggleLike }) => {
    return (
        <>
            <div className='bg-white w-[280px] rounded-md leading-none' key={defProduct.id}>
                {/* <SkeletonTheme baseColor="#202020" highlightColor="#444" > */}
                <img src={defProduct.imgUrl || <Skeleton />} alt="" className='w-[100%] max-w-[280px] h-[250px] rounded-t-md' loading='lazy'/>
                {/* </SkeletonTheme> */}
                {/* {defProduct.body || <Skeleton />} */}
                <p className='text-[18px] font-medium px-[15px] mt-[10px]'>{defProduct.name || <Skeleton />}</p>
                <p className='text-[#002f34] font-semibold text-[18px] px-[15px]'>{defProduct.price}$</p>
                <p className='text-[14px] font-normal px-[15px]'>{defProduct.region}</p>
                <p className='text-[14px] font-normal px-[15px]'>{defProduct.time}</p>
                {isLiked ? (
                    <FaHeart
                        className={`float-right mt-[10px] text-red-500 text-[24px] mr-[20px] mb-[10px]`}
                        onClick={() => toggleLike(defProduct)}
                    />
                ) : (
                    <FaRegHeart
                        className={`float-right mt-[10px] text-[24px] mr-[20px] mb-[10px] ${isLiked ? 'text-red-500' : ''}`}
                        onClick={() => toggleLike(defProduct)}
                    />
                )}
                <Link to={`/productdetail/${defProduct.id}`}><button className='btn btn-primary ml-[15px]'>View</button></Link>
            </div>
        </>
    )
}
export default Products