import { useState, useEffect } from "react"
import { motion } from 'framer-motion'

import { Footer, Header, Section } from '../../components'

import { ProductModel } from '../../utils/exportInterfaces'
import { ENVIRONMENT_CONSTANTS } from "../../utils/environment"

function Home() {
  const [products, setProducts] = useState<ProductModel[] | null>(null)

  useEffect(() => {
    (async () => {
      await fetch(ENVIRONMENT_CONSTANTS.DOMAIN + ENVIRONMENT_CONSTANTS.ENDPOINT_DATA)
        .then(response => {
          return response.json()
        })
        .then(data => {
          if (Array.isArray(data.data)) {
            setProducts(data.data)
            ENVIRONMENT_CONSTANTS.DATA = data.data
          } else {
            console.error("Invalid data")
          }
        })
        .catch(error => console.error(error))
    })();
  }, [])

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%", transition: { duration: 1, type: "spring" } }}
      exit={{ opacity: 1, transition: { duration: 0.1 } }}

      className="relative w-full"
    >
      <Header />
      {products != null ? <Section products={products} setProducts={setProducts} /> : ''}

      <div className="mt-[80px]">
        <Footer />
      </div>
    </motion.div>
  )
}

export default Home
