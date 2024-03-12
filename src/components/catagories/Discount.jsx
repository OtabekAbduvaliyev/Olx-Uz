import React from 'react'
import { useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../firbese'
export const discount = () => {
    const [discount, setdiscount] = useState([])
    const dscType  = 'Discount'
    const dbDefProducts = collection(db, 'defaultProducts')
    onSnapshot(
        dbDefProducts,
        (snapshot) => {
            let discList = []
            snapshot.docs.forEach((doc) => {
                discList.push({ id: doc.id, ...doc.data() })
            })
            setdiscount(discList)
        }
    ), (err) => {
        console.log(err);
    }
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-4 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {discount.filter(dsType=> dscType == dsType.type ).map((disc) => {
                            return (
                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={disc.id}>
                                    <a class="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={disc.imgUrl} />
                                    </a>
                                    <div class="mt-4">
                                        <h1 class="text-gray-900 title-font text-xl font-medium" >{disc.name}</h1>
                                        <h2 class="text-gray-500 text-lg tracking-widest title-font mb-1">{disc.region}</h2>
                                        <p class="mt-1">${disc.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default discount