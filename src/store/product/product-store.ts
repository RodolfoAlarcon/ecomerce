import { ProductsList } from "@/types/ProductsTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware"

interface State {

    products: ProductsList[];


    addProductToProducts: (product: ProductsList[]) => void;

}

export const useProductStore = create<State>()(

    persist(

        (set, get) => ({

            products: [],

            addProductToProducts: (product: ProductsList[]) => {

                const { products } = get();

                    set({ products: product })
                    return;

            }

        }),

        {
            name: 'shopping-cart'
        }
    )

)