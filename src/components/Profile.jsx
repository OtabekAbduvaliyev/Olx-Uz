import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { Select, Option } from "@material-tailwind/react";
import { collection, getDocs, deleteDoc, doc, onSnapshot, addDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, imgDB } from '../firbese';
const Profile = () => {
    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [region, setRegion] = useState('')
    const [price, setPrice] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [desc, setDesc] = useState('')
    const [defProducts, setdefProducts] = useState([])
    const [works, setWorks] = useState([])
    const [kidsWorld, setKidsWorld] = useState([])
    const [transport, setTransport] = useState([])
    const [fashion, setFashion] = useState([])
    const [animals, setAnimals] = useState([])
    const [furnitures, setFurnitures] = useState([])
    const [elecItems, setElecItems] = useState([])
    const [sportItems, setSportItems] = useState([])
    const [houses, setHouses] = useState([])
    const [exchange, setExchage] = useState([])
    const [services, setServices] = useState([])
    const [discount, setDiscount] = useState([])
    const [show, setShow] = useState(false)
    const [id, setId] = useState()
    const [showModal, setShowModal] = useState(false)
    const [addToWorks, setAddToWorks] = useState(false)
    const [addToKidsWorld, setAddToKidsWorld] = useState(false)
    const [addToTransport, setAddToTransport] = useState(false)
    const [addToFashion, setAddToFashion] = useState(false)
    const [addToAnimals, setAddToAnimals] = useState(false)
    const [addToFurnitures, setAddToFurnitures] = useState(false)
    const [addToElecItems, setAddToElecItems] = useState(false)
    const [addToSportItems, setAddToSportItems] = useState(false)
    const [addToHouses, setAddToHouses] = useState(false)
    const [addToExchange, setAddToExchange] = useState(false)
    const [addToServices, setAddToServices] = useState(false)
    const [addToDiscount, setAddToDiscount] = useState(false)
    const dbWorks = collection(db, 'works')
    const dbKidsWorld = collection(db, 'kidsworld')
    const dbTransport = collection(db, 'transport')
    const dbFashion = collection(db, 'fashion')
    const dbValue1 = collection(db, 'defaultProducts')
    const dbAnimals = collection(db, 'animals')
    const dbFurnitures = collection(db, 'furnitures')
    const dbElecItems = collection(db, 'elecItems')
    const dbSportItems = collection(db, 'sportitems')
    const dbHouses = collection(db, 'houses')
    const dbExchange = collection(db, 'exchange')
    const dbServices = collection(db, 'services')
    const dbDiscount = collection(db, 'discount')
    const time = new Date()
    const day = time.getDate()
    const month = time.getMonth()
    const year = time.getFullYear()
    const allTime = day + '/' + (month + 1) + '/' + year
    const handleEdit = async (id, name, region, price, imgUrl) => {
        setName(name)
        setPrice(price)
        setRegion(region)
        setId(id)
        setShow(true)
        setImg(imgUrl)
        setShowModal(true)
    }
    const handleUpdate = async () => {
        const updateData = doc(db, 'defaultProducts', id)
        // console.log(users);
        await updateDoc(updateData, { name: name, region: region, price: price, imgUrl: img })
        setShow(false)
        setName('')
        setRegion('')
        setPrice('')
        closeModal()
    }
    const handleSubmitToWorks = async () =>{
        setAddToWorks(true)
        setAddToKidsWorld(false)
        setAddToFashion(false)
        setAddToTransport(false)
        setAddToAnimals(false)
        setAddToFurnitures(false)
        setAddToElecItems(false)
        setAddToSportItems(false)
        setAddToHouses(false)
        setAddToExchange(false)
        setAddToServices(false)
        setAddToDiscount(false)
    }
    const handleSubmitToKidsWorld = async () =>{
        setAddToKidsWorld(true)
        setAddToWorks(false)
        setAddToFashion(false)
        setAddToTransport(false)
        setAddToAnimals(false)
        setAddToFurnitures(false)
        setAddToElecItems(false)
        setAddToSportItems(false)
        setAddToHouses(false)
        setAddToExchange(false)
        setAddToServices(false)
        setAddToDiscount(false)
    }
    const handleSubmitToTransport = async () =>{
        setAddToTransport(true)
        setAddToKidsWorld(false)
        setAddToWorks(false)
        setAddToFashion(false)
        setAddToAnimals(false)
        setAddToFurnitures(false)
        setAddToElecItems(false)
        setAddToSportItems(false)
        setAddToHouses(false)
        setAddToExchange(false)
        setAddToServices(false)
        setAddToDiscount(false)
    }
    const handleSubmitToFashion = async () =>{
        setAddToFashion(true)
        setAddToTransport(false)
        setAddToKidsWorld(false)
        setAddToWorks(false)
        setAddToAnimals(false)
        setAddToFurnitures(false)
        setAddToElecItems(false)
        setAddToSportItems(false)
        setAddToHouses(false)
        setAddToExchange(false)
        setAddToServices(false)
        setAddToDiscount(false)
    }
    const handleSubmitToAnimals = async () =>{
        setAddToAnimals(true)
        setAddToFurnitures(false)
        setAddToElecItems(false)
        setAddToFashion(false)
        setAddToTransport(false)
        setAddToKidsWorld(false)
        setAddToWorks(false)
        setAddToSportItems(false)
        setAddToHouses(false)
        setAddToExchange(false)
        setAddToServices(false)
        setAddToDiscount(false)
    }   
    const handleSubmitToFurnitures = async () =>{
        setAddToFurnitures(true)
        setAddToAnimals(false)
        setAddToElecItems(false)
        setAddToFashion(false)
        setAddToTransport(false)
        setAddToKidsWorld(false)
        setAddToWorks(false)
        setAddToSportItems(false)
        setAddToHouses(false)
        setAddToExchange(false)
        setAddToServices(false)
        setAddToDiscount(false)
    }    
    const handleSubmitToElecItems = async () =>{
        setAddToElecItems(true)
        setAddToAnimals(false)
        setAddToFurnitures(false)
        setAddToFashion(false)
        setAddToTransport(false)
        setAddToKidsWorld(false)
        setAddToWorks(false)
        setAddToSportItems(false)
        setAddToHouses(false)
        setAddToExchange(false)
        setAddToServices(false)
        setAddToDiscount(false)
    }
    const handleSubmitToSportItems = async () =>{
        setAddToSportItems(true)
        setAddToHouses(false)
        setAddToExchange(false)
        setAddToServices(false)
        setAddToDiscount(false)
        setAddToElecItems(false)
        setAddToAnimals(false)
        setAddToFurnitures(false)
        setAddToFashion(false)
        setAddToTransport(false)
        setAddToKidsWorld(false)
        setAddToWorks(false)
    }
    const handleSubmitToHouses = async () =>{
        setAddToHouses(true)
        setAddToSportItems(false)
        setAddToExchange(false)
        setAddToServices(false)
        setAddToDiscount(false)
        setAddToFashion(false)
        setAddToTransport(false)
        setAddToKidsWorld(false)
        setAddToWorks(false)
        setAddToAnimals(false)
        setAddToFurnitures(false)
        setAddToElecItems(false)
    }
    const handleSubmitToExchange = async () =>{
        setAddToExchange(true)
        setAddToSportItems(false)
        setAddToHouses(false)
        setAddToServices(false)
        setAddToDiscount(false)
        setAddToAnimals(false)
        setAddToFurnitures(false)
        setAddToElecItems(false)
        setAddToFashion(false)
        setAddToTransport(false)
        setAddToKidsWorld(false)
        setAddToWorks(false)
    }   
    const handleSubmitToServices = async () =>{
        setAddToServices(true)
        setAddToSportItems(false)
        setAddToHouses(false)
        setAddToExchange(false)
        setAddToDiscount(false)
        setAddToFurnitures(false)
        setAddToAnimals(false)
        setAddToElecItems(false)
        setAddToFashion(false)
        setAddToTransport(false)
        setAddToKidsWorld(false)
        setAddToWorks(false)
    }    
    const handleSubmitToDiscount = async () =>{
        setAddToDiscount(true)
        setAddToSportItems(false)
        setAddToHouses(false)
        setAddToExchange(false)
        setAddToServices(false)
        setAddToElecItems(false)
        setAddToAnimals(false)
        setAddToFurnitures(false)
        setAddToFashion(false)
        setAddToTransport(false)
        setAddToKidsWorld(false)
        setAddToWorks(false)
    }
    const handleSubmit = async () => {
        const time = new Date()
        const day = time.getDate()
        const month = time.getMonth()
        const year = time.getFullYear()
        const allTime = day + '/' + (month + 1) + '/' + year
        await addDoc(dbValue1, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc,userId: localStorage.getItem('user'), liked:false})
        {addToWorks && await addDoc(dbWorks, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToKidsWorld && await addDoc(dbKidsWorld, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToTransport && await addDoc(dbTransport, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToFashion && await addDoc(dbFashion, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToAnimals && await addDoc(dbAnimals, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToFurnitures && await addDoc(dbFurnitures, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToElecItems && await addDoc(dbElecItems, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToSportItems && await addDoc(dbSportItems, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToHouses && await addDoc(dbHouses, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToExchange && await addDoc(dbExchange, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToServices && await addDoc(dbServices, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        {addToDiscount && await addDoc(dbDiscount, { name: name, region: region, price: price, imgUrl: img, phoneNumber: phoneNumber, desc: desc })}
        setShowModal(false)
        setShow(false)
    }
    const closeModal = () => {
        setShowModal(false)
    }
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
        onSnapshot(
            dbWorks,
            (snapshot) => {
                let workList = []
                snapshot.docs.forEach((doc) => {
                    workList.push({ id: doc.id, ...doc.data() })
                })
                setWorks(workList)
            }
        ), (err) => {
            console.log(err);
        }
        onSnapshot(
            dbKidsWorld,
            (snapshot) => {
                let kidsWorldList = []
                snapshot.docs.forEach((doc) => {
                    kidsWorldList.push({ id: doc.id, ...doc.data() })
                })
                setKidsWorld(kidsWorldList)
            }
        ), (err) => {
            console.log(err);
        }
        onSnapshot(
            dbTransport,
            (snapshot) => {
                let transportList = []
                snapshot.docs.forEach((doc) => {
                    transportList.push({ id: doc.id, ...doc.data() })
                })
                setTransport(transportList)
            }
        ), (err) => {
            console.log(err);
        }
        onSnapshot(
            dbFashion,
            (snapshot) => {
                let fashionList = []
                snapshot.docs.forEach((doc) => {
                    fashionList.push({ id: doc.id, ...doc.data() })
                })
                setFashion(fashionList)
            }
        ), (err) => {
            console.log(err);
        }
        onSnapshot(
            dbAnimals,
            (snapshot) => {
                let animalList = []
                snapshot.docs.forEach((doc) => {
                    animalList.push({ id: doc.id, ...doc.data() })
                })
                setAnimals(animalList)
            }
        ), (err) => {
            console.log(err);
        }        
        onSnapshot(
            dbFurnitures,
            (snapshot) => {
                let furnitureList = []
                snapshot.docs.forEach((doc) => {
                    furnitureList.push({ id: doc.id, ...doc.data() })
                })
                setFurnitures(furnitureList)
            }
        ), (err) => {
            console.log(err);
        }        
        onSnapshot(
            dbElecItems,
            (snapshot) => {
                let elecItemList = []
                snapshot.docs.forEach((doc) => {
                    elecItemList.push({ id: doc.id, ...doc.data() })
                })
                setElecItems(elecItemList)
            }
        ), (err) => {
            console.log(err);
        }
        ///////////////////////////////////////////////////////////////
        onSnapshot(
            dbSportItems,
            (snapshot) => {
                let sportItemsList = []
                snapshot.docs.forEach((doc) => {
                    sportItemsList.push({ id: doc.id, ...doc.data() })
                })
                setSportItems(sportItemsList)
            }
        ), (err) => {
            console.log(err);
        }
        onSnapshot(
            dbHouses,
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
        onSnapshot(
            dbExchange,
            (snapshot) => {
                let exchangeList = []
                snapshot.docs.forEach((doc) => {
                    exchangeList.push({ id: doc.id, ...doc.data() })
                })
                setExchage(exchangeList)
            }
        ), (err) => {
            console.log(err);
        }
        onSnapshot(
            dbServices,
            (snapshot) => {
                let serviceList = []
                snapshot.docs.forEach((doc) => {
                    serviceList.push({ id: doc.id, ...doc.data() })
                })
                setServices(serviceList)
            }
        ), (err) => {
            console.log(err);
        }
        onSnapshot(
            dbDiscount,
            (snapshot) => {
                let discountList = []
                snapshot.docs.forEach((doc) => {
                    discountList.push({ id: doc.id, ...doc.data() })
                })
                setDiscount(discountList)
            }
        ), (err) => {
            console.log(err);
        }   
    }, [])
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "defaultProducts", id));
    }
    const handleUpload = (e) => {
        console.log(e.target.files[0])
        const imgs = ref(imgDB, `Imgs/${v4()}`)
        uploadBytes(imgs, e.target.files[0]).then(data => {
            console.log(data, "imgs")
            getDownloadURL(data.ref).then(val => {
                setImg(val)
            })
        })
    }
    const getData = async () => {
        const dataDb = await getDocs(dbValue1)
        const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
        setdefProducts(allData)
    }
    useEffect(() => {
        getData()
    })
    return (
        <div>
            <h1 className='text-center mt-[50px]'>Your Profile</h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-[40px]">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                Time
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edit
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delete
                            </th>
                            <button className='btn btn-success mt-[3px]' onClick={() => setShowModal(true)}>New</button>
                        </tr>
                    </thead>
                    {defProducts.filter(item => item.userId == localStorage.getItem('user')).map((defPro) => {
                        return (
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img src={defPro.imgUrl} alt="" className='w-[80px] rou rounded-[10px]' />
                                    </th>
                                    <td class="px-6 py-4">
                                        {defPro.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {defPro.region}
                                    </td>
                                    <td class="px-6 py-4">
                                        {defPro.time}
                                    </td>
                                    <td class="px-6 py-4">
                                        ${defPro.price}
                                    </td>
                                    <td class="px-6 py-4">
                                        <button href="#" class="font-medium text-blue-600 dark:text-blue-500 btn btn-primary" onClick={() => handleEdit(defPro.id, defPro.name, defPro.region, defPro.price, defPro.imgUrl)} >Edit</button>
                                    </td>
                                    <td class="px-6 py-4">
                                        <button href="#" class="font-medium text-red-600 dark:text-blue-500 btn btn-danger" onClick={() => handleDelete(defPro.id)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
            {showModal &&
                <div id="authentication-modal" tabindex="-1" aria-hidden="true" class=" flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-md max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Add your new product
                                </h3>
                                <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" onClick={closeModal}>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div class="p-4 md:p-5">
                                <div className=" sm:mx-auto sm:w-full sm:max-w-sm ">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                        <div className="mt-2">
                                            <input id="name"
                                                onChange={(event) => setName(event.target.value)}
                                                value={name}
                                                type="text"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                                        </div>
                                        <div className="mt-2">
                                            <input id="surname"
                                                onChange={(event) => setPrice(event.target.value)}
                                                value={price}
                                                type="text"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">Region</label>
                                        </div>
                                        <div className="mt-2">
                                            <input id="age"
                                                onChange={(event) => setRegion(event.target.value)}
                                                value={region}
                                                type="text"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                                        </div>
                                        <div className="mt-2">
                                            <input id="phoneNumber"
                                                onChange={(event) => setPhoneNumber(event.target.value)}
                                                value={phoneNumber}
                                                type="number"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                        </div>
                                        <div className="mt-2">
                                            <input id="desc"
                                                onChange={(event) => setDesc(event.target.value)}
                                                value={desc}
                                                type="text"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className='py-[10px] mt-[10px]'>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="imgInput" className="block text-sm font-medium leading-6 text-gray-900">Image</label>
                                        </div>
                                        <div className="mt-2">
                                        <input id='imgInput' required type="file" onChange={(e) => handleUpload(e)} className=" bg-[white] shadow-sm rounded-[5px] px-[20px] text-[yellow] font-[600] py-[15px]" />
                                        </div>
                                    </div>
                                    <div className="w-92 mt-[15px]">
                                        <Select label="Select Version">
                                            <Option onClick={handleSubmitToKidsWorld}>Kid's world</Option>
                                            <Option onClick={handleSubmitToWorks}>Work</Option>
                                            <Option onClick={handleSubmitToFashion}>Fashion</Option>
                                            <Option onClick={handleSubmitToAnimals}>Animals</Option>
                                            <Option onClick={handleSubmitToFurnitures}>Furnitures</Option>
                                            <Option onClick={handleSubmitToTransport}>Transport</Option>
                                            <Option onClick={handleSubmitToElecItems}>Electrical items</Option>
                                            <Option onClick={handleSubmitToSportItems}>Sport items</Option>
                                            <Option onClick={handleSubmitToHouses}>Houses</Option>
                                            <Option onClick={handleSubmitToExchange}>Exchange</Option>
                                            <Option onClick={handleSubmitToServices}>Services</Option>
                                            <Option onClick={handleSubmitToDiscount}>Discount</Option>
                                        </Select>
                                    </div>
                                    {!show ? <button
                                        onClick={handleSubmit}
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-[15px]">Submit
                                    </button> :
                                        <button
                                            onClick={handleUpdate}
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default Profile