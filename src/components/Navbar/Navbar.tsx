import { Link } from  'react-router-dom'

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { fullLogoPNG } from "../../assets"
import { useCart } from '../../hooks'

function Navbar() {
  const { cart } = useCart()

  let cartCount = 0
  cart.forEach(item => cartCount += item.quantity)

  return (
      <div className="relative">
        <div className="navbar w-full flex justify-evenly z-50">
          <div className="navbar-search relative top-[50px]">
            <a href="#search">
              <SearchOutlinedIcon fontSize="large" style={{ color: 'white' }} />
            </a>
          </div> 

          <div className="navbar-logo">
            <Link to="/" className="rounded-full ">
              <img alt="logo" src={fullLogoPNG} className="rounded-full w-[200px] h-[200px] rounded-full" />
            </Link>
          </div> 

          <div className="navbar-shopping-cart relative top-[50px]" >
            <Link to="/shopping" className="relative">
              <ShoppingCartIcon fontSize="large" style={{ color: 'white' }} />
              <p className="absolute bottom-[-15px] right-[-5px] text-white">{cartCount}</p>
            </Link>
          </div> 
        </div>
      </div>
  )
}

export default Navbar
