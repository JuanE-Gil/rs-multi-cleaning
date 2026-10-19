export interface PasoProceso {
  numero: number;
  titulo: string;
  descripcion: string;
}

export const pasosProceso: PasoProceso[] = [
  {
    numero: 1,
    titulo: "Diagnóstico de fibra",
    descripcion:
      "Identificamos el material y el método correcto: agua, seco o vapor.",
  },
  {
    numero: 2,
    titulo: "Pre-spray biodegradable",
    descripcion:
      "Aplicamos un insumo biodegradable que afloja la suciedad incrustada.",
  },
  {
    numero: 3,
    titulo: "Extracción Kärcher Puzzi",
    descripcion:
      "Inyección-extracción que recupera la mayor parte del agua aplicada.",
  },
  {
    numero: 4,
    titulo: "Vapor 100 °C + secado",
    descripcion: "Desinfección por temperatura y secado en ambiente ventilado.",
  },
];
