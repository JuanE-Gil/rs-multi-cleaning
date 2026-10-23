export interface Segmento {
  nombre: string;
  descripcion: string;
  href: string;
  cta: string;
}

export const segmentos: Segmento[] = [
  {
    nombre: "Hogar",
    descripcion: "Sofás, colchones, alfombras y cortinas en tu casa.",
    href: "/servicios",
    cta: "Ver servicios",
  },
  {
    nombre: "Corporativo",
    descripcion: "Oficinas, condominios y locales comerciales.",
    href: "/contacto",
    cta: "Hablar con ventas",
  },
  {
    nombre: "Industrial",
    descripcion: "Plantas, almacenes y protocolos de bioseguridad.",
    href: "/contacto",
    cta: "Solicitar propuesta",
  },
];
