'use client'

import { ProductSlideShow, QuantitySelector } from "@/components"
import { principalFont } from "@/config/fonts"
import { useCartStore } from "@/store/cart/cart-store";
import { useProductStore } from "@/store/product/product-store";
import { CartProduct } from "@/types/StoresTypes";
import { useState } from "react";

interface Props {
    idUser: string;
}


const ProductView = ({ idUser }: Props) => {

    const productsList = useProductStore( state => state.products )
    const addProductToCart = useCartStore( state => state.addProductTocart )
    const [qty, setqty] = useState<number>( 1 )


    const product = productsList.find( product => product.id === idUser );

    const handleSubmit = () => {
        if (product) {
            const { img, name, price, id } = product
            const data:CartProduct = {
                imgs: img,
                name,
                price,
                id,
                qty
            } 
            addProductToCart( data )
        }
    }

    if ( !product ) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="mx-auto px-3.5 max-w-7xl md:max-w-3xl xl:max-w-6xl w-full">

            <div className="mt-5 mb-20 grid grid-cols-2 md:grid-cols-2 gap-3">

                <div className="col-span-1">
                    {/*<ProductSlideShow />*/}
                    <div className="w-full h-[500px] bg-custom-gray rounded-custom flex justify-center items-center">
                        <img
                            src={ product.img }
                            className="object-cover"
                            style={{height:400}}
                            alt={ product.name }
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <h1 className={` ${principalFont}  antialiased font-bold text-2xl mb-2 `}>
                        { product.name }
                    </h1>
                    {/*<span className="font-bold mr-1 text-gray-400 line-through text-xl">
                        $21.00
                    </span>*/}
                    <span className="text-green-500 font-bold text-xl">
                        ${ product.price }
                    </span>
                    <br />
                    <p className={` ${principalFont} text-justify mt-5 `}>
                        { product.descripcion }
                    </p>
                    <div className="flex flex-wrap justify-start items-center mt-5">
                        <QuantitySelector
                            quantity={ qty }
                            setquantity={ setqty }
                        />
                        <button className="btn-primary ms-3" onClick={handleSubmit}>
                            Agregar a Carrito
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductView
