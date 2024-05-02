import { CartProduct } from "@/types/StoresTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware"

interface State {

    cart: CartProduct[];
    smsCompra: string;


    getTotalItem: () => number;
    getTotalPrice: () => number;

    addProductTocart: (product: CartProduct) => void;
    removeProduct: (id: string) => void;
    removeAllProduct: () => void;

    getSmsCompra: (sms: string) => void;

}

export const useCartStore = create<State>()(

    persist(

        (set, get) => ({

            cart: [],
            smsCompra: "",


            getTotalItem: () => {
                const { cart } = get();
                return cart.length
            },

            getTotalPrice: () => {
                const { cart } = get();
                return 1
            },

            addProductTocart: (product: CartProduct) => {

                const { cart } = get();

                const productInCart = cart.some(
                    (item) => item.id === product.id
                )

                if (!productInCart) {
                    set({ cart: [...cart, product] })
                    return;
                }

            },

            removeProduct: (id: string) => {
                
                const { cart } = get();

                const updateCartProdcts = cart.filter(
                    (item) => item.id != id
                )

                set({ cart: updateCartProdcts })
                return;

            },

            removeAllProduct: () => {
                const { cart } = get();

                set({ cart: [] })
                return;
            },

            getSmsCompra: (sms: string) => {
                const { smsCompra } = get();

                set({ smsCompra: sms })
                return;
            }

        }),

        {
            name: 'shopping-cart'
        }
    )

)