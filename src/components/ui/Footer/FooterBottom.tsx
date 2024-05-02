import { principalFont } from "@/config/fonts"

export const FooterBottom = () => {
  return (
    <div className="mx-auto px-3.5 max-w-7xl md:max-w-3xl xl:max-w-6xl w-full">
        <p className={`${principalFont} font-bold text-center py-5`}>© 2024 AlucinaMKT. All rights reserved.</p>
    </div>
  )
}