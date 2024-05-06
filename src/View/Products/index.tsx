'use client'

import { useEffect, useState  } from "react"

import { FilterTienda, ProductGrid } from "@/components"
import { ProductsList } from "@/types/ProductsTypes"
import { useProductStore } from "@/store/product/product-store"

const ProductsView = () => {

    const addProductToProducts = useProductStore( state => state.addProductToProducts )

    const [data, setdata] = useState<ProductsList[]>([])
    const [dataFinal, setdataFinal] = useState<ProductsList[]>([])
    const [loading, setloading] = useState<Boolean>(false)
    const [idFilter, setidFilter] = useState<Boolean>(false)

    useEffect(() => {

        setloading(true)
    
        fetchData()
          .finally(()=>{
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
    
        console.log(48, res)
    
        if (response.status == 200) {
          setdata(res.data)
          setdataFinal(res.data)
          addProductToProducts(res.data)
        } else {
          setdata([])
        }
    
      };

    const filter = (id: string) => {
        setdataFinal(data.filter(product => product.categorys_id === id))
        setidFilter(true)
    }
    const filterNull = () => {
        setdataFinal(data)
        setidFilter(false)
    }

    return (
        <div className="mx-auto px-3.5 max-w-7xl md:max-w-3xl xl:max-w-6xl w-full">
            <div className="flex flex-wrap w-full">
                <div className="w-full md:w-1/4 p-2">
                    <FilterTienda filter={filter} idFilter={idFilter} filterNull={filterNull} />
                </div>
                <div className="w-full md:w-3/4 p-2 mb-10">
                    <ProductGrid quantityGrid={3} data={dataFinal} loading={loading} />
                </div>
            </div>
        </div>
    )
}

export default ProductsView