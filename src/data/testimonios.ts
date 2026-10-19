export interface Testimonio {
  nombre: string;
  distrito: string;
  servicio: string;
  texto: string;
}

// TODO: reemplazar por testimonios reales
export const testimonios: Testimonio[] = [
  { nombre: 'María G.', distrito: 'San Isidro', servicio: 'Sofá 3 cuerpos', texto: 'Llegaron puntuales y el sofá quedó como nuevo. Se secó el mismo día.' },
  { nombre: 'Jorge P.', distrito: 'Surco', servicio: 'Colchón 2 plazas', texto: 'Contraté por el tema de alergias de mi hijo. Notamos la diferencia esa misma noche.' },
  { nombre: 'Adm. Edificio Los Álamos', distrito: 'Miraflores', servicio: 'Áreas comunes', texto: 'Formales, con factura y buena coordinación con la junta de propietarios.' },
];