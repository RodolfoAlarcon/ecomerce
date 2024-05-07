'use client'

import { useState, useEffect } from 'react';

import { principalFont } from '@/config/fonts';
import { ProductGrid, SliderHome } from '../../components';
import Image from 'next/image';
import { ProductsList } from '@/types/ProductsTypes';
import { useProductStore } from '@/store/product/product-store';

const HomeView = () => {

    const addProductToProducts = useProductStore(state => state.addProductToProducts)

    const [data, setdata] = useState<ProductsList[]>([])
    const [loading, setloading] = useState<Boolean>(false)

    useEffect(() => {

        setloading(true)

        fetchData()
            .finally(() => {
                setloading(false)
            })

        return () => {
            setdata([])
        }
    }, [])

    const fetchData = async () => {

        const url = `https://fastworld.negociorodante.com/api/getAllProducts`;

        const response = await fetch(url, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const res = await response.json();

        if (response.status == 200) {
            setdata(res.data)
            addProductToProducts(res.data)
        } else {
            setdata([])
        }

    };

    return (
        <>
            <SliderHome />
            <div className="mx-auto px-3.5 max-w-7xl md:max-w-3xl xl:max-w-6xl w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 mb-5">
                <div className="w-full md:pe-4 mb-5">
                        <div className="w-full h-72 m-auto p-4 md:p-6 lg:p-10 bg-custom-gray rounded-custom flex items-center justify-between">
                            <div className='max-w-[220px] flex flex-col'>
                                <span className={` ${principalFont} font-bold text-green-500 text-2xl mb-4 `}>
                                    Nombre Categoria
                                </span>
                                <button className='btn-primary'>
                                    Entrar
                                </button>
                            </div>
                            <div>
                                <div className='max-w-[175px]'>
                                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/watch_600x.png?v=1692459788" alt="" className='object-cover w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:pl-4 mb-5">
                        <div className="w-full h-72 m-auto p-4 md:p-6 lg:p-10 bg-custom-gray rounded-custom flex items-center justify-between">
                            <div className='max-w-[220px] flex flex-col'>
                                <span className={` ${principalFont} font-bold text-green-500 text-2xl mb-4 `}>
                                    Nombre Categoria
                                </span>
                                <button className='btn-primary'>
                                    Entrar
                                </button>
                            </div>
                            <div>
                                <div className='max-w-[175px]'>
                                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/blueshoe_2_600x.png?v=1692626014" alt="" className='object-cover w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
                <h1 className={`${principalFont} text-3xl text-center font-bold mb-10`}>Productos Populares</h1>
                <div className="w-full mb-10">
                    <ProductGrid quantityGrid={4} data={data} loading={loading} />
                </div>
            </div>
        </>
    )
}

export default HomeView
