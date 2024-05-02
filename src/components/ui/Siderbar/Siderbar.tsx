'use client'

import { TbSquareRoundedX } from "react-icons/tb"
import { useUIStore } from "@/store"
import clsx from "clsx"
import { ProductsSidebar } from "./ProductsSidebar"
import { TotalSidebar } from "./TotalSidebar"
import { useCartStore } from "@/store/cart/cart-store"
import { principalFont } from "@/config/fonts"

export const Siderbar = () => {

  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen)
  const closeMenu = useUIStore(state => state.closeSideMenu)
  const productsInCart = useCartStore(state => state.cart)

  const total = productsInCart.reduce((acc, product) => acc + (product.price * product.qty), 0)

  return (
    <div>

      {

        isSideMenuOpen && (<div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />)

      }

      {

        isSideMenuOpen && (<div onClick={closeMenu} className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />)

      }


      <nav className={
        clsx(
          "fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen
          }
        )
      }>

        <div className="absolute top-4 right-4 cursor-pointer" onClick={closeMenu}>
          <TbSquareRoundedX className="w-10 h-10 hover:text-green-500" />
        </div>

        {
          productsInCart.length != 0 ? (<div className="w-full mt-10 px-5">
            <ProductsSidebar data={productsInCart} />
            <TotalSidebar total={total} />
          </div>)
            :
            (<div className="w-full mt-10 px-5">
              <span className={`${principalFont} text-center block font-bold text-xl`}>
                No hay Productos
              </span>
            </div>)
        }

      </nav>

    </div>
  )
}