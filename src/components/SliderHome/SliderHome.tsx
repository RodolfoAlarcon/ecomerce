import { principalFont } from "@/config/fonts"
import Image from "next/image"

export const SliderHome = () => {
  return (
    <div  className="w-full px-4 lg:px-28 xl:px-40">
      <div className="w-full max-h-88vh m-auto bg-custom-gray rounded-custom p-4 py-10 md:p-6 lg:p-10 flex flex-col md:flex-row items-center justify-between lg:px-8 xl:px-14">
          <div className="w-full md:w-1/2 flex flex-col">
              <span className={ ` ${principalFont} font-bold text-center md:text-start text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-500 ` }>
                  Nombre Categoria
              </span>
              <span className={ ` ${principalFont} text-center md:text-start text-xl  md:text-1xl lg:text-2xl xl:text-3xl mt-2 ` }>
                  Algo sobre la categoria
              </span>
              <button className="btn-primary w-40 block m-auto mt-5 md:ms-0">
                Entrar
              </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <div className="max-w-600">
              <Image 
                src="https://minimalin-demo.myshopify.com/cdn/shop/files/e1_11_600x.png?v=1708684748"
                alt="slider"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
      </div>
    </div>
  )
}
