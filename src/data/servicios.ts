export interface ServicioFaq {
  pregunta: string;
  respuesta: string;
}

export interface ServicioResumen {
  slug: string;
  nombre: string;
  metodo: string;
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

// TODO: reemplazar este array por getCollection('servicios') cuando exista la content collection
export const serviciosDestacados: ServicioResumen[] = [
  {
    slug: "lavado-de-sofas-y-tapiceria",
    nombre: "Sofás y tapicería",
    metodo: "Inyección-extracción + vapor",
    imagenAlt: "Sofá tapizado limpio",
    casoId: "sofa-surco-01",
    bajada:
      "Recupera el color y la textura de tu sofá sin moverlo de casa. Lavado profundo con inyección-extracción y vapor a alta temperatura.",
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
    slug: "desinfeccion-de-colchones",
    nombre: "Colchones",
    metodo: "Vapor anti ácaros",
    imagenAlt: "Colchón higienizado",
    bajada:
      "Trata el interior del colchón, donde viven los ácaros, no solo la superficie que ves.",
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
    imagenAlt: "Alfombra limpia",
    bajada:
      "Devuelve el color y la suavidad a alfombras que acumulan polvo dentro de la fibra.",
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
    slug: "cortinas-y-persianas",
    nombre: "Cortinas",
    metodo: "Lavado al seco / al agua",
    imagenAlt: "Cortinas limpias",
    bajada:
      "Limpia cortinas y persianas sin desmontar la instalación completa.",
    senales: [
      "La cortina acumula polvo y huele a ambiente cerrado",
      "Hay manchas de humedad en los pliegues",
      "Quieres renovar el ambiente sin cambiar la decoración",
    ],
    incluye: [
      "Diagnóstico del tejido",
      "Lavado según material (agua o seco)",
      "Secado y planchado básico",
      "Reposición en el riel",
    ],
    noIncluye: [
      "Lavado de tejidos delicados sin prueba previa",
      "Reparación de rieles o mecanismos",
      "Persianas de madera o de exterior",
    ],
    proceso: [
      "Diagnóstico del tejido",
      "Desmontaje y lavado",
      "Secado y planchado",
      "Reposición",
    ],
    precioVaria:
      "el número de paños, el ancho y el tipo de tejido.",
    faq: [
      {
        pregunta: "¿Tengo que desmontar las cortinas?",
        respuesta:
          "No. Nuestro equipo se encarga del desmontaje y la reposición en el riel.",
      },
      {
        pregunta: "¿Lavan cortinas blackout?",
        respuesta:
          "Se evalúan primero. Algunos tejidos blackout no admiten lavado al agua y se tratan en seco.",
      },
    ],
  },
  {
    slug: "mobiliario-de-oficina",
    nombre: "Sillas de oficina",
    metodo: "Extracción + desinfección",
    imagenAlt: "Silla de oficina tapizada",
    bajada:
      "Sillas limpias y desinfectadas para un espacio de trabajo que se ve cuidado.",
    senales: [
      "Las sillas tienen manchas en el asiento o apoyabrazos",
      "Hay olor a sudor o humedad",
      "Rotación de personal y necesidad de higienizar",
    ],
    incluye: [
      "Diagnóstico del tapiz",
      "Pre-spray y extracción",
      "Desinfección de superficies de contacto",
      "Trabajo fuera del horario de atención",
    ],
    noIncluye: [
      "Reparación de mecanismos o ruedas",
      "Retapizado",
      "Limpieza de suelos o paredes",
    ],
    proceso: [
      "Diagnóstico y prueba",
      "Pre-spray",
      "Extracción y desinfección",
      "Secado",
    ],
    precioVaria:
      "el número de sillas, el tipo de tapiz y si el trabajo es dentro o fuera de horario.",
    faq: [
      {
        pregunta: "¿Pueden trabajar fuera del horario de oficina?",
        respuesta:
          "Sí. Coordinamos el ingreso para no interrumpir la operación.",
      },
      {
        pregunta: "¿Emiten factura?",
        respuesta:
          "Sí, trabajamos con comprobante. Indícanos los datos de la empresa al cotizar.",
      },
    ],
  },
  {
    slug: "limpieza-integral-de-inmuebles",
    nombre: "Inmuebles",
    metodo: "Limpieza profunda integral",
    imagenAlt: "Interior de inmueble limpio",
    bajada:
      "Limpieza profunda para casas, oficinas y locales antes de mudarse o después de una obra.",
    senales: [
      "Vas a entregar o recibir un inmueble",
      "Terminó una obra y hay polvo fino en todo",
      "El espacio estuvo cerrado mucho tiempo",
    ],
    incluye: [
      "Limpieza de superficies y áreas comunes",
      "Aspirado y lavado de textiles",
      "Desinfección de puntos de contacto",
      "Coordinación por ambientes",
    ],
    noIncluye: [
      "Retiro de escombros o mudanza",
      "Limpieza de fachadas o exteriores",
      "Trabajos en altura sin andamio",
    ],
    proceso: [
      "Levantamiento del espacio",
      "Limpieza por ambientes",
      "Desinfección",
      "Revisión final",
    ],
    precioVaria:
      "los metros cuadrados, el número de ambientes y el estado del inmueble.",
    faq: [
      {
        pregunta: "¿Hacen limpieza después de una obra?",
        respuesta:
          "Sí, incluimos retiro de polvo fino y limpieza de superficies. Los escombros y materiales de construcción se retiran aparte.",
      },
      {
        pregunta: "¿Trabajan con condominios?",
        respuesta:
          "Sí. Coordinamos con la administración el acceso, los horarios y la facturación.",
      },
    ],
  },
];
