import { principalFont } from "@/config/fonts"
import { useCartStore } from "@/store/cart/cart-store";
import { CartProduct } from "@/types/StoresTypes"
import Image from "next/image"

interface Props {
    data: CartProduct[];
}

export const ProductsSidebar = ({ data = [] }: Props) => {

    const removeProduct = useCartStore( state => state.removeProduct )

    return (

        <div className="max-h-[83.5vh] overflow-y-auto pt-2">

            {
                data.map((e) =>
                    <div className="flex mb-6" key={e.id}>
                        <div className="bg-custom-gray w-[80px] h-[60px] p-[5px] rounded-md relative flex justify-center items-center">
                            <span 
                                className="absolute text-xs h-5 rounded-full px-1.5 font-bold -top-2 -right-2 bg-green-500 text-white cursor-pointer" 
                                onClick={ () => removeProduct(e.id) }
                            >
                                x
                            </span>
                            <img src={e.imgs} alt=""  className="object-cover w-[70pxpx] h-[50px]" />
                        </div>
                        <div className="w-full ms-4">
                            <span className={` ${principalFont} font-bold text-lg`}>
                                {e.name}
                            </span>
                            <br />
                            <span className={` ${principalFont} `}>
                                {e.qty} x ${e.price}
                            </span>
                        </div>
                    </div>
                )
            }

        </div>

    )
}