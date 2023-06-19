import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { ProductModel } from "../../utils/exportInterfaces";
import { useLocation } from "react-router-dom";
import { NotFound } from "..";
import { ENVIRONMENT_CONSTANTS } from "../../utils/environment";
import DetailsContent from "./DetailsContent";

function Details() {
    const [product, setProduct] = useState<ProductModel | null>(null)

    const location = useLocation()
    const endpoint = location.pathname.split('/')
    const product_id = endpoint[endpoint.length - 1]

    useEffect(() =>{
      window.scrollTo(0, 0);

      (async () => {
        await fetch(ENVIRONMENT_CONSTANTS.DOMAIN + ENVIRONMENT_CONSTANTS.ENDPOINT_DATA)
          .then(response => {
            return response.json()
          })
          .then(data => {
            if (Array.isArray(data.data)) {
              if (data.data) {
                  return (data.data as ProductModel[]).find((item => item.id.toString() === product_id.toString()))
              }
            } else {
                console.error("Invalid data")
            }
          })
          .then(data => {
            if (data != null){
                setProduct(data)
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
        className="mb-[70px]"
      >
        {product ? (
          <DetailsContent product={product} />
        ):(
          <NotFound />
        )}
      </motion.div>
    )
}

export default Details
