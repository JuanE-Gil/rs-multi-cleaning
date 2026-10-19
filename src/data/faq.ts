export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const faqHome: FaqItem[] = [
  {
    pregunta: "¿Cuánto tarda en secar un sofá después del lavado?",
    respuesta:
      "Con inyección–extracción recuperamos la mayor parte del agua aplicada, así que el mueble queda húmedo, no empapado. El secado completo toma entre 4 y 8 horas en un ambiente ventilado.",
  },
  {
    pregunta: "¿Es seguro para niños, bebés y mascotas?",
    respuesta:
      "Sí. Usamos insumos biodegradables de pH neutro, sin fosfatos. Recomendamos ventilar el ambiente durante el secado como buena práctica general.",
  },
  {
    pregunta: "¿Atienden sábados y domingos?",
    respuesta:
      "Atendemos de lunes a sábado. Para domingos y feriados, coordina disponibilidad por WhatsApp.",
  },
  {
    pregunta: "¿Cómo se calcula el precio de mi mueble?",
    respuesta:
      "Varía según el tipo de mueble, el número de cuerpos, el material y su estado. Te damos un rango por WhatsApp con una foto, y confirmamos el precio final en el diagnóstico previo al servicio.",
  },
  {
    pregunta: "¿Necesito mover los muebles antes de que lleguen?",
    respuesta:
      "No es necesario. Nuestro equipo acomoda el espacio de trabajo alrededor del mueble a tratar.",
  },
  {
    pregunta: "¿Qué pasa si la mancha no sale por completo?",
    respuesta:
      "Te lo decimos en el diagnóstico antes de cobrar: algunas manchas antiguas de tinte o lejía pueden ser irreversibles. Nuestro compromiso es la mejora visible de la fibra, no una promesa de eliminación total en todos los casos.",
  },
];
