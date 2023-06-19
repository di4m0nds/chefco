import { Navbar } from ".."

import { LazyMotion, domAnimation, motion } from "framer-motion"

function Header() {
  return (
      <div className="header-section w-full h-full bg-cover bg-no-repeat bg-center">
        <div className="relative bg-gradient-to-b from-black via-transparent to-black">
          <Navbar />

          <div className="w-full h-[450px] bg-transparent flex justify-center items-end">
            <div className="w-[300px] lg:w-[800px] pb-[140px] lg:pb-[160px]" >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6, duration: 1.6, type: "spring" } }}
                exit={{ opacity: 1, transition: { duration: 0.1 } }}
                className="text-white text-[30px] lg:text-[42px] font-semibold text-center"
              >
                ¡Descubre el sabor auténtico de la pasta en Chefco Pastas!
              </motion.h1>
            </div>
          </div>

          <div className="w-full flex items-center justify-evenly z-50">
            <LazyMotion features={domAnimation}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -1, right: 1 }}
                transition={{ duration: 1 }}
                className="absolute bottom-[100px] w-[100px] h-2 bg-tertiary rounded-[50px]" id="search"
              ></motion.div>
            </LazyMotion>
          </div>

          <div className="absolute bottom-[-10px] w-full h-[100px] bg-tertiary rounded-t-[50px]"></div>
        </div>
      </div>
  )
}

export default Header
