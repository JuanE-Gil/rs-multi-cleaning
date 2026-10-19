export interface Segmento {
  nombre: string;
  descripcion: string;
  href: string;
}

export const segmentos: Segmento[] = [
  {
    nombre: "Hogar",
    descripcion: "Sofás, colchones, alfombras y cortinas en tu casa.",
    href: "/servicios",
  },
  {
    nombre: "Corporativo",
    descripcion: "Oficinas, condominios y locales comerciales.",
    href: "/contacto",
  },
  {
    nombre: "Industrial",
    descripcion: "Plantas, almacenes y protocolos de bioseguridad.",
    href: "/contacto",
  },
];
