import { InfoGridContact, Maps } from "@/components"
import { principalFont } from "@/config/fonts"

const ContacView = () => {


    return (
        <div className="mx-auto px-3.5 max-w-7xl md:max-w-3xl xl:max-w-6xl w-full">
            <div className="w-full py-5">
                <InfoGridContact />
            </div>
            <form
                className="bg-custom-gray p-10 w-full rounded-xl my-5"
            >
                <span className={` ${principalFont} font-bold text-2xl text-green-500 `}>
                    Contáctanos
                </span>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-[48.5%] mt-5">
                        <input
                            type="text"
                            required
                            placeholder="Nombre"
                            className={` ${principalFont} input-style w-full`}
                            style={{margin: 0}}
                        />
                    </div>
                    <div className="w-full md:w-[48.5%] mt-5">
                        <input
                            type="email"
                            required
                            placeholder="Email"
                            className={` ${principalFont} input-style w-full`}
                            style={{margin: 0}}
                        />
                    </div>
                    <div className="w-full md:w-[48.5%] mt-5">
                        <input
                            type="number"
                            required
                            placeholder="Teléfono"
                            className={` ${principalFont} input-style w-full`}
                            style={{margin: 0}}
                        />
                    </div>
                    <div className="w-full md:w-[48.5%] mt-5">
                        <input
                            type="text"
                            required
                            placeholder="Asunto"
                            className={` ${principalFont} input-style w-full`}
                            style={{margin: 0}}
                        />
                    </div>
                    <div className="w-full mt-5">
                        <textarea 
                            rows={3} 
                            cols={3}
                            placeholder="Mensaje"
                            className={ ` ${principalFont} input-style w-full ` }
                            style={{margin: 0, height:100}} 
                        />
                    </div>
                </div>
                <button type="submit" className="btn-primary mt-5">
                    Enviar
                </button>
            </form>
            <div className="w-full py-5">
                <Maps />
            </div>
        </div>
    )
}

export default ContacView