export interface CasoAntesDespues {
id: string;
  titulo?: string;
  descripcion: string;
  antesImg: string;
  antesAlt: string;
  despuesImg: string;
  despuesAlt: string;
}

// TODO: reemplazar por casos reales con fotos
export const casosAntesDespues: CasoAntesDespues[] = [
  {
id: 'sofa-surco-01',
    titulo: 'Limpieza profunda de sofá',
    descripcion: 'Sofá de tela, 3 cuerpos · 4 años sin lavado profundo · Surco',
    antesImg: '/images/casos/sofa-antes.png',
    antesAlt: 'Sofá de tela beige con manchas visibles antes del lavado',
    despuesImg: '/images/casos/sofa-despues.png',
    despuesAlt: 'Mismo sofá con la fibra recuperada después del lavado a vapor',
  },
];