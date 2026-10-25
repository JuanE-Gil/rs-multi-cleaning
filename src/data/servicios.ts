export interface ServicioFaq {
  pregunta: string;
  respuesta: string;
}

export interface ServicioResumen {
  slug: string;
  nombre: string;
  metodo: string;
  segmento: "Hogar" | "Automotriz";
  destacado?: boolean;
  // precioDesde: string; // TODO(fase 0): confirmar precios reales antes de publicarlos
  imagenAlt: string;
  casoId?: string;
  bajada: string;
  senales: string[];
  incluye: string[];
  noIncluye: string[];
  proceso: string[];
  precioVaria: string;
  faq: ServicioFaq[];
}

// Catálogo tomado del flyer "Nuestros servicios" del cliente (2026-10-22).
// TODO: reemplazar este array por getCollection('servicios') cuando exista la content collection
export const serviciosDestacados: ServicioResumen[] = [
  {
    slug: "tapiceria-en-tela",
    nombre: "Tapicería en tela",
    metodo: "Inyección-extracción + vapor",
    segmento: "Hogar",
    destacado: true,
    imagenAlt: "Sofá de tela limpio",
    casoId: "sofa-surco-01",
    bajada:
      "Lavado por extracción profunda y desinfección. Removemos manchas, suciedad, residuos orgánicos y contaminantes, cuidando fibras y colores.",
    senales: [
      "El sofá se ve apagado o con manchas en los apoyabrazos",
      "Hay olor a humedad, mascota o comida",
      "Alguien en casa estornuda al sentarse",
    ],
    incluye: [
      "Diagnóstico de la fibra antes de empezar",
      "Pre-spray biodegradable y extracción profunda",
      "Vapor a alta temperatura en costuras y pliegues",
      "Acomodo del espacio de trabajo",
    ],
    noIncluye: [
      "Retapizado, costura o reparación de estructura",
      "Eliminación garantizada de manchas de tinte o lejía",
      "Traslado del mueble a otro ambiente",
    ],
    proceso: [
      "Diagnóstico de fibra y prueba de color",
      "Pre-spray y tiempo de acción",
      "Extracción con Kärcher Puzzi",
      "Vapor y secado ventilado",
    ],
    precioVaria:
      "el número de cuerpos, el tipo de tela y el estado de la fibra. Te damos un rango por WhatsApp con una foto y lo confirmamos en el diagnóstico.",
    faq: [
      {
        pregunta: "¿Cuánto tarda en secar un sofá?",
        respuesta:
          "Con inyección-extracción recuperamos la mayor parte del agua aplicada. El secado completo toma entre 4 y 8 horas en un ambiente ventilado.",
      },
      {
        pregunta: "¿Puedo usar el sofá el mismo día?",
        respuesta:
          "Queda húmedo, no empapado. En la mayoría de casos se puede usar con una manta encima y ventilar durante el día.",
      },
    ],
  },
  {
    slug: "tapiceria-en-cuero",
    nombre: "Tapicería en cuero",
    metodo: "pH neutro + nutrición",
    segmento: "Hogar",
    imagenAlt: "Sofá de cuero limpio",
    bajada:
      "Limpieza con productos de pH neutro, más nutrición e hidratación para ayudar a prevenir resequedad y grietas.",
    senales: [
      "El cuero se siente seco o áspero al tacto",
      "Hay grietas finas en apoyabrazos o asientos",
      "El color se ve opaco por polvo y grasa",
    ],
    incluye: [
      "Diagnóstico del tipo de cuero",
      "Limpieza con producto de pH neutro",
      "Nutrición e hidratación del material",
      "Paño de acabado y recomendaciones de cuidado",
    ],
    noIncluye: [
      "Reparación de grietas profundas o desgarros",
      "Teñido o repintado del cuero",
      "Retapizado o cambio de espuma",
    ],
    proceso: [
      "Diagnóstico del cuero y prueba en zona oculta",
      "Limpieza con pH neutro",
      "Nutrición e hidratación",
      "Secado y acabado",
    ],
    precioVaria:
      "el número de cuerpos, el tipo de cuero y su estado. Te damos un rango por WhatsApp con una foto.",
    faq: [
      {
        pregunta: "¿El cuero se puede mojar?",
        respuesta:
          "No se satura. Se limpia con producto de pH neutro y paño, sin extracción de agua, y se nutre después.",
      },
      {
        pregunta: "¿Reparan las grietas?",
        respuesta:
          "No. La limpieza y nutrición ayudan a prevenir resequedad, pero un cuero ya agrietado necesita un servicio de restauración aparte.",
      },
    ],
  },
  {
    slug: "cabeceras-tapizadas",
    nombre: "Cabeceras tapizadas",
    metodo: "Extracción + vapor",
    segmento: "Hogar",
    imagenAlt: "Cabecera de cama tapizada limpia",
    bajada:
      "Eliminación de manchas, polvo, grasa, alérgenos y olores, cuidando el tejido y las costuras de la cabecera.",
    senales: [
      "La cabecera tiene polvo visible o se siente pegajosa",
      "Hay manchas en la zona donde se apoya la cabeza",
      "El ambiente huele a humedad o a guardado",
    ],
    incluye: [
      "Aspirado de toda la superficie",
      "Pre-spray y extracción controlada",
      "Vapor en costuras y bordes",
      "Secado ventilado",
    ],
    noIncluye: [
      "Desmontaje de la estructura o del panel",
      "Retapizado o cambio de tela",
      "Reparación de costuras abiertas",
    ],
    proceso: [
      "Diagnóstico del tejido",
      "Aspirado y pre-spray",
      "Extracción y vapor",
      "Secado",
    ],
    precioVaria:
      "el ancho y alto de la cabecera, el tipo de tela y su estado.",
    faq: [
      {
        pregunta: "¿Hay que desmontar la cabecera?",
        respuesta:
          "No. Se limpia instalada, protegiendo la pared y el colchón.",
      },
      {
        pregunta: "¿Se puede limpiar junto con el colchón?",
        respuesta:
          "Sí. Coordinamos ambos servicios en la misma visita para aprovechar el secado.",
      },
    ],
  },
  {
    slug: "box-tarima-y-bases-de-cama",
    nombre: "Box tarima / Bases de cama",
    metodo: "Aspirado profundo + vapor",
    segmento: "Hogar",
    imagenAlt: "Base de cama box tarima limpia",
    bajada:
      "Limpieza profunda de laterales y bordes para retirar polvo, pelusas y ácaros acumulados en la base.",
    senales: [
      "La base acumula pelusa o polvo en los laterales",
      "Hay olor a humedad debajo del colchón",
      "El colchón se cambió pero la base sigue igual",
    ],
    incluye: [
      "Aspirado de laterales y bordes",
      "Pre-spray en la tela de la base",
      "Vapor a alta temperatura",
      "Secado ventilado",
    ],
    noIncluye: [
      "Limpieza del colchón (se cotiza aparte)",
      "Desarmado de la base o retiro del colchón",
      "Reparación de estructura o tapizado",
    ],
    proceso: [
      "Retiro del colchón con cuidado",
      "Aspirado profundo de la base",
      "Pre-spray y vapor",
      "Secado y reposición",
    ],
    precioVaria:
      "el tamaño de la base (1 o 2 plazas), el número de lados y su estado.",
    faq: [
      {
        pregunta: "¿Tengo que sacar el colchón?",
        respuesta:
          "Sí, lo retiramos entre el equipo para limpiar la base y lo reponemos al terminar.",
      },
      {
        pregunta: "¿Sirve para somier o base de madera?",
        respuesta:
          "Se evalúa el material. La limpieza profunda aplica a la parte tapizada; la madera se limpia en seco.",
      },
    ],
  },
  {
    slug: "desinfeccion-de-colchones",
    nombre: "Colchones",
    metodo: "Vapor anti ácaros",
    segmento: "Hogar",
    destacado: true,
    imagenAlt: "Colchón higienizado",
    bajada:
      "Succión y desinfección profunda para reducir ácaros, polvo, residuos dérmicos, moho y bacterias.",
    senales: [
      "Te despiertas con congestión o estornudos",
      "El colchón tiene manchas o humedad",
      "Hay mascotas o niños que duermen en la cama",
    ],
    incluye: [
      "Aspirado profundo de ambas caras",
      "Vapor a alta temperatura",
      "Tratamiento de costuras y bordes",
      "Recomendaciones de secado",
    ],
    noIncluye: [
      "Sustitución o reparación del colchón",
      "Eliminación de manchas biológicas antiguas",
      "Tratamiento de la base o somier (se cotiza aparte)",
    ],
    proceso: [
      "Aspirado de superficie y costuras",
      "Vapor a alta temperatura en ambas caras",
      "Secado ventilado",
    ],
    precioVaria:
      "el tamaño del colchón (1 o 2 plazas), el número de caras y su estado.",
    faq: [
      {
        pregunta: "¿El vapor no daña el colchón?",
        respuesta:
          "Se aplica de forma controlada y se retira la humedad con aspirado. El colchón queda húmedo, no empapado.",
      },
      {
        pregunta: "¿Sirve si mi hijo tiene alergias?",
        respuesta:
          "El vapor actúa sobre ácaros y bacterias por temperatura. No prometemos curar ni prevenir condiciones médicas; si hay un diagnóstico, consulta con tu médico.",
      },
    ],
  },
  {
    slug: "lavado-de-alfombras",
    nombre: "Alfombras",
    metodo: "Extracción profunda",
    segmento: "Hogar",
    destacado: true,
    imagenAlt: "Alfombra limpia",
    bajada:
      "Limpieza mecánica profunda, extracción de suciedad incrustada, neutralización de olores y recuperación de fibras.",
    senales: [
      "La alfombra se ve opaca o con zonas más oscuras",
      "Desprende polvo al caminar",
      "Tiene olor a humedad o mascota",
    ],
    incluye: [
      "Aspirado profundo",
      "Pre-spray y extracción",
      "Cepillado de fibra",
      "Secado asistido",
    ],
    noIncluye: [
      "Reparación de bordes o flecos",
      "Teñido o restauración de color",
      "Traslado de alfombras de gran formato",
    ],
    proceso: [
      "Aspirado y diagnóstico",
      "Pre-spray biodegradable",
      "Extracción y cepillado",
      "Secado",
    ],
    precioVaria:
      "los metros cuadrados, el tipo de fibra y el nivel de suciedad.",
    faq: [
      {
        pregunta: "¿La alfombra queda húmeda?",
        respuesta:
          "La extracción retira la mayor parte del agua. El secado depende del grosor y la ventilación del ambiente.",
      },
      {
        pregunta: "¿Trabajan alfombras de pared a pared?",
        respuesta:
          "Sí, se limpian en el lugar. Si la alfombra es muy grande, coordinamos el acceso y el tiempo de secado.",
      },
    ],
  },
  {
    slug: "lavado-de-roller",
    nombre: "Roller",
    metodo: "Lavado controlado",
    segmento: "Hogar",
    imagenAlt: "Persiana roller limpia",
    bajada:
      "Lavado controlado y limpieza profunda, incluyendo manchas y moho, cuidando el mecanismo y el tejido.",
    senales: [
      "El roller tiene manchas o puntos de moho",
      "Se ve opaco por polvo acumulado",
      "El ambiente huele a humedad cerca de la ventana",
    ],
    incluye: [
      "Diagnóstico del tejido",
      "Protección del mecanismo",
      "Lavado controlado de la tela",
      "Secado extendido",
    ],
    noIncluye: [
      "Reparación del mecanismo o del resorte",
      "Cambio de tela o instalación nueva",
      "Persianas de madera o de exterior",
    ],
    proceso: [
      "Diagnóstico del tejido y del mecanismo",
      "Protección del mecanismo",
      "Lavado controlado",
      "Secado extendido",
    ],
    precioVaria:
      "el ancho y alto del roller, el tipo de tejido y su estado.",
    faq: [
      {
        pregunta: "¿Hay que desmontar el roller?",
        respuesta:
          "Se evalúa en el lugar. En la mayoría de casos se limpia instalado, protegiendo el mecanismo.",
      },
      {
        pregunta: "¿Se puede quitar el moho?",
        respuesta:
          "Se trata la zona con lavado controlado. Si el moho penetró la fibra, puede quedar una marca permanente.",
      },
    ],
  },
  {
    slug: "limpieza-interior-automotriz",
    nombre: "Interior automotriz",
    metodo: "Limpieza profunda + neutralización",
    segmento: "Automotriz",
    imagenAlt: "Interior de auto limpio",
    bajada:
      "Asientos de tela o cuero, puertas, moquetas, maletero y techo: limpieza profunda y neutralización de olores.",
    senales: [
      "Los asientos tienen manchas o olor impregnado",
      "Hay polvo y pelusa en moquetas y maletero",
      "Vas a vender o entregar el vehículo",
    ],
    incluye: [
      "Aspirado de asientos, moquetas y maletero",
      "Limpieza de puertas y paneles",
      "Tratamiento de techo",
      "Neutralización de olores",
    ],
    noIncluye: [
      "Lavado exterior o pulido de carrocería",
      "Desmontaje de asientos o tablero",
      "Reparación de tapizado o cuero",
    ],
    proceso: [
      "Aspirado general",
      "Pre-spray por material",
      "Extracción y limpieza de paneles",
      "Neutralización de olores y secado",
    ],
    precioVaria:
      "el tamaño del vehículo, el tipo de tapizado y su estado.",
    faq: [
      {
        pregunta: "¿Lavan el exterior del auto?",
        respuesta:
          "No. Este servicio cubre solo el interior: asientos, puertas, moquetas, maletero y techo.",
      },
      {
        pregunta: "¿Dónde se realiza?",
        respuesta:
          "En el lugar que indiques, siempre que haya espacio y ventilación para el secado.",
      },
    ],
  },
  {
    slug: "linea-infantil",
    nombre: "Línea infantil",
    metodo: "Limpieza y desinfección",
    segmento: "Hogar",
    imagenAlt: "Coche de bebé limpio",
    bajada:
      "Limpieza y desinfección de coches de bebé, sillas de retención infantil (SRI) y corral de tela.",
    senales: [
      "El coche o la SRI acumulan migas y manchas",
      "Hay olor a humedad o a comida",
      "El artículo se heredó o se compró de segundo uso",
    ],
    incluye: [
      "Aspirado de superficies y ranuras",
      "Limpieza de tela con producto de pH neutro",
      "Desinfección de puntos de contacto",
      "Secado completo antes de entregar",
    ],
    noIncluye: [
      "Reparación o reemplazo de piezas",
      "Desinfección de componentes electrónicos",
      "Lavado de cunas o muebles de madera",
    ],
    proceso: [
      "Diagnóstico del artículo y sus materiales",
      "Aspirado profundo",
      "Limpieza y desinfección",
      "Secado completo",
    ],
    precioVaria:
      "el tipo de artículo (coche, SRI o corral), su tamaño y estado.",
    faq: [
      {
        pregunta: "¿Usan productos seguros para bebés?",
        respuesta:
          "Usamos insumos biodegradables de pH neutro y sin fosfatos. Aun así, recomendamos ventilar y dejar secar por completo antes de usarlo.",
      },
      {
        pregunta: "¿Desarman el coche para lavarlo?",
        respuesta:
          "Se retiran las partes desmontables según el modelo. No forzamos piezas ni desarmamos mecanismos.",
      },
    ],
  },
];
