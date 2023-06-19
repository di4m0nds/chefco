import SearchFilter from "./SearchFilter"

import { Product } from ".."
import { SectionProps } from "../../utils/exportInterfaces"
function Section({ products, setProducts } : SectionProps) {

  return (
    <div className="relative w-full min-h-[300px] lg:min-h-[400px]">
      <SearchFilter setProducts={setProducts} />

      <div className="mx-[45px] md:mx-[200px] lg:mx-[290px] xl:mx-[400px] lg:pt-10">
        <p className="text-[28px] text-gray-600 mb-[20px] lg:hidden">Descubrir</p>

        <div className="flex flex-wrap lg:justify-evenly lg:mx-4">
          {products &&
            products.length > 0
              ? products.map((product) => <Product key={product.id} product={product} />)
              : <div className="py-[30px]">
                  <p className="text-gray-300 font-semibold text-center text-[24px]">No se encontraron resultados.</p>
                </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Section
