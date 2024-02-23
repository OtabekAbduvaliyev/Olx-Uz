import React from 'react'
import { useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../firbese'
export const exchange = () => {
    const [exchange, setexchange] = useState([])
    const dbexchange = collection(db, 'exchange')
    onSnapshot(
        dbexchange,
        (snapshot) => {
            let exchList = []
            snapshot.docs.forEach((doc) => {
                exchList.push({ id: doc.id, ...doc.data() })
            })
            setexchange(exchList)
        }
    ), (err) => {
        console.log(err);
    }
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {exchange.map((exch) => {
                            return (
                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a class="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={exch.imgUrl} />
                                    </a>
                                    <div class="mt-4">
                                        <h1 class="text-gray-900 title-font text-xl font-medium" >{exch.name}</h1>
                                        <h2 class="text-gray-500 text-lg tracking-widest title-font mb-1">{exch.region}</h2>
                                        <p class="mt-1">${exch.price}</p>
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
export default exchange