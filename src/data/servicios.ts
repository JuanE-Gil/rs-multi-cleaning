export interface ServicioResumen {
  slug: string;
  nombre: string;
  metodo: string;
  // precioDesde: string; // TODO: confirmar si se colocaran precios reales
  imagenAlt: string;
}

// TODO: reemplazar este array por getCollection('servicios') cuando exista la content collection
export const serviciosDestacados: ServicioResumen[] = [
  {
    slug: "lavado-de-sofas-y-tapiceria",
    nombre: "Sofás y tapicería",
    metodo: "Inyección-extracción + vapor",
    // precioDesde: "Desde S/ 00",
    imagenAlt: "Sofá tapizado limpio",
  },
  {
    slug: "desinfeccion-de-colchones",
    nombre: "Colchones",
    metodo: "Vapor anti ácaros",
    // precioDesde: "Desde S/ 00",
    imagenAlt: "Colchón higienizado",
  },
  {
    slug: "lavado-de-alfombras",
    nombre: "Alfombras",
    metodo: "Extracción profunda",
    // precioDesde: "Desde S/ 00",
    imagenAlt: "Alfombra limpia",
  },
  {
    slug: "cortinas-y-persianas",
    nombre: "Cortinas",
    metodo: "Lavado al seco / al agua",
    // precioDesde: "Desde S/ 00",
    imagenAlt: "Cortinas limpias",
  },
  {
    slug: "mobiliario-de-oficina",
    nombre: "Sillas de oficina",
    metodo: "Extracción + desinfección",
    // precioDesde: "Desde S/ 00",
    imagenAlt: "Silla de oficina tapizada",
  },
  {
    slug: "limpieza-integral-de-inmuebles",
    nombre: "Inmuebles",
    metodo: "Limpieza profunda integral",
    // precioDesde: "Desde S/ 00",
    imagenAlt: "Interior de inmueble limpio",
  },
];
