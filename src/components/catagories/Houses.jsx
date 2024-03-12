import React from 'react'
import { useState,useEffect } from 'react'
import { collection,onSnapshot } from 'firebase/firestore'
import { db } from '../../firbese'
export const Houses = () => {
    const houseType = 'House'
    const [houses, setHouses] = useState([])
    const defaultProducts = collection(db, 'defaultProducts')
    onSnapshot(
        defaultProducts,
        (snapshot) => {
            let housesList = []
            snapshot.docs.forEach((doc) => {
                housesList.push({ id: doc.id, ...doc.data() })
            })
            setHouses(housesList)
        }
    ), (err) => {
        console.log(err);
    }
    return (
        <div>
            <section class="text-gray-600 body-font">
                    <div class="container px-5 py-4 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            {houses.filter(hsType=> houseType == hsType.type ).map((house) => {
                                return (
                                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                        <a class="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={house.imgUrl} />
                                        </a>
                                        <div class="mt-4">
                                            <h1 class="text-gray-900 title-font text-xl font-medium" >{house.name}</h1>
                                            <h2 class="text-gray-500 text-lg tracking-widest title-font mb-1">{house.region}</h2>
                                            <p class="mt-1">${house.price}</p>
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
export default Houses