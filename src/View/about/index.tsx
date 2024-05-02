import { principalFont } from "@/config/fonts"
import Image from "next/image"

const AboutView = () => {
    return (
        <div className="min-h-[84.2vh] flex justify-center items-center">
            <div className="mx-auto px-3.5 max-w-7xl md:max-w-3xl xl:max-w-6xl w-full">
                <div className="flex flex-wrap flex-col-reverse md:flex-row">
                    <div className="w-full md:w-1/2 p-0 md:pe-3.5">
                        <span className={` ${principalFont} font-bold text-2xl text-center  block text-green-500 mb-3`}>
                            Minimalin E-Commerce
                        </span>
                        <span className={` ${principalFont} text-md text-justify  block mb-3`}>
                            Minimalin E-Commerce is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide. Established in 1191, our company has rapidly grown to become a prominent player in the eCommerce industry. Our mission is to provide customers with a seamless and convenient shopping experience while offering a diverse selection of high-quality products.
                            <br />
                            <br />
                            Minimalin E-Commerce is dedicated to setting new standards in the eCommerce landscape, providing convenience, choice, and quality to our valued customers.
                        </span>
                    </div>
                    <div className="w-full md:w-1/2 p-0 md:ps-3.5 mb-5">
                        <Image
                            src="https://minimalin-demo.myshopify.com/cdn/shop/files/owner-getting-ready-reopening_770x.jpg?v=1691770343"
                            alt="nosotros"
                            className="w-full object-cover rounded-custom"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutView