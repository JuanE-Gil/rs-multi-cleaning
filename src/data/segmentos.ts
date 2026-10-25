export interface Segmento {
  nombre: string;
  descripcion: string;
  href: string;
  cta: string;
}

export const segmentos: Segmento[] = [
  {
    nombre: "Hogar",
    descripcion: "Tapicería, colchones, alfombras, roller y línea infantil en tu casa.",
    href: "/services",
    cta: "Ver servicios",
  },
  {
    nombre: "Corporativo",
    descripcion: "Oficinas, condominios y locales comerciales.",
    href: "/contact",
    cta: "Hablar con ventas",
  },
  {
    nombre: "Industrial",
    descripcion: "Plantas, almacenes y protocolos de bioseguridad.",
    href: "/contact",
    cta: "Solicitar propuesta",
  },
];
