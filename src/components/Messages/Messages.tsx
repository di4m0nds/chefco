import { motion } from "framer-motion";

import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useEffect, useState } from "react";

function Messages({ action } : { action: boolean }) {
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    setIsActive(action)
  }, [action])

  return isActive ? (
    <div className="w-full flex justify-center items-center">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%", transition: { duration: 1, type: "spring" } }}
        exit={{ opacity: 1, transition: { duration: 0.6 } }}
        className="absolute w-[250px] h-auto top-[80px] bg-green-400 text-white z-50 rounded-[10px] shadow-lg px-5 py-4 flex items-center justify-between"
      >
        <CheckOutlinedIcon fontSize="large" className="w-1/4" />
        <p className="font-medium text-[18px] w-3/4">
          Agregado correctamente!
        </p>
      </motion.div>
    </div>
  ): <div />
}

export default Messages
