import { Link, useLocation } from "react-router-dom"

import { halfLogo } from "../../assets"

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ArrowBack from "@mui/icons-material/UndoOutlined"
import { useCart } from "../../hooks"

function Actions() {
  const { cart } = useCart()
  let cartCount = 0
  cart.forEach(item => cartCount += item.quantity)

  const endpoint = useLocation().pathname

  return (
    <>
      <div className="w-[20px] h-[80px] bottom-0 left-0 fixed z-50">
        <div className="relative">
          <div className="absolute left-5 bg-white w-[50px] h-[50px] rounded-[50%] shadow-lg">
            <Link to="/">
              <img src={halfLogo} alt="logo" className="w-[50px] h-[50px] rounded-[50%]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[20px] h-[80px] bottom-0 right-0 fixed z-50">
        <div className="relative">
          <div className="absolute right-5 bg-white w-[150px] h-[50px] rounded-[10px] shadow-lg py-2">
            <div className="w-full flex justify-evenly items-center">
              {endpoint !== '/'
                ? history.state.key
                  ? <button aria-label="Volver hacia atras" onClick={() => history.back()}>
                    <ArrowBack fontSize="large" />
                  </button>
                  : <Link to="/">
                    <ArrowBack fontSize="large" />
                  </Link>
                : <a href="#search"><SearchOutlinedIcon fontSize="large" /></a>
              }

              <div className="w-2 h-[35px] bg-tertiary rounded-[50px]" />

              <Link to="/shopping">
                <div className="relative">
                  <ShoppingCartIcon fontSize="large" />
                  <p className="absolute bottom-[-8px] right-[-8px]">{cartCount}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Actions
