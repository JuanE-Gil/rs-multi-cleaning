export interface Equipo {
  nombre: string;
  descripcion: string;
  beneficio: string;
  imagenAlt: string;
}

export const equipos: Equipo[] = [
  {
    nombre: "Kärcher Puzzi 10/1",
    descripcion: "Inyección–extracción profesional",
    beneficio:
      "Inyecta la solución de limpieza dentro de la fibra y la aspira de vuelta en el mismo movimiento, recuperando la mayor parte del agua aplicada. Tu mueble queda usable el mismo día.",
    imagenAlt: "Máquina Kärcher Puzzi 10/1 de inyección-extracción",
  },
  {
    nombre: "Kärcher SC 2 EasyFix",
    descripcion: "Vapor seco a alta temperatura",
    beneficio:
      "Genera vapor a alta temperatura que llega a costuras, pliegues y botones. Actúa por calor, sin agregar más químico a tu casa.",
    imagenAlt: "Máquina Kärcher SC 2 EasyFix generadora de vapor",
  },
];
