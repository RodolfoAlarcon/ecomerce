import { ProductsList } from "@/types/ProductsTypes"
import { ProductGridItem } from "./ProductGridItem"

interface Props {
  quantityGrid: number,
  data:ProductsList[],
  loading: Boolean,
}

export const ProductGrid = ({ quantityGrid, data, loading }: Props) => {

  if (loading) {
    return (
      <div className={quantityGrid == 4 ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8" : "grid grid-cols-2 sm:grid-cols-3 gap-8"}>
        <div className="overflow-hidden fade-in">
          <div
            className="rounded-custom bg-custom-gray w-full h-[270px] overflow-hidden flex items-center justify-center animate-pulse space-y-4"
          >
          </div>
          <div className="w-20 mb-2 mt-2 h-5 bg-custom-gray m-auto rounded-lg animate-pulse space-y-4"></div>
          <div className="w-10 mb-2 h-5 bg-custom-gray m-auto rounded-lg animate-pulse space-y-4"></div>
        </div>
        <div className="overflow-hidden fade-in">
          <div
            className="rounded-custom bg-custom-gray w-full h-[270px] overflow-hidden flex items-center justify-center animate-pulse space-y-4"
          >
          </div>
          <div className="w-20 mb-2 mt-2 h-5 bg-custom-gray m-auto rounded-lg animate-pulse space-y-4"></div>
          <div className="w-10 mb-2 h-5 bg-custom-gray m-auto rounded-lg animate-pulse space-y-4"></div>
        </div>
        <div className="overflow-hidden fade-in">
          <div
            className="rounded-custom bg-custom-gray w-full h-[270px] overflow-hidden flex items-center justify-center animate-pulse space-y-4"
          >
          </div>
          <div className="w-20 mb-2 mt-2 h-5 bg-custom-gray m-auto rounded-lg animate-pulse space-y-4"></div>
          <div className="w-10 mb-2 h-5 bg-custom-gray m-auto rounded-lg animate-pulse space-y-4"></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={quantityGrid == 4 ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8" : "grid grid-cols-2 sm:grid-cols-3 gap-8"}>

        {data.map((e) =>
          <ProductGridItem
            key={e.id}
            imgs={e.img}
            name={e.name}
            price={e.price}
            id={e.id}
          />
        )}

      </div>
    )
  }

}