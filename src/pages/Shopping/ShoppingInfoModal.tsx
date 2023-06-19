import { useState } from "react";

import { motion } from "framer-motion"

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function ShoppingInfoModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button aria-label="Informacion de encargo" onClick={openModal} className="ml-2">
        <InfoOutlinedIcon fontSize="large" className="text-blue-500"/>
      </button>

      {isModalOpen && (
        <div className='w-full flex justify-center'>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%", transition: { duration: 1, type: "spring" } }}
            exit={{ opacity: 1, transition: { duration: 0.6 } }}
            className="absolute flex items-center justify-center z-50 top-[60px]"
          >
            <div className="bg-white w-4/5 lg:w-2/3 p-6 rounded-lg shadow-lg relative">
              <div className='w-full flex items-center mb-4'>
                <h2 className="w-3/4 text-xl">Instrucciones de compra</h2>
                <div className='w-1/4 relative h-[50px]'>
                  <button aria-label="Volver al inicio" className="absolute right-0 top-0" onClick={closeModal} >
                    <CloseOutlinedIcon fontSize="large" />
                  </button> 
                </div>
              </div>
              <div className="w-full h-1 rounded-[50px] bg-gray-300 mb-5" />
              <p className="text-gray-800">
                Para realizar una compra, necesitas tener WhatsApp abierto en la web o tener la aplicación de WhatsApp instalada. Al hacer clic en el botón "ENCARGAR YA", se abrirá automáticamente WhatsApp para que puedas enviar un mensaje al celular de CHEFCO PASTAS.
              </p>
              <button aria-label="Cerrar ventana" onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default ShoppingInfoModal
