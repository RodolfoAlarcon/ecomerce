'use client'

import { useState, useEffect } from "react"

import { principalFont } from "@/config/fonts"
import { TbShoppingCart, TbUser } from "react-icons/tb"

import Link from "next/link"
import { useUIStore } from "@/store"
import { useCartStore } from "@/store/cart/cart-store"

export const TopMenu = () => {

    const openMenu = useUIStore(state => state.openSideMenu)
    const openMenuLateral = useUIStore(state => state.openSideLateralMenu)
    const totalItemsinCart = useCartStore(state => state.getTotalItem())

    const [loaded, setLoaded] = useState<Boolean>(false)

    useEffect(() => {
        setLoaded(true)
    },[])

    return (
        <nav className="flex justify-between items-center mx-auto px-3.5 max-w-7xl md:max-w-3xl xl:max-w-6xl w-full py-7">
            <div>
                <Link href="/" >
                    <span className={`${principalFont} antialiased font-bold`} >
                        Minimalista
                    </span>
                </Link>
            </div>

            <div className="hidden sm:block">
                <Link
                    href="/"
                    className={`${principalFont} m-2 p-2 rounded-md transition-all hover:text-green-500 font-semibold`}
                >
                    Inicio
                </Link>
                <Link
                    href="/about"
                    className={`${principalFont} m-2 p-2 rounded-md transition-all hover:text-green-500 font-semibold`}
                >
                    Nosotros
                </Link>
                <Link
                    href="/products"
                    className={`${principalFont} m-2 p-2 rounded-md transition-all hover:text-green-500 font-semibold`}
                >
                    Tienda
                </Link>
                <Link
                    href="/contact"
                    className={`${principalFont} m-2 p-2 rounded-md transition-all hover:text-green-500 font-semibold`}
                >
                    Contáctenos
                </Link>
            </div>

            <div className="flex items-center">
                <div className="relative cursor-pointer" onClick={ openMenu } >
                    {( loaded && totalItemsinCart > 0 ) && (
                        <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-green-500 text-white">
                            {totalItemsinCart}
                        </span>
                    )}
                    <TbShoppingCart className="w-5 h-5 hover:text-green-500" />
                </div>
                <button className="ml-3 cursor-pointer" onClick={ openMenuLateral }>
                    <TbUser className="w-5 h-5 hover:text-green-500" />
                </button>
            </div>

        </nav>
    )
}