import React from 'react'
import { useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../firbese'
export const fashion = () => {
    const fashType = 'Fashion'
    const [fashion, setfashion] = useState([])
    const defaultProducts = collection(db, 'defaultProducts')
    onSnapshot(
        defaultProducts,
        (snapshot) => {
            let fashionsList = []
            snapshot.docs.forEach((doc) => {
                fashionsList.push({ id: doc.id, ...doc.data() })
            })
            setfashion(fashionsList)
        }
    ), (err) => {
        console.log(err);
    }
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-4 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {fashion.filter(fshType=> fashType == fshType.type ).map((fashions) => {
                            return (
                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a class="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={fashions.imgUrl} />
                                    </a>
                                    <div class="mt-4">
                                        <h1 class="text-gray-900 title-font text-xl font-medium" >{fashions.name}</h1>
                                        <h2 class="text-gray-500 text-lg tracking-widest title-font mb-1">{fashions.region}</h2>
                                        <p class="mt-1">${fashions.price}</p>
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
export default fashion