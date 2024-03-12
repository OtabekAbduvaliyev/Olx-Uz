import React from 'react'
import { useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../firbese'
import Profile from '../Profile'
export const Transports = () => {
  const [transports, setTransports] = useState([])
  const defaultProducts = collection(db, 'defaultProducts')
  const trType = 'Transport'
  onSnapshot(
    defaultProducts,
    (snapshot) => {
      let transportList = []
      snapshot.docs.forEach((doc) => {
        transportList.push({ id: doc.id, ...doc.data() })
      })
      setTransports(transportList)
    }
  ), (err) => {
    console.log(err);
  };
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-4 mx-auto">
          <div class="flex flex-wrap -m-4">
            {transports.filter(transportType=> trType == transportType.type ).map((transport) => {
              // console.log(transport.id);
              return (
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={transport.id}>
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={transport.imgUrl} />
                  </a>
                  <div class="mt-4">
                    <h1 class="text-gray-900 title-font text-xl font-medium" >{transport.name}</h1>
                    <h2 class="text-gray-500 text-lg tracking-widest title-font mb-1">{transport.region}</h2>
                    <p class="mt-1">${transport.price}</p>
                    <div className='d-none'><Profile index={transport.id}/></div>
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
export default Transports