import { principalFont } from "@/config/fonts"
import { useUIStore } from "@/store";
import { useCartStore } from "@/store/cart/cart-store";

interface Props {
  total: number;
}

type IdProductsDataCar = {
  id: string,
  qty: number
}

type DataCar = {
  nick: string,
  id_user: string,
  id_products: string
}

export const TotalSidebar = ({ total }: Props) => {

  const getSmsCompra = useCartStore( state => state.getSmsCompra )
  const removeAllProduct = useCartStore( state => state.removeAllProduct )
  const closeMenu = useUIStore(state => state.closeSideMenu)
  const car = useCartStore(state => state.cart)

  const fetchComprar = async (data: DataCar): Promise<void> => {

    const url = `${process.env.NEXT_PUBLIC_BAKEND_URL}registerSell`;
  
    const response = await fetch(url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
  
    const res = await response.json();
    console.log("17 =>", res)
  
    if(response.status == 200){
      getSmsCompra(`compra exitosa su codigo es: ${res.venta.code_order}`)
      removeAllProduct()
      closeMenu()
    }else{
      getSmsCompra(`error`)
    }
  
  };  
  
  const handleSubmit = () => {

    const dataProducts: IdProductsDataCar[] = car.map((e) => (
      {
        id: e.id,
        qty: e.qty
      }
    ))

    const data: DataCar = {
      nick: "user1",
      id_user: "64y6365a-d2c6-4ce3-95d3-e15aa25b65ap",
      id_products: JSON.stringify(dataProducts)
    }
    
    fetchComprar(data)
    
  }



  return (
    <div className=" border-y mt-5 py-3">

      <div className="flex flex-wrap justify-between mb-3">
        <span className={ ` ${principalFont} text-2xl font-bold ` } >
          Total:
        </span>
        <span className={ ` ${principalFont} text-2xl font-bold text-green-500 ` }>
          ${total}
        </span>
      </div>

      <button className="btn-primary w-full" onClick={ () => handleSubmit() } >
        Comprar Ahora
      </button>
    </div>
  )

}