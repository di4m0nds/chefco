import { ProductModel } from "./exportInterfaces"

interface ENV {
  DOMAIN: string
  ENDPOINT_DATA: string
  DATA: ProductModel[]
  WAME_LINK: string
  HEAD_MESSAGE: string
  FOOT_MESSAGE: string
  TAG_SORRENTINOS: string
  TAG_LASAGNA: string
  PRICE_SORRENTINOS: number
  PRICE_LASAGNA: number
  PRICE_DISCOUNT_SORRENTINOS: number
  PRICE_DISCOUNT_LASAGNA: number
}

export const ENVIRONMENT_CONSTANTS: ENV = {

  // DOMAIN: import.meta.env.VITE_BASE_URL,
  // DOMAIN: "http://localhost:5173/",
  DOMAIN: "https://chefcopastas.netlify.app",
  ENDPOINT_DATA: "/data.json",

  DATA: [],
  
  TAG_SORRENTINOS: 'sorrentinos',
  PRICE_SORRENTINOS: 1200.00,
  PRICE_DISCOUNT_SORRENTINOS: 2200.00,
  
  TAG_LASAGNA: 'lasagnas',
  PRICE_LASAGNA: 2700.00,
  PRICE_DISCOUNT_LASAGNA: 5000.00,
  
  WAME_LINK: "https://wa.me/2665005091?text=",
  HEAD_MESSAGE: "%2ACHEFCO%20PASTAS%20-%20Pedido%20en%20Proceso%2A%0A%0A%C2%A1Hola%21%20Soy%20de%20CHEFCO%20PASTAS%20y%20hemos%20recibido%20tu%20pedido.%20A%20continuaci%C3%B3n%2C%20te%20mostramos%20los%20productos%20que%20has%20encargado%3A",
  FOOT_MESSAGE: "Agradecemos%20tu%20preferencia%20y%20te%20informamos%20que%20estaremos%20atendiendo%20tu%20pedido%20en%20breve.%20Te%20pedimos%20que%20aguardes%20a%20que%20te%20contestemos%20para%20brindarte%20m%C3%A1s%20detalles%20y%20coordinar%20la%20entrega.%0A%0ASi%20tienes%20alguna%20pregunta%20adicional%2C%20no%20dudes%20en%20consultarnos.%20%C2%A1Estamos%20aqu%C3%AD%20para%20ayudarte%21%0A%0A%C2%A1Muchas%20gracias%21%0ACHEFCO%20PASTAS",

}
