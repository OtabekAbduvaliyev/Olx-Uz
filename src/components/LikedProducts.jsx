import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firbese';
import { doc, updateDoc } from 'firebase/firestore';
export const LikedProducts = (likedPr) => {
    const [likedProducts, setLikedProducts] = useState([]);

    useEffect(() => {
        const storedLikedProducts = localStorage.getItem('likedProducts');
        if (storedLikedProducts) {
            setLikedProducts(JSON.parse(storedLikedProducts));
        }
    }, []);
    const removeFromLikedProducts = async (productId) => {
        const updateData = doc(db, 'defaultProducts', productId)
        await updateDoc(updateData,{
         liked:!likedPr
        })
        const indexToRemove = likedProducts.findIndex(product => product.id === productId);
        if (indexToRemove !== -1) {
            const updatedLikedProducts = [...likedProducts];
            updatedLikedProducts.splice(indexToRemove, 1);
            setLikedProducts(updatedLikedProducts);
            localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
        }
    };
    return (
        <div>
            <div>
                <h2 className='text-center mt-[30px] font-[700]'>Liked Products</h2>
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-[40px]'>
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 mt-10">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Region
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        {likedProducts && likedProducts.map((product) => {
                            return (
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img src={product.imgUrl} alt="" className='w-[80px] h-[80px] rou rounded-[10px]' />
                                        </th>
                                        <td class="px-6 py-4">
                                            {product.name}
                                        </td>
                                        <td class="px-6 py-4">
                                            {product.region}
                                        </td>
                                        <td class="px-6 py-4">
                                            ${product.price}
                                        </td>
                                        <td class="px-6 py-4">
                                            <button href="#" class="font-medium text-red-600 dark:text-blue-500 btn btn-danger" onClick={() => removeFromLikedProducts(product.id)}>Unlike</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}

                    </table>
                </div>
            </div >
        </div >
    )
}
export default LikedProducts