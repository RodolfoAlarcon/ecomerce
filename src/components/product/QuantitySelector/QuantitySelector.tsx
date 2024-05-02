'use client'

import { useState } from "react";

import { TbCircleMinus, TbCirclePlus } from "react-icons/tb"

interface Props {
  quantity: number;
  setquantity: (qty: number) => void;
}

export const QuantitySelector = ({ quantity, setquantity }: Props) => {


  const onQuantityChanged = ( value: number ) => {

    if ( quantity + value < 1 ) return

    setquantity( quantity + value )

  }

  return (
    <div className="flex justify-center items-center">
        <button onClick={ () => onQuantityChanged( -1 ) } >
          <TbCircleMinus className="w-9 h-9" />
        </button>
        <span className="w-12 mx-1 px-1 py-1 h-9 bg-gray-200 text-center rounded-xl">
          {quantity}
        </span>
        <button onClick={ () => onQuantityChanged( +1 ) }>
          <TbCirclePlus className="w-9 h-9" />
        </button>
    </div>
  )
}