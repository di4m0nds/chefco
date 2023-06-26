import { useState } from 'react';
import { useCart } from '../../hooks';
import { Link, useLocation } from 'react-router-dom'

import { LazyMotion, domAnimation, motion } from "framer-motion"
import { previewPictures } from "../../utils/exportImages"

import { ProductProps } from '../../utils/exportInterfaces';
import { AddToShoppingCart, Messages } from '..';

import RemoveOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined';

function Product({ product }: ProductProps) {
  const { removeFromCart } = useCart()
  const [action, setAction] = useState<boolean>(false)

  const location = useLocation()
  const { id, name, price, portion, pic_preview } = product
  const endpointDetails = `/product/details/${id.toString()}`

  const handleDeletion = () => removeFromCart(product)

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 1 }}
        className="product relative w-full lg:w-[400px] flex mb-5 px-2 py-2 bg-white rounded-[20px] shadow-lg"
      >
        <div className='absolute top-[-40px] w-full justify-center items-center'><Messages action={action} textUnable={true} /></div>
        <div className="image-product w-[120px] h-[120px] lg:w-[40%] lg:h-[150px] bg-tertiary rounded-[20px] mr-2">
          <Link to={endpointDetails} className="w-full h-full">
            <img src={previewPictures[pic_preview]} alt="producto" className="rounded-[20px] w-full h-full" />
          </Link>
        </div>
        <div className="w-[50%] lg:w-[60%] text-subtitle-content">
          <p className="mt-2 mb-2 font-medium text-subtitle">{name}</p>
          <p className="font-semibold text-subtitle">${price.toString()} /x{portion.toString()}</p>
        </div>

        {location.pathname.includes('shopping')
          ? (
            <button
              aria-label="Eliminar producto"
              onClick={handleDeletion}
              className="absolute bottom-4 right-4 bg-red-500 text-white font-medium px-1 py-1 rounded-[50%] button-shopping"
            >
              <RemoveOutlinedIcon fontSize='medium' className='text-white-500' />
            </button>
          )
          : <div className="absolute bottom-5 right-5 button-shopping">
            <AddToShoppingCart fontSize="medium" fontColor='text-black' setAction={setAction} product={product} />
          </div>
        }
      </motion.div>
    </LazyMotion>
  )
}

export default Product
