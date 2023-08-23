import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Product } from '../../components';
import { useCart } from '../../hooks';
import ShoppingInfoModal from './ShoppingInfoModal';
import { CartModel } from '../../utils/exportInterfaces';
import { ENVIRONMENT_CONSTANTS } from '../../utils/environment';
import { useEffect } from 'react';
import { getDiscount, getTotalCountDiscount } from '../../utils/functions';

const discounter = (cart: CartModel[], price_discount: number, individual_price: number, tag: string): number => {
  if (cart.length === 0) return 0

  const cartTagged = cart.filter(item => item.product.tag === tag)
  if (cartTagged === null || cartTagged.length <= 0) return 0
  let cartQuantity = 0
  cartTagged.forEach((item) => {
    cartQuantity += item.quantity
  })

  if (!cartQuantity || cartQuantity === 0) return 0
  // if (cartTagged.length === 1) return individual_price

  // const totalDiscount = getDiscount(cartCount, price_discount, individual_price)
  const totalDiscount = getDiscount(cartQuantity, price_discount, individual_price)
  if (totalDiscount === null && cart.length > 0) return individual_price

  return totalDiscount ?? 0
}

const sendMesasge = (cart: CartModel[], total:number, totalWithoutDiscount:number) => {
  const { WAME_LINK, HEAD_MESSAGE, FOOT_MESSAGE }  = ENVIRONMENT_CONSTANTS
  let products = "\n"

  cart.forEach(item => {
    if (item.quantity > 0) {
      products += `- *${item.product.name}* ${item.quantity > 1 ? "(Cantidad: "+item.quantity+")" : '' }\n`
    }
  })

  let discountMessage = '';
  if (totalWithoutDiscount !== total) {
    const discountPercentage = 100 - ((totalWithoutDiscount * 100) / total);
    const formattedDiscount = Math.floor(discountPercentage);
    discountMessage = ` (Descuento del ${formattedDiscount}%)`;
  }

  products += `\n*TOTAL:* $${total}${discountMessage}\n`;

  const url = `${WAME_LINK}${HEAD_MESSAGE}${encodeURIComponent(products+"\n")}${FOOT_MESSAGE}`

  window.open(url, '_blank')
}

function Shopping() {
    const { cart, clearCart } = useCart()

    let totalWithoutDiscount = 0
    cart.forEach(item => totalWithoutDiscount += item.product.price * item.quantity)

    let total = 0
    let totalSorrentinos = 0
    let totalLasagna = 0
    let cartCount = 0
    let totalCountDiscount = 0

    cart.forEach(item => cartCount += item.quantity)
    totalCountDiscount = getTotalCountDiscount(cartCount)

    // SORRENTINOS Only
    totalSorrentinos = discounter(
      cart,
      ENVIRONMENT_CONSTANTS.PRICE_DISCOUNT_SORRENTINOS,
      ENVIRONMENT_CONSTANTS.PRICE_SORRENTINOS,
      ENVIRONMENT_CONSTANTS.TAG_SORRENTINOS,
    )
    // LASAGNA Only
    totalLasagna = discounter(
      cart,
      ENVIRONMENT_CONSTANTS.PRICE_DISCOUNT_LASAGNA,
      ENVIRONMENT_CONSTANTS.PRICE_LASAGNA,
      ENVIRONMENT_CONSTANTS.TAG_LASAGNA,
    )

    total = totalLasagna + totalSorrentinos

    const openMessage = () => sendMesasge(cart, total, totalWithoutDiscount)

    useEffect(() =>{
      window.scrollTo(0, 0);

      if (cartCount < 1) {
        clearCart()
      }
    }, [cartCount])

    return (
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%", transition: { duration: 1, type: "spring" } }}
        exit={{ opacity: 1, transition: { duration: 0.1 } }}

        className="w-full px-[45px] lg:px-[200px]"
      >
        <div className='w-full flex justify-end'>
          <Link to="/" className="w-[40px] mt-[35px]">
            <CloseOutlinedIcon fontSize="large" />
          </Link> 
        </div>

        <section className="w-full">
          <h1 className="font-medium text-gray-500 text-2xl mb-5">Tu Carrito</h1>

          <p>CANT. PRODUCTOS:</p>
          <p className="font-semibold mb-2">{cartCount.toString()}</p>

          <p>MONTO TOTAL</p>
          <div className="mb-2 flex items-end">
            <p className="font-semibold text-[22px]">${total.toString()}</p>
            {totalWithoutDiscount > 0 && totalCountDiscount > 0 &&
              <p className="font-semibold line-through ml-3 text-gray-500 text-[18px]">${totalWithoutDiscount.toString()}</p>
            }
          </div>

          <div className="w-full h-2 rounded-[50px] bg-gray-300 my-5" />

          <motion.button
            aria-label="Abrir enlace externo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onClick={openMessage}
            className="px-8 py-3 text-white bg-green-500 font-medium rounded-[10px] shadow-lg"
          >
            ENCARGAR YA
          </motion.button>

          <ShoppingInfoModal />

          <div className="w-full flex flex-wrap lg:justify-center my-[80px]">
            {cart.length > 0 ? (
              cart.map((item, index) => {
                const repeat = new Array(item.quantity).fill(null)
                return (
                  <div className="px-5 w-[28rem]" key={index}>{repeat.map((_, i) => <Product key={i} product={item.product} />)}</div>
                )
              })
            ) : (
              <div className="py-[30px]">
                <p className="text-gray-300 font-semibold text-center text-[24px]">No se encontraron resultados.</p>
              </div>
            )}
          </div>
        </section>
      </motion.div>
    )
}

export default Shopping
