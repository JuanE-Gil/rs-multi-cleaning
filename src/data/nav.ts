export type NavKey = "inicio" | "servicios" | "nosotros" | "contacto";

export interface NavLink {
    key: NavKey;
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
        href: '/services'
    },

    {
        key: 'nosotros',
        label: 'Nosotros',
        href: '/about'
    },

    // TODO: Verificar si se necesita sección de cobertura
   // {
   //   key: 'cobertura',
   //   label: 'Cobertura',
   //   href: '/coverage'
   // },

    {
        key: 'contacto',
        label: 'Contacto',
        href: '/contact'
    }

]