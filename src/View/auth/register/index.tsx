'use client'

import { useState } from "react";

import { principalFont } from "@/config/fonts";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const RegisterView = () => {

    const router = useRouter()

    const [errors, setErrors] = useState<String>("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors("");

    }

    return (
        <div className="min-h-[84.2vh] flex justify-center items-center">

            <div className="bg-custom-gray mx-7 w-full max-w-[570px] p-5 rounded-custom">
                <p className={` ${principalFont} text-4xl font-bold text-green-500 text-center`}>
                    Registrate
                </p>
                <p className={` ${principalFont} text-lg text-center mt-3`}>
                    Please login using account detail bellow.
                </p>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-wrap justify-between w-full">
                        <div className="w-full md:w-[48.5%] mt-5">
                            <input
                                type="email"
                                required
                                placeholder="email"
                                className={` ${principalFont} input-style w-full `}
                                style={{margin:0}}
                            />
                        </div>
                        <div className="w-full md:w-[48.5%] mt-5">
                            <input
                                type="password"
                                required
                                placeholder="********"
                                className={` ${principalFont} input-style w-full `}
                                style={{margin:0}}
                            />
                        </div>
                        <div className="w-full md:w-[48.5%] mt-5">
                            <input
                                type="text"
                                required
                                placeholder="Nombre"
                                className={` ${principalFont} input-style w-full `}
                                style={{margin:0}}
                            />
                        </div>
                        <div className="w-full md:w-[48.5%] mt-5">
                            <input
                                type="text"
                                required
                                placeholder="Dirección"
                                className={` ${principalFont} input-style w-full `}
                                style={{margin:0}}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn-primary w-full mt-5">
                        Crear Cuenta
                    </button>
                </form>
                <span className={` ${principalFont} block text-center mt-2 text-sm text-red-600 `}>
                    {errors}
                </span>
                <div className="flex justify-center items-center mt-4 hover:text-green-500">
                    <Link
                        href="/auth/login"
                    >
                        Entrar
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default RegisterView