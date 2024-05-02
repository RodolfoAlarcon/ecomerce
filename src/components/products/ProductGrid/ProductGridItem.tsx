'use client'

import { useState } from "react"

import Image from "next/image"
import Link from "next/link"

interface Props {
    imgs: string;
    name: string;
    price: number;
    id: string;
}

export const ProductGridItem = ({ imgs, name, price, id }: Props) => {

    const [displayImage, setDisplayImage] = useState(imgs)

    return (
        <div className="overflow-hidden fade-in">
            <div
                className="rounded-custom bg-custom-gray w-full h-[270px] overflow-hidden flex items-center justify-center"
            >
                <Link href={ ` /product/${id} ` }>
                    <Image
                        src={displayImage}
                        alt="img"
                        className="w-full object-cover"
                        width={270}
                        height={270}
                        onMouseEnter={() => setDisplayImage(imgs)}
                        onMouseLeave={() => setDisplayImage(imgs)}
                    />
                </Link>
            </div>
            <div className="p-3.5 flex flex-col">
                <Link 
                    className="text-center font-bold hover:text-green-500"
                    href={ ` /product/${id} ` }
                >
                    {name}
                </Link>
                <div className="text-center">
                    {/*<span className="font-bold mr-1 text-gray-400 line-through">
                        $21.00
                    </span>*/}
                    <span className="text-green-500 font-bold">
                        ${price}
                    </span>
                </div>
            </div>
        </div>
    )
}