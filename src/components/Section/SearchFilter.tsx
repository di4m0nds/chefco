import { ENVIRONMENT_CONSTANTS } from "../../utils/environment"
import { ProductModel } from "../../utils/exportInterfaces"

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
// import FilterOutlineIcon from "@mui/icons-material/TuneOutlined"

function SearchFilter({ setProducts } : { setProducts: React.Dispatch<React.SetStateAction<ProductModel[] | null>> }) {
    let filterProducts: ProductModel[] = []

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
       if (e.target.value === "") {
        setProducts(ENVIRONMENT_CONSTANTS.DATA)
       } else {
         filterProducts = ENVIRONMENT_CONSTANTS.DATA.filter((item) => item.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))

         if (setProducts != null) {
            setProducts(filterProducts)
         }
       }
    }

    return (
      <div className="absolute top-[-60px] w-full flex justify-center items-center">
        <form className="relative" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="bg-secondary input-search md:w-[250px] lg:w-[850px] h-[40px] lg:h-[50px] rounded-[10px] px-5 py-2 shadow-lg"
            placeholder="Buscar"
            onChange={handleSearch}
          />

          <button aria-label="Buscar producto" type="submit" className="absolute right-[20px] top-[8px] lg:top-[12px]">
            <SearchOutlinedIcon fontSize="medium" style={{ color: 'gray' }} />
          </button>
        </form>

        {/*<FilterOutlineIcon fontSize="large" className="ml-[20px] lg:ml-[50px]" />*/}
      </div>
    )
}

export default SearchFilter
