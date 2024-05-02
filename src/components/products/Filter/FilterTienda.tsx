'use client'

import { useEffect, useState } from "react";
import { principalFont } from "@/config/fonts";

interface Categoria {
  id: string;
  name: string;
  // Puedes añadir otros campos aquí según los datos que recibas.
}

interface Props {
  filter: (id: string) => void;
  idFilter: Boolean;
  filterNull: () => void;
}

export const FilterTienda = ({ filter, idFilter, filterNull }: Props) => {

  const [categorias, setcategorias] = useState<Categoria[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    const url = `${process.env.NEXT_PUBLIC_BAKEND_URL}getAllCategories`;

    const response = await fetch(url, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': `Bearer 7|geI93GKH1QU6v3xgQERYt7a33igNRWIzxAw4tmd757d3382e`
      }
    });

    const res = await response.json();
    if (response.status == 200) {
      console.log(38, res)
      setcategorias(res.categorys)
    }else{
      setcategorias([])
    }

  };

  return (
    <div className="w-full">
      {
        !idFilter ?
        (<></>)
        :
        (<p onClick={filterNull} className={ ` ${ principalFont } text-bold text-green-500 cursor-pointer ` }>
          Eliminar Filtro
        </p>)
      }
      <h4 className={`${principalFont} font-bold text-xl mb-2`}>
        Categorias
      </h4>
      {categorias.length > 0 ? (
        categorias.map((e)=>
          <p onClick={() => filter(e.id) } key={e.id} className={ ` ${principalFont} mb-1 cursor-pointer font-semibold hover:text-green-500 ` }>{e.name}</p>
        )
      ) : (
        <p>No hay categorías disponibles.</p>
      )}
    </div>
  )

}