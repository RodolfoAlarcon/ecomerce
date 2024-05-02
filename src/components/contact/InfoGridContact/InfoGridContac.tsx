import { principalFont } from "@/config/fonts"

export const InfoGridContact = () => {
  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-full lg:w-1/3 px-2 mb-4">
        <div className="bg-white px-5 py-14 h-full flex flex-col justify-between border rounded-2xl">
          <h2 className={ ` ${principalFont} font-bold text-center text-lg mb-2 text-green-500 ` }>Email</h2>
          <p  className={ ` ${principalFont} text-center ` } >example@example.com</p>
          <p className={ ` ${principalFont} text-center ` }>example2@example.com</p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 px-2 mb-4">
        <div className="bg-white px-5 py-14 h-full flex flex-col justify-between border rounded-2xl">
          <h2 className={ ` ${principalFont} font-bold text-center text-lg mb-2 text-green-500 ` }>Teléfono</h2>
          <p className={ ` ${principalFont} text-center ` } >+0123-456789</p>
          <p className={ ` ${principalFont} text-center ` } >+9879-654321</p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 px-2 mb-4">
        <div className="bg-white px-5 py-14 h-full flex flex-col justify-between border rounded-2xl">
          <h2 className={ ` ${principalFont} font-bold text-center text-lg mb-2 text-green-500 ` }>Dirección</h2>
          <p className={ ` ${principalFont} text-center ` } >Your Street Address, City Name, State, ZIP Code, Country.</p>
        </div>
      </div>
    </div>
  );
};