export interface NavLink {
    key: string;
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    {
        key: 'inicio',
        label: 'Inicio',
        href: '/'
    },

    {
        key: 'servicios',
        label: 'Servicios',
        href: '/servicios'
    },

    {
        key: 'nosotros',
        label: 'Nosotros',
        href: '/quienes-somos'
    },

    // TODO: Verificar si se necesita sección de cobertura
   // {
   //   key: 'cobertura',
   //   label: 'Cobertura',
   //   href: '/cobertura'
   // },

    {
        key: 'contacto',
        label: 'Contacto',
        href: '/contacto'
    }

]