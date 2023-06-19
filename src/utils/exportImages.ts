import {
  preview_s_CalabazaQuesoRemolacha,
  preview_s_CuatroQuesosEspinaca,
  preview_s_JamonQuesoPimentonRojo,
  preview_s_RicottaEspinacaHuevoCurcuma,

  cover_s_CalabazaQuesoRemolacha,
  cover_s_CuatroQuesosEspinaca,
  cover_s_JamonQuesoPimentonRojo,
  cover_s_RicottaEspinacaHuevoCurcuma,
} from '../assets'

interface Pictures {
  [key: string]: string;
}
export const previewPictures: Pictures = {
  "preview_s_jamon_queso_pimenton_rojo": preview_s_JamonQuesoPimentonRojo,
  "preview_s_cuatro_quesos_espinaca": preview_s_CuatroQuesosEspinaca,
  "preview_s_ricotta_espinaca_huevo_curcuma": preview_s_RicottaEspinacaHuevoCurcuma,
  "preview_s_calabaza_queso_remolacha": preview_s_CalabazaQuesoRemolacha,
}

export const coverPictures: Pictures = {
  "cover_s_jamon_queso_pimenton_rojo": cover_s_JamonQuesoPimentonRojo,
  "cover_s_cuatro_quesos_espinaca": cover_s_CuatroQuesosEspinaca,
  "cover_s_ricotta_espinaca_huevo_curcuma": cover_s_RicottaEspinacaHuevoCurcuma,
  "cover_s_calabaza_queso_remolacha": cover_s_CalabazaQuesoRemolacha,
}
