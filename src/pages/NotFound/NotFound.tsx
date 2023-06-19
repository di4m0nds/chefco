import { useEffect } from "react"

function NotFound() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className="w-full h-screen text-center pb-[80px]">
      <h1 className="mx-[40px] lg:mx-[200px] pt-[100px] font-semibold text-[30px]">¡Oh no, algo se ha quemado!</h1>
      <p className="mx-[40px] lg:mx-[200px] mt-[50px] font-regular text-[20px]">Parece que la receta que buscas ha sido devorada por un monstruo glotón.</p>

      <div className="mx-[60px] lg:mx-[220px] mt-[50px]">
        <div className="w-full h-2 bg-gray-300 rounded-[50px]" />
      </div>
      <p className="mx-[80px] lg:mx-[240px] mt-[10px] font-regular text-[20px] text-gray-400">Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  )
}

export default NotFound
