import { useState } from "react";

import { ProductModel } from "../../utils/exportInterfaces";
import { Link } from "react-router-dom";

import { coverPictures } from "../../utils/exportImages"

import { fullLogoPNG } from "../../assets";

import { motion, domAnimation, LazyMotion } from "framer-motion"
import { AddToShoppingCart, Messages } from "../../components";

function DetailsContent({ product }: { product: ProductModel }) {
  const [action, setAction] = useState<boolean>(false)

  const { name, description, price, portion, pic_cover } = product

  return (
    <>
      <div className="relative w-full">
        <Messages action={action} />
        <div
          style={{ backgroundImage: `url(${coverPictures[pic_cover]})`}}
          className="w-full flex justify-between z-50 bg-cover lg:bg-center bg-no-repeat bg-left-top bg-fixed h-[400px] md:h-[600px] lg:h-[700px]"
        >
          <div className="navbar-logo relative top-[-40px] left-[-40px]">
            <Link to="/" className="rounded-full">
              <img alt="logo" src={fullLogoPNG} className="rounded-full w-[200px] h-[200px] rounded-full" />
            </Link>
          </div> 

          <div className="navbar-shopping-cart relative top-[30px] right-[30px]" >
            <div className="px-4 py-4 bg-black rounded-[50%] shadow-lg">
              <AddToShoppingCart fontSize="large" fontColor="text-white" setAction={setAction} product={product} />
            </div>
          </div> 
        </div>

        <div className="w-full flex items-center justify-evenly z-50">
          <LazyMotion features={domAnimation}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.1 }}
              transition={{ duration: 1.2 }}
              className="absolute bottom-[80px] w-[100px] h-2 bg-tertiary rounded-[50px]"
            ></motion.div>
          </LazyMotion>
        </div>

        <div className="absolute bottom-[-10px] w-full h-[80px] bg-tertiary rounded-t-[50px]"></div>

        <div className="relative">
          <h1 className="absolute top-[-50px] font-medium text-[28px] text-gray-800 text-left w-full px-[45px] md:px-[200px] lg:text-center">
            {name}
          </h1>
        </div>
      </div>

      <section className={`relative py-[50px] px-[45px] ${name.length > 33 ? "mt-[50px]" : ""} md:px-[200px] lg:px-[290px] xl:px-[400px] text-[18px]`}>
        <p className="font-bold pt-3">PRECIO:</p>
        <p>${price.toString()}</p>
        <p className="font-bold pt-3">DESCRIPCIÓN:</p>
        <p>{description}</p>
        <p className="font-bold pt-3">CANTIDAD:</p>
        <p>{portion.toString()}</p>
      </section>
    </>
  )
}

export default DetailsContent
