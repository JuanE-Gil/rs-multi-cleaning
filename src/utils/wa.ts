import { empresa } from "../data/empresa";

export function waLink(origen: string, servicio?: string): string {
    const texto = servicio
    ? `Hola, quiero cotizar ${servicio}. (origen: ${origen})`
    : `Hola, quiero cotizar un servicio de limpieza. (origen: ${origen})`;

  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`;
}