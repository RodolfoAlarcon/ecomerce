
'use client'

import { toast } from "react-toastify";
import React, { useEffect } from 'react';  // Asegúrate de importar React
import { useCartStore } from "@/store/cart/cart-store";

interface Props {
    children: React.ReactNode;
}

const ToastProvider = ({ children }: Props) => {

    const sms = useCartStore(state => state.smsCompra)
    const getSmsCompra = useCartStore(state => state.getSmsCompra)

    if (sms.length != 0) {
        toast.success(sms)
        getSmsCompra("")
    }

    return <>{children}</>;
}

export default ToastProvider;
