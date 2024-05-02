'use client'

import { useState } from "react";

import { principalFont } from "@/config/fonts";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { FormDataAuth } from "@/types/UserAuthType";

const initialData = {
    email: "",
    password: ""
}

const LoginView = () => {

    const router = useRouter()

    const [errors, setErrors] = useState<String>("")
    const [formData, setFormData] = useState<FormDataAuth>(initialData)


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors("");

        const { email, password } = formData

        const responseNextAuth = await signIn("credentials", {
            email,
            password,
            redirect: false
        })

        

    }

    return (
        <div className="min-h-[84.2vh] flex justify-center items-center">

            <div className="bg-custom-gray mx-7 w-full max-w-[570px] p-5 rounded-custom">
                <p className={` ${principalFont} text-4xl font-bold text-green-500 text-center`}>
                    Login
                </p>
                <p className={` ${principalFont} text-lg text-center mt-3`}>
                    Please login using account detail bellow.
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        required
                        placeholder="email"
                        className={` ${principalFont} input-style w-full mt-10 `}
                        onChange={event =>
                            setFormData(prevFormData => ({ ...prevFormData, email: event.target.value }))
                        }
                    />
                    <input
                        type="password"
                        required
                        placeholder="********"
                        className={` ${principalFont} input-style w-full`}
                        onChange={event =>
                            setFormData(prevFormData => ({ ...prevFormData, password: event.target.value }))
                        }
                    />
                    <button type="submit" className="btn-primary w-full">
                        Entrar
                    </button>
                </form>
                <span className={ ` ${principalFont} block text-center mt-2 text-sm text-red-600` }>
                    {errors}
                </span>
                <div className="flex justify-center items-center mt-4 hover:text-green-500">
                    <Link
                        href="/auth/register"
                    >
                        Crear Cuenta
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default LoginView