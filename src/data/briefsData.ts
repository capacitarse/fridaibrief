import { BriefEdition } from '../types';

export const BRIEFS_DATA: BriefEdition[] = [
  // =========================================================================
  // EDICIÓN #01 - DEEP-DIVE DE REPORTE (PLAZA LOGÍSTICA)
  // =========================================================================
  {
    id: 1,
    editionNumber: "#01",
    title: "Desarmando el reporte de Plaza Logística: Datos duros en Real Estate Sostenible",
    subtitle: "Infraestructura logística, bonos verdes, doble certificación LEED/EDGE y el desafío del Alcance 3.",
    subjectLine: "[FridAI Brief #01] Desarmando el reporte de Plaza Logística: Datos duros en Real Estate Sostenible",
    category: "deep-dive",
    categoryLabel: "Deep-Dive de Reporte",
    categoryColor: "#60afc1",
    cycleWeek: 1,
    releaseDate: "2026-09-04T08:00:00-03:00",
    formattedReleaseDate: "Viernes 4 de Septiembre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Plaza Logística (Argentina)",
    standards: ["GRI Standards", "SASB Real Estate", "LEED / EDGE", "TCFD", "Bonos Verdes"],
    introduction: [
      "¡Bienvenidos a la primera entrega formal de FridAI Brief by CapacitaRSE!",
      "Cada viernes por la mañana recibirás en esta plataforma web un análisis técnico, libre de greenwashing y 100% orientado a la acción, optimizado con herramientas de Inteligencia Artificial. Menos teoría, más ejecución.",
      "Hoy ponemos bajo la lupa el último Reporte de Sostenibilidad de Plaza Logística, referente regional en infraestructura logística de triple impacto."
    ],
    section1Title: "1. El Deep-Dive: Infraestructura Logística y Descarbonización",
    section1Subtitle: "Cómo integrar la sostenibilidad en el corazón del Real Estate industrial",
    section1Content: [
      "Plaza Logística opera en un sector crítico para la transición hacia una economía baja en carbono: el Real Estate logístico e industrial.",
      "Su estrategia de sostenibilidad no es periférica, sino que está integrada en el corazón de su modelo de negocio mediante el financiamiento sostenible (bonos verdes) y la eco-eficiencia constructiva."
    ],
    section1KeyPillars: [
      {
        title: "Financiamiento Sostenible",
        description: "Pioneros en la emisión de Obligaciones Negociables (ON) Verdes en Argentina, lo que demuestra cómo los criterios ESG reducen el costo de capital y atraen inversores institucionales de escala internacional (como BID Invest)."
      },
      {
        title: "Eco-eficiencia Constructiva",
        description: "Apuesta total por certificaciones internacionales (LEED y EDGE). Esto no solo mitiga el impacto ambiental en las fases de construcción y operación, sino que genera un valor de mercado superior (efecto 'Green Premium') para los activos inmobiliarios."
      },
      {
        title: "Gestión del Carbono",
        description: "Mapeo de inventario de Gases de Efecto Invernadero (GEI). El desafío metodológico radica en la frontera del reporte: cómo balancear las emisiones de la constructora frente a las operaciones operativas de los locatarios."
      }
    ],
    section2Title: "2. Matriz ESG: Fortalezas y Brechas (Gaps) Detectadas",
    esgMatrix: [
      {
        dimension: "Ambiental (E)",
        strength: "Certificación sistemática EDGE/LEED que garantiza ahorros auditables de energía (>20%) y agua en las naves industriales.",
        gap: "Emisiones de Alcance 3: Alta dependencia del comportamiento logístico e industrial de sus locatarios (inquilinos). Falta profundizar en acuerdos verdes de descarbonización compartida."
      },
      {
        dimension: "Social (S)",
        strength: "Fuerte inversión en infraestructura comunitaria y desarrollo local en los municipios donde se implantan los parques (zonas habitualmente críticas).",
        gap: "Diversidad en la Cadena de Valor: El sector logístico/construcción sigue fuertemente masculinizado. Espacio para KPIs más agresivos de equidad de género en roles operativos y de liderazgo técnico."
      },
      {
        dimension: "Gobernanza (G)",
        strength: "Reportabilidad robusta bajo estándares internacionales (GRI y alineación conceptual a SASB / TCFD). Estructura de compliance sólida.",
        gap: "Vincular compensaciones ejecutivas a metas ESG específicas, asegurando que los incentivos de la alta dirección estén directamente atados al desempeño de sostenibilidad a largo plazo."
      }
    ],
    advisorInsight: "El caso de Plaza Logística demuestra que la sostenibilidad en el sector inmobiliario ya no es un tema de 'plantar árboles', sino de resiliencia de la infraestructura física frente al cambio climático y estructuración financiera sofisticada.",
    section3Title: "3. El Entregable de la Semana: Checklist de Brechas para Real Estate",
    checklist: [
      {
        id: "chk-1-1",
        title: "¿Los activos tienen doble certificación?",
        description: "No dependas de una sola métrica; cruzar LEED para diseño y EDGE para eficiencia operativa genera mayor confianza en auditorías externas."
      },
      {
        id: "chk-1-2",
        title: "¿El Alcance 3 está debidamente mapeado?",
        description: "En logística, el 80% del impacto real ocurre en el transporte y uso de las instalaciones por parte de terceros. Tu reporte debe incluir cláusulas o acuerdos verdes con inquilinos."
      },
      {
        id: "chk-1-3",
        title: "¿Los bonos verdes están atados a taxonomías locales?",
        description: "Asegurá el cumplimiento de las guías locales de la CNV o reguladores financieros para evitar acusaciones de lavado verde institucional."
      }
    ],
    section4Title: "4. AI Toolkit: Tu prompt de análisis de Reportes ESG",
    promptBlock: {
      title: "Prompt Maestro: Auditoría Técnica de Reportes en Real Estate",
      role: "Consultor Senior de Sostenibilidad especialista en el sector Real Estate e Infraestructura Industrial",
      instructions: `Actúa como un Consultor Senior de Sostenibilidad especialista en el sector Real Estate e Infraestructura Industrial. Analiza el siguiente fragmento/reporte de sostenibilidad bajo los estándares GRI y SASB para el sector de "Real Estate Services". Identifica de forma crítica: 1) Los 3 principales avances en eco-eficiencia constructiva (mencionando certificaciones como LEED o EDGE si existen), 2) La gestión de las emisiones de Alcance 3 (relación con locatarios y cadena de suministro), y 3) Detecta al menos dos omisiones técnicas o "puntos ciegos" (Gaps) que una auditoría externa señalaría como débiles en materia de gobernanza. Presenta los resultados con un tono corporativo, técnico y analítico.`,
      variables: [
        { name: "[Fragmento/Reporte]", description: "Texto copiado del reporte o PDF a auditar", example: "Capítulo de Desempeño Ambiental y Certificaciones 2025" }
      ],
      explanationPoints: [
        "Fuerza a la IA a contrastar contra dos estándares simultáneos (GRI y SASB).",
        "Obliga a buscar brechas en gobernanza en vez de limitarse al resumen positivo.",
        "Aísla la frontera de emisiones entre el desarrollador inmobiliario y el inquilino."
      ]
    },
    nextEditionTeaser: {
      edition: "Edición #02",
      date: "Viernes 11 de Septiembre de 2026",
      topic: "Prompt Engineering: Cómo mapear Stakeholders con precisión quirúrgica usando la Matriz de Mendelow",
      format: "Semana 2 — Guía de Prompt Engineering"
    },
    productionNotes: {
      institutionalFocus: "Mantiene el rigor técnico característico de CapacitaRSE, asegurando que la IA actúe como un filtro analítico y no meramente descriptivo.",
      practicalValue: "El uso de tablas y matriz de gaps garantiza una lectura ejecutiva y accionable de menos de 4 minutos.",
      scheduleAlignment: "Semana 1 del Ciclo: Deep-Dive de Reporte Corporativo."
    }
  },

  // =========================================================================
  // EDICIÓN #02 - PROMPT ENGINEERING (STAKEHOLDERS MENDELOW)
  // =========================================================================
  {
    id: 2,
    editionNumber: "#02",
    title: "Prompt Engineering: Cómo mapear Stakeholders con precisión quirúrgica usando IA",
    subtitle: "Elimina el sesgo genérico y aplica la Matriz de Poder e Interés de Mendelow con rigor técnico de RSE.",
    subjectLine: "[FridAI Brief #02] Prompt Engineering: Cómo mapear Stakeholders con precisión quirúrgica usando IA",
    category: "prompt-engineering",
    categoryLabel: "Prompt Engineering",
    categoryColor: "#696484",
    cycleWeek: 2,
    releaseDate: "2026-09-11T08:00:00-03:00",
    formattedReleaseDate: "Viernes 11 de Septiembre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Mapeo Metodológico de Grupos de Interés",
    standards: ["Matriz de Mendelow", "GRI 2: Contenidos Generales (Stakeholder Engagement)", "AA1000SES"],
    introduction: [
      "El viernes pasado analizamos cómo Plaza Logística estructura su estrategia ESG.",
      "Hoy nos movemos de la teoría a la caja de herramientas: vamos a domar a la Inteligencia Artificial para resolver uno de los dolores de cabeza más comunes en la consultoría de sostenibilidad: el Mapeo y Priorización de Stakeholders.",
      "El peligro de pedirle a una IA genérica que identifique grupos de interés es que siempre te dará la misma lista aburrida: 'Empleados, Clientes, Proveedores, Comunidad'. Eso no sirve para tomar decisiones estratégicas."
    ],
    section1Title: "1. El Enfoque Técnico: Más allá de las listas genéricas",
    section1Subtitle: "Las tres variables críticas que la IA debe procesar",
    section1Content: [
      "Para que un mapa de stakeholders tenga valor institucional, la IA debe comprender tres variables críticas antes de emitir un juicio:"
    ],
    section1KeyPillars: [
      {
        title: "Giro del Negocio y Geografía",
        description: "El impacto de un proveedor en el sector minero en Perú es radicalmente distinto al de una fintech en Uruguay."
      },
      {
        title: "Nivel de Influencia (Poder)",
        description: "La capacidad real del stakeholder de paralizar, condicionar o impulsar la operación de la empresa."
      },
      {
        title: "Nivel de Expectativa (Interés)",
        description: "Qué tanto le importa al grupo lo que la empresa hace en materia ambiental, social o de derechos humanos."
      }
    ],
    section2Title: "2. El Prompt Maestro: Ingenierizando el Mapeo Corporativo",
    promptBlock: {
      title: "Prompt Maestro: Matriz de Stakeholders de Mendelow",
      role: "Consultor de Sostenibilidad Senior y Experto en Asuntos Públicos",
      instructions: `Actúa como un Consultor de Sostenibilidad Senior y Experto en Asuntos Públicos. Necesito realizar un mapeo técnico y estratégico de Stakeholders para la siguiente organización:

- Empresa: [Nombre de la empresa o sector. Ej: Cadena de supermercados mediana].
- Ubicación: [País/Región principal de operación. Ej: Córdoba, Argentina].
- Contexto actual: [Breve hito o conflicto. Ej: Implementando su primera estrategia de descarbonización en logística y buscando certificar Empresa B].

Utilizando la metodología de la Matriz de Poder e Interés de Mendelow, genera un análisis estructurado en formato de tabla con las siguientes columnas:
1. Grupo de Interés Específico (No genérico. Ej: en vez de "Proveedores", detalla "Proveedores logísticos de última milla").
2. Intereses clave / Expectativas ESG principales respecto a la empresa.
3. Clasificación de Poder (Alto/Bajo) y justificación técnica.
4. Clasificación de Interés (Alto/Bajo) y justificación técnica.
5. Estrategia de Relacionamiento Recomendada (Escoge estrictamente entre: Monitorear, Mantener Informados, Mantener Satisfechos, Gestionar Atentamente).
6. Un KPI sugerido para medir la salud de la relación con este grupo.

Por favor, enfócate en identificar al menos 6 stakeholders críticos, asegurándote de incluir actores de la cadena de valor y reguladores locales. Presenta el resultado final en una tabla Markdown limpia y profesional.`,
      variables: [
        { name: "[Empresa]", description: "Nombre y sector", example: "Cadena de retail de indumentaria regional" },
        { name: "[Ubicación]", description: "País o región geográfica", example: "Santiago de Chile / Bogotá, Colombia" },
        { name: "[Contexto actual]", description: "Hito o desafío clave", example: "Auditoría de debida diligencia en talleres contratistas" }
      ],
      explanationPoints: [
        "Asignación de Rol Restringido: Al obligar a la IA a actuar como Consultor Senior, el vocabulario y recomendaciones adoptan tono de negocio.",
        "Anclaje Metodológico: La Matriz de Mendelow limita la creatividad de la IA a un marco académico y profesional validado.",
        "Filtro de Especificidad: La instrucción explícita de 'No genérico' fuerza al modelo a desglosar subcategorías críticas."
      ],
      followUpPrompts: [
        {
          title: "Micro-Prompt 1: Análisis de Riesgos Latentes",
          prompt: `Para el stakeholder [Insertar el nombre del grupo detectado], simula un escenario de crisis reputacional por un fallo en el Alcance 3. ¿Cuál debería ser nuestra primera acción de mitigación desde el área de RSE?`
        },
        {
          title: "Micro-Prompt 2: Canales de Escucha Activa",
          prompt: `Crea una propuesta de matriz de canales de comunicación y escucha activa bianual específicos para los 3 stakeholders clasificados como 'Gestionar Atentamente' en la tabla anterior.`
        }
      ]
    },
    section3Title: "3. Anatomía del Prompt: Las 3 Reglas de Oro",
    checklist: [
      {
        id: "chk-2-1",
        title: "Asignación de Rol Restringido",
        description: "Evita respuestas escolares forzando al modelo a adoptar un perfil de Consultor Senior en Asuntos Públicos."
      },
      {
        id: "chk-2-2",
        title: "Anclaje a Metodología Estándar",
        description: "Mendelow clasifica en 4 cuadrantes: Monitorear, Mantener Informados, Mantener Satisfechos y Gestionar Atentamente."
      },
      {
        id: "chk-2-3",
        title: "Desglose de Cadena de Valor",
        description: "Prohibir listas genéricas como 'Proveedores' o 'Clientes' obliga a identificar actores críticos de última milla o tercerizados."
      }
    ],
    section4Title: "4. Biblioteca de Micro-Prompts Complementarios",
    nextEditionTeaser: {
      edition: "Edición #03",
      date: "Viernes 18 de Septiembre de 2026",
      topic: "Herramienta del Mes: Matriz de Doble Materialidad Automatizada en Excel (CSRD/ESRS y GRI)",
      format: "Semana 3 — Herramienta en Excel del Mes"
    },
    productionNotes: {
      institutionalFocus: "Consistencia de la serie: se conecta directamente con la edición anterior y se deja sembrada la herramienta cuantitativa.",
      practicalValue: "El profesional puede copiar el prompt y resolver un entregable real de consultoría en minutos.",
      scheduleAlignment: "Semana 2 del Ciclo: Guía de Prompt Engineering."
    }
  },

  // =========================================================================
  // EDICIÓN #03 - HERRAMIENTA EXCEL (DOBLE MATERIALIDAD)
  // =========================================================================
  {
    id: 3,
    editionNumber: "#03",
    title: "Herramienta del Mes: Matriz de Doble Materialidad Automatizada en Excel",
    subtitle: "Plano técnico y fórmulas lógicas para evaluar Impacto (Inside-Out) y Riesgo Financiero (Outside-In) bajo CSRD/ESRS y GRI.",
    subjectLine: "[FridAI Brief #03] Herramienta del Mes: Matriz de Doble Materialidad Automatizada en Excel",
    category: "excel-tool",
    categoryLabel: "Herramienta Excel",
    categoryColor: "#e76f51",
    cycleWeek: 3,
    releaseDate: "2026-09-18T08:00:00-03:00",
    formattedReleaseDate: "Viernes 18 de Septiembre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Evaluación de Doble Materialidad Corporativa",
    standards: ["CSRD (Corporate Sustainability Due Diligence Directive)", "ESRS (European Sustainability Reporting Standards)", "GRI Standards 2021"],
    introduction: [
      "Tras analizar los reportes del sector de Real Estate e incorporar prompts avanzados para el mapeo de stakeholders, hoy damos el salto cuantitativo del mes.",
      "Sostenibilidad que no se mide y no se cruza con las finanzas, es solo filantropía.",
      "Hoy te entregamos el plano técnico y las fórmulas exactas para construir tu propia Matriz de Doble Materialidad, el estándar global impuesto por la CSRD."
    ],
    section1Title: "1. El Enfoque Técnico: ¿Qué es la Doble Materialidad Real?",
    section1Subtitle: "Separando la Materialidad de Impacto de la Materialidad Financiera",
    section1Content: [
      "Dejen de lado las matrices bidimensionales subjetivas basadas en 'opinómetro'. La doble materialidad técnica exige evaluar cada IRO (Impacto, Riesgo u Oportunidad) bajo dos lentes independientes:"
    ],
    section1KeyPillars: [
      {
        title: "Materialidad de Impacto (Inside-Out)",
        description: "El impacto de la empresa en las personas y el medio ambiente. Se mide utilizando tres variables GRI/ESRS: Escala (gravedad), Alcance (extensión) e Irremediabilidad (qué tan difícil es revertirlo)."
      },
      {
        title: "Materialidad Financiera (Outside-In)",
        description: "Eventos externos de sostenibilidad que generan riesgos u oportunidades financieras para la compañía. Se mide bajo dos variables de riesgo: Probabilidad de ocurrencia y Magnitud del impacto financiero."
      }
    ],
    section2Title: "2. El Blueprint de la Herramienta: Estructura de Columnas (A a M)",
    excelColumns: [
      { column: "Columna A", title: "ID", description: "Identificador único (Ej: ESG-01, ESG-02)", block: "Datos Base" },
      { column: "Columna B", title: "Dimensión", description: "Ambiental / Social / Gobernanza", block: "Datos Base" },
      { column: "Columna C", title: "Tema Específico", description: "Ej: Emisiones de Alcance 1 y 2, Brecha Salarial", block: "Datos Base" },
      { column: "Columna D", title: "Tipo de Vector", description: "Impacto / Riesgo / Oportunidad", block: "Datos Base" },
      { column: "Columna E", title: "Escala (1-5)", description: "Severidad del impacto (1 = Despreciable, 5 = Crítico)", block: "Bloque 1: Impacto (Inside-Out)" },
      { column: "Columna F", title: "Alcance (1-5)", description: "Extensión geográfica/operativa (1 = Localizado, 5 = Global)", block: "Bloque 1: Impacto (Inside-Out)" },
      { column: "Columna G", title: "Irremediabilidad (1-5)", description: "Capacidad de mitigación (1 = Inmediata, 5 = Irreversible)", block: "Bloque 1: Impacto (Inside-Out)" },
      { column: "Columna H", title: "Score Impacto", description: "Fórmula automática de promedio ponderado", block: "Bloque 1: Impacto (Inside-Out)" },
      { column: "Columna I", title: "Probabilidad (1-5)", description: "Viabilidad de que ocurra (1 = Remoto, 5 = Casi seguro)", block: "Bloque 2: Financiera (Outside-In)" },
      { column: "Columna J", title: "Magnitud Financiera (1-5)", description: "Impacto en EBITDA/Balance (1 = Insignificante, 5 = Catastrófico)", block: "Bloque 2: Financiera (Outside-In)" },
      { column: "Columna K", title: "Score Financiero", description: "Fórmula normalizada de raíz cuadrada del producto", block: "Bloque 2: Financiera (Outside-In)" },
      { column: "Columna L", title: "¿Es Material?", description: "Filtro automático con función lógica SI(O(...))", block: "Bloque 3: Umbral de Decisión" },
      { column: "Columna M", title: "Acción Estratégica", description: "Priorización para el Reporte de Sostenibilidad", block: "Bloque 3: Umbral de Decisión" }
    ],
    section3Title: "3. Las Fórmulas Lógicas de Automatización",
    excelFormulas: [
      {
        cell: "Celda H2",
        name: "Score de Materialidad de Impacto",
        formula: "=REDONDEAR((E2+F2+G2)/3; 2)",
        description: "Calcula el promedio ponderado exacto de Escala, Alcance e Irremediabilidad en escala 1 a 5."
      },
      {
        cell: "Celda K2",
        name: "Score de Materialidad Financiera Normalizado",
        formula: "=REDONDEAR((I2*J2)^0,5; 2)",
        description: "Aplica la raíz cuadrada al producto de Probabilidad y Magnitud para normalizar la escala a 1-5."
      },
      {
        cell: "Celda L2",
        name: "Criterio de Materialidad (Umbral ≥ 3.5)",
        formula: "=SI(O(H2>=3,5; K2>=3,5); \"SÍ\"; \"NO\")",
        description: "Cumple la directiva ESRS: un tema es material si supera el umbral en CUALQUIERA de las dos dimensiones."
      },
      {
        cell: "Celda M2",
        name: "Clasificación y Priorización de Gestión",
        formula: "=SI(Y(H2>=3,5; K2>=3,5); \"Prioridad Crítica (Doble)\"; SI(H2>=3,5; \"Prioridad de Impacto\"; SI(K2>=3,5; \"Prioridad Financiera\"; \"Monitorear Pasivo\")))",
        description: "Asigna automáticamente la categoría de reporte para el Directorio y la memoria anual."
      }
    ],
    section4Title: "4. AI Synergy: El Prompt para alimentar tu Excel",
    promptBlock: {
      title: "Prompt Alimentador de Matriz de Doble Materialidad",
      role: "Consultor de Sostenibilidad Senior experto en normativa europea CSRD y estándares GRI",
      instructions: `Actúa como un Consultor de Sostenibilidad Senior experto en la normativa europea CSRD y los estándares GRI. Necesito poblar una Matriz de Doble Materialidad para una empresa del sector [Insertar sector, ej: Manufactura textil / Alimentos]. Genera un listado técnico de 8 temas materiales específicos. Para cada tema de las dimensiones E, S y G, debes entregarme los datos estructurados exactamente separados por punto y coma (;) para poder pasarlos a Excel: Dimensión; Tema Específico; Tipo de Vector (Impacto, Riesgo u Oportunidad); Descripción técnica del escenario de impacto o financiero. Evita generalidades. Asegúrate de incluir al menos dos riesgos financieros vinculados al cambio climático (físicos o de transición) y dos impactos sociales en los trabajadores de la cadena de valor.`,
      variables: [
        { name: "[Sector]", description: "Industria de la empresa evaluada", example: "Agroindustria / Logística de frío / Finanzas" }
      ],
      explanationPoints: [
        "Entrega datos delimitados por punto y coma (;) listos para 'Texto en Columnas' de Excel.",
        "Obliga a incluir riesgos climáticos físicos y de transición según TCFD.",
        "Separa vectores de Impacto (Inside-Out) de vectores de Riesgo Financiero (Outside-In)."
      ]
    },
    nextEditionTeaser: {
      edition: "Edición #04",
      date: "Viernes 25 de Septiembre de 2026",
      topic: "AI Workflow: Automatizando el Gap Analysis de Proveedores en escala (Debida Diligencia CSDDD)",
      format: "Semana 4 — AI Workflow Showcase"
    },
    productionNotes: {
      institutionalFocus: "Traduce normativas complejas (CSRD / ESRS) a lógica matemática replicable de oficina sin requerir software costoso.",
      practicalValue: "El consultor o gerente puede armar su matriz en 30 minutos ahorrando semanas de diseño.",
      scheduleAlignment: "Semana 3 del Ciclo: Herramienta en Excel del Mes."
    }
  },

  // =========================================================================
  // EDICIÓN #04 - AI WORKFLOW (GAP ANALYSIS PROVEEDORES)
  // =========================================================================
  {
    id: 4,
    editionNumber: "#04",
    title: "AI Workflow: Automatizando el Gap Analysis de Proveedores en escala",
    subtitle: "Cómo estructurar un flujo de auditoría asistido por IA para contrastar códigos de conducta y políticas de debida diligencia (CSDDD).",
    subjectLine: "[FridAI Brief #04] AI Workflow: Automatizando el Gap Analysis de Proveedores en escala",
    category: "ai-workflow",
    categoryLabel: "AI Workflow",
    categoryColor: "#09193a",
    cycleWeek: 4,
    releaseDate: "2026-09-25T08:00:00-03:00",
    formattedReleaseDate: "Viernes 25 de Septiembre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Debida Diligencia en Cadena de Valor (CSDDD)",
    standards: ["CSDDD (Corporate Sustainability Due Diligence Directive)", "Principios Rectores ONU sobre Empresas y DDHH", "GRI 204 & GRI 414"],
    introduction: [
      "Cerramos nuestro primer mes tras haber desarmado reportes financieros sostenibles, estructurado prompts de mapeo y configurado matrices automatizadas en Excel.",
      "Hoy daremos el paso definitivo hacia la eficiencia operativa: cómo estructurar un flujo de trabajo asistido por IA para auditar las políticas de tus proveedores en minutos.",
      "Uno de los mayores cuellos de botella en la debida diligencia de la cadena de valor es la revisión de documentos de terceros. Leer manuales de 50 proveedores toma semanas. Hoy sistematizamos el proceso."
    ],
    section1Title: "1. El Enfoque Técnico: La Debida Diligencia Automatizada",
    section1Subtitle: "Rastrear evidencia de gobernanza operativa, no palabras bonitas",
    section1Content: [
      "Auditar la cadena de valor no implica buscar 'palabras bonitas' en los PDFs de tus proveedores, sino rastrear evidencia de gobernanza operativa bajo tres niveles de cumplimiento:"
    ],
    section1KeyPillars: [
      {
        title: "1. Existencia Formal",
        description: "¿El proveedor cuenta con una política explícita de derechos humanos, anticorrupción o gestión ambiental formalmente aprobada?"
      },
      {
        title: "2. Mecanismos de Reclamo (Grievance)",
        description: "¿Detalla canales anónimos, accesibles y seguros para denuncias internas y de trabajadores tercerizados?"
      },
      {
        title: "3. Métricas y Sanciones",
        description: "¿Especifica qué consecuencias acarrea el incumplimiento de la política o cómo auditan su efectividad periódica?"
      }
    ],
    section2Title: "2. El Workflow Paso a Paso (Tu Guía de Implementación)",
    stepByStepWorkflow: [
      {
        step: "Paso 1",
        title: "Consolidación de Insumos",
        description: "Carga el PDF del Código de Conducta para Proveedores de tu propia empresa (estándar a cumplir) junto al PDF de la política, memoria o manual del Proveedor a auditar."
      },
      {
        step: "Paso 2",
        title: "Ejecución del Prompt de Contraste",
        description: "Ejecuta la instrucción maestra en la misma sesión de contexto extendido para aislar gaps con cita textual obligatoria."
      },
      {
        step: "Paso 3",
        title: "Generación de Matriz & Plan 90 Días",
        description: "La IA genera la tabla de compliance con severidad (Bajo/Medio/Alto) y el plan de mitigación correctivo para el área de compras sostenibles."
      }
    ],
    section3Title: "3. Matriz de Salida Esperada (Ejemplo de Rendimiento)",
    genericTable: {
      headers: ["Criterio de nuestro Código", "Estado en el Proveedor", "Evidencia Textual (Cita)", "Severidad del Gap"],
      rows: [
        {
          "Criterio de nuestro Código": "Mecanismo de Denuncias",
          "Estado en el Proveedor": "Cumple Parcialmente",
          "Evidencia Textual (Cita)": "\"La empresa cuenta con un correo de Recursos Humanos para canalizar dudas internas...\" (Pág. 12).",
          "Severidad del Gap": "Medio (El canal no garantiza anonimato estricto bajo estándares internacionales)."
        },
        {
          "Criterio de nuestro Código": "Garantía de No Trabajo Infantil",
          "Estado en el Proveedor": "Cumple",
          "Evidencia Textual (Cita)": "\"Queda estrictamente prohibida la contratación de menores de 18 años en toda nuestra línea de ensamblaje...\" (Pág. 4).",
          "Severidad del Gap": "Bajo (Alineado a normativas de la OIT)."
        },
        {
          "Criterio de nuestro Código": "Trazabilidad de Minerales de Conflicto",
          "Estado en el Proveedor": "No Evidenciado",
          "Evidencia Textual (Cita)": "No se registran menciones al origen de los componentes electrónicos en el documento analizado.",
          "Severidad del Gap": "Alto (Crítico para proveedores de hardware o manufactura tecnológica)."
        }
      ]
    },
    section4Title: "4. AI Toolkit: Prompt Maestro de Auditoría de Proveedores",
    promptBlock: {
      title: "Prompt Maestro: Gap Analysis de Políticas de Cadena de Suministro",
      role: "Auditor ESG Senior especialista en Gestión de Cadena de Suministro y Debida Diligencia",
      instructions: `Actúa como un Auditor ESG Senior especialista en Gestión de Cadena de Suministro y Debida Diligencia. Analiza el documento adjunto "[Insertar Nombre del Archivo del Proveedor]" utilizando como estándar de referencia el "[Insertar Nombre de tu Código de Proveedores corporativo]". Tu tarea es realizar un Análisis de Brechas (Gap Analysis) estricto. Genera un reporte técnico estructurado bajo los siguientes apartados:

1. TABLA DE EVALUACIÓN DE COMPLIANCE: Crea una tabla con 4 columnas:
- Criterio de tu Código (Ej: Prohibición de Trabajo Forzoso, Gestión de Residuos Peligrosos, Canales de Denuncia).
- Estado en el Proveedor (Cumple / Cumple Parcialmente / No Evidenciado).
- Evidencia Textual (Cita exacta del documento del proveedor con el número de página si aplica).
- Severidad del Gap (Bajo / Medio / Alto).

2. ANÁLISIS DE PUNTOS CRÍTICOS: Detalla las áreas donde el proveedor se encuentra en "No Evidenciado" o "Cumple Parcialmente" que representen un riesgo legal o reputacional inminente.

3. RECOMENDACIÓN DE MITIGACIÓN: Redacta un párrafo de 100 palabras con el plan de acción sugerido que el área de Compras Sostenibles debería exigirle a este proveedor en los próximos 90 días. Mantén un tono de auditoría regulatoria, objetivo y riguroso.`,
      variables: [
        { name: "[Archivo del Proveedor]", description: "PDF o texto de la memoria/política del proveedor", example: "Manual_Proveedor_Logistico_2025.pdf" },
        { name: "[Código Corporativo]", description: "Estándar o Código de Conducta de tu empresa", example: "Codigo_Conducta_Proveedores_V3.pdf" }
      ],
      explanationPoints: [
        "Fuerza a transcribir citas exactas con página para evitar alucinaciones.",
        "Clasifica brechas por severidad para filtrar dónde enfocar auditorías in situ.",
        "Genera un plan de acción formal de 90 días para el departamento de compras."
      ]
    },
    nextEditionTeaser: {
      edition: "Edición #05",
      date: "Viernes 2 de Octubre de 2026",
      topic: "Deep-Dive: Los Gaps de Alcance 3 y la agenda regenerativa de Natura &Co",
      format: "Semana 1 — Deep-Dive de Reporte Corporativo"
    },
    productionNotes: {
      institutionalFocus: "Soluciona un problema de debida diligencia real y masivo sin depender de coyunturas.",
      practicalValue: "Reduce el tiempo de triaje de proveedores de 2 semanas a 15 minutos por legajo.",
      scheduleAlignment: "Semana 4 del Ciclo: AI Workflow Showcase."
    }
  },

  // =========================================================================
  // EDICIÓN #05 - DEEP-DIVE (NATURA &CO)
  // =========================================================================
  {
    id: 5,
    editionNumber: "#05",
    title: "Desarmando a un gigante: Los Gaps de Alcance 3 y la agenda regenerativa de Natura",
    subtitle: "Bioeconomía amazónica, packaging circular, monetización ambiental EP&L y la encrucijada del Alcance 3.",
    subjectLine: "[FridAI Brief #05] Desarmando a un gigante: Los Gaps de Alcance 3 y la agenda regenerativa de Natura",
    category: "deep-dive",
    categoryLabel: "Deep-Dive de Reporte",
    categoryColor: "#60afc1",
    cycleWeek: 1,
    releaseDate: "2026-10-02T08:00:00-03:00",
    formattedReleaseDate: "Viernes 2 de Octubre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Natura &Co (Brasil / Regional)",
    standards: ["EP&L (Environmental Profit & Loss)", "SBTi (Science Based Targets)", "Empresa B Certificada", "Directiva Green Claims UE"],
    introduction: [
      "Comenzamos nuestro segundo mes regresando al formato analítico de Reportes ESG.",
      "Hoy ponemos bajo el microscopio institucional el reporte de Natura &Co, históricamente considerada el estándar de oro en sostenibilidad en América Latina.",
      "El objetivo de hoy no es repetir los elogios de marketing, sino desglosar con precisión técnica cómo gestionan su cadena de suministro en la Amazonia, cómo calculan su circularidad y dónde radican sus mayores desafíos de descarbonización."
    ],
    section1Title: "1. El Deep-Dive: Sostenibilidad Regenerativa vs. Descarbonización Tradicional",
    section1Subtitle: "De la mitigación pasiva a la regeneración de ecosistemas de base biológica",
    section1Content: [
      "Natura ha migrado su discurso de la 'sustentabilidad que mitiga' a la 'sustentabilidad que regenera'. En el sector de bienes de consumo (FMCG) de base biológica, esto se traduce en métricas duras de bioeconomía."
    ],
    section1KeyPillars: [
      {
        title: "Bioeconomía y Trazabilidad",
        description: "Su modelo depende de mantener la selva en pie. El reporte destaca el volumen de negocios con comunidades locales de la Amazonia, distribuyendo beneficios y blindando la resiliencia de la cadena biológica."
      },
      {
        title: "Circularidad del Packaging",
        description: "Apuesta por plástico reciclado posconsumo (PCR) y repuestos (refills). El desafío es logístico: la tasa de recolección en los mercados latinoamericanos sigue siendo estructuralmente baja."
      },
      {
        title: "La Encrucijada del Alcance 3",
        description: "Al ser una empresa de venta por relaciones, la última milla y el fin de vida representan más del 90% de su huella de carbono real. Descarbonizar un canal masivo y fragmentado es su mayor reto."
      }
    ],
    section2Title: "2. Matriz ESG: Fortalezas y Brechas (Gaps) Técnicas",
    esgMatrix: [
      {
        dimension: "Ambiental (E)",
        strength: "Modelos avanzados de cuantificación del impacto ambiental a través del indicador EP&L (Environmental Profit & Loss), monetizando el impacto en los ecosistemas.",
        gap: "Dependencia de la compensación: A pesar de ser Carbono Neutro desde 2007, el peso de la compensación (offsets) vs. reducción absoluta sigue bajo la lupa de la Directiva de Green Claims de la UE."
      },
      {
        dimension: "Social (S)",
        strength: "Indicadores sobresalientes de Ingreso Digno (Living Wage) implementados en su fuerza laboral y extendidos hacia los líderes de las comunidades recolectoras en el campo.",
        gap: "Medición del impacto sistémico: Alta complejidad para auditar las condiciones socioeconómicas de la base de consultoras independientes sin caer en sesgos estadísticos."
      },
      {
        dimension: "Gobernanza (G)",
        strength: "Compromiso del Directorio validado por metas amarradas a la agenda de SBTi y estatus persistente como Empresa B Certificada.",
        gap: "Complejidad Corporativa: Tras reestructuraciones de marcas en años recientes, el desafío radica en homogeneizar los estándares técnicos en mercados internacionales disímiles."
      }
    ],
    advisorInsight: "Natura demuestra que el verdadero liderazgo ESG ya no mide solo los impactos operativos directos (Alcance 1 y 2), sino la capacidad de crear una red de valor donde los proveedores rurales operan como socios climáticos de largo plazo.",
    section3Title: "3. El Entregable de la Semana: Checklist para Modelos de Bioeconomía",
    checklist: [
      {
        id: "chk-5-1",
        title: "¿Existe trazabilidad hasta el origen botánico/agrícola?",
        description: "No basta con la factura del distribuidor intermedio; los estándares de Debida Diligencia exigen georreferenciación para asegurar que no hay deforestación."
      },
      {
        id: "chk-5-2",
        title: "¿Los acuerdos con comunidades locales incluyen Propiedad Intelectual?",
        description: "Verificá que el uso de saberes tradicionales respete el Protocolo de Nagoya sobre acceso a recursos genéticos y distribución justa."
      },
      {
        id: "chk-5-3",
        title: "¿El indicador EP&L está integrado a las decisiones financieras?",
        description: "Monetizar el impacto ambiental en el balance financiero es la única forma de que el Directorio entienda el riesgo real de la pérdida de biodiversidad."
      }
    ],
    section4Title: "4. AI Toolkit: Prompt para Auditar Greenwashing en Claims Ambientales",
    promptBlock: {
      title: "Prompt Maestro: Auditoría de Declaraciones de Neutralidad de Carbono",
      role: "Auditor Senior de Greenwashing y especialista en la Directiva de Green Claims de la Unión Europea",
      instructions: `Actúa como un Auditor Senior de Greenwashing y especialista en la Directiva de Green Claims de la Unión Europea. Analiza el siguiente fragmento del reporte de sostenibilidad de [Insertar Empresa/Sector] enfocado en sus declaraciones de "Neutralidad de Carbono" o "Impacto Positivo". Tu tarea es evaluar el rigor científico del texto identificando: 1) Si se detalla con precisión el porcentaje de reducción absoluta de emisiones vs. el porcentaje resuelto mediante la compra de créditos de carbono (offsets), 2) La calidad de los proyectos de compensación mencionados (¿tienen certificación Gold Standard o Verra?), y 3) Si la declaración de neutralidad abarca la totalidad del Alcance 3 o si excluye de manera tramposa el uso/fin de vida del producto. Entrega los hallazgos en un informe con tono crítico, técnico y preventivo para evitar riesgos reputacionales.`,
      variables: [
        { name: "[Empresa/Sector]", description: "Nombre de la empresa y sector", example: "Compañía multinacional de bebidas y alimentos" },
        { name: "[Fragmento]", description: "Declaración textual de neutralidad o claims climáticos", example: "Capítulo 'Nuestro Camino hacia el Net-Zero 2030'" }
      ],
      explanationPoints: [
        "Detecta el ratio entre reducción real de emisiones y compra de bonos de carbono.",
        "Exige verificación de certificaciones internacionales de offset (Gold Standard / Verra).",
        "Examina si se excluye deliberadamente el uso o fin de vida en el Alcance 3."
      ]
    },
    nextEditionTeaser: {
      edition: "Edición #06",
      date: "Viernes 9 de Octubre de 2026",
      topic: "Prompt Engineering: Cómo redactar Políticas DEI con rigor técnico y cero clichés",
      format: "Semana 2 — Guía de Prompt Engineering"
    },
    productionNotes: {
      institutionalFocus: "Introduce el concepto de monetización ambiental (EP&L) y el contraste con la Directiva de Green Claims de la UE.",
      practicalValue: "Eleva el perfil crítico del suscriptor frente a las declaraciones publicitarias corporativas.",
      scheduleAlignment: "Semana 1 del Ciclo: Deep-Dive de Reporte Corporativo."
    }
  },

  // =========================================================================
  // EDICIÓN #06 - PROMPT ENGINEERING (POLÍTICAS DEI)
  // =========================================================================
  {
    id: 6,
    editionNumber: "#06",
    title: "Prompt Engineering: Cómo redactar Políticas DEI con rigor técnico y cero clichés",
    subtitle: "Gobernanza de la dimensión social: alineación con Estándar GRI 405, Convenio 190 OIT y Principios WEPs.",
    subjectLine: "[FridAI Brief #06] Prompt Engineering: Cómo redactar Políticas DEI con rigor técnico y cero clichés",
    category: "prompt-engineering",
    categoryLabel: "Prompt Engineering",
    categoryColor: "#696484",
    cycleWeek: 2,
    releaseDate: "2026-10-09T08:00:00-03:00",
    formattedReleaseDate: "Viernes 9 de Octubre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Diseño de Políticas de Diversidad, Equidad e Inclusión",
    standards: ["GRI 405 (Diversidad e Igualdad de Oportunidades)", "Convenio 190 OIT", "Principios WEPs (ONU Mujeres)", "ISO 30415"],
    introduction: [
      "El viernes pasado desarmamos la estrategia de bioeconomía de Natura y su gestión del Alcance 3.",
      "Hoy regresamos a nuestra caja de herramientas tecnológicas para abordar un pilar crítico de la 'S' (Social) y la 'G' (Gobernanza): la estructuración de Políticas de Diversidad, Equidad e Inclusión (DEI).",
      "El gran error al redactar estos documentos con IA es usar prompts vagos como 'escribe una política de diversidad'. El resultado suele ser un texto lleno de lugares comunes que no resiste una auditoría de debida diligencia. Hoy te damos el prompt maestro con fuerza de gobernanza."
    ],
    section1Title: "1. El Enfoque Técnico: Del Discurso a la Métrica de Control",
    section1Subtitle: "Tres filtros normativos internacionales obligatorios",
    section1Content: [
      "Una política DEI con estándar CapacitaRSE no es un manifiesto filosófico; es un documento de gobernanza. Para tener validez técnica, la IA debe cruzar el borrador por tres filtros normativos internacionales:"
    ],
    section1KeyPillars: [
      {
        title: "1. Estándar GRI 405 (Diversidad e Igualdad)",
        description: "Exige que la política siente las bases para reportar datos desglosados de gobernanza, categorías profesionales, edad, género y grupos vulnerables."
      },
      {
        title: "2. Convenio 190 de la OIT",
        description: "La política debe conectarse explícitamente con entornos seguros, abordando la prevención de la violencia y el acoso en el mundo del trabajo."
      },
      {
        title: "3. Principios WEPs (Empoderamiento de las Mujeres)",
        description: "Directrices claras sobre igualdad de remuneración por trabajo de igual valor y desarrollo profesional en puestos de toma de decisiones."
      }
    ],
    section2Title: "2. El Prompt Maestro: Ingeniería de Gobernanza para la Dimensión Social",
    promptBlock: {
      title: "Prompt Maestro: Política Corporativa DEI Auditada",
      role: "Consultor Senior de Sostenibilidad Corporativa y Abogado Especialista en Derecho Laboral Internacional",
      instructions: `Actúa como un Consultor Senior de Sostenibilidad Corporativa y Abogado Especialista en Derecho Laboral Internacional. Necesito co-diseñar el armazón técnico para la primera "Política Institucional de Diversidad, Equidad e Inclusión (DEI)" de la siguiente organización:

- Empresa/Sector: [Ej: Empresa de servicios tecnológicos y desarrollo de software].
- Dotación aproximada: [Ej: 450 colaboradores, 70% remoto].
- Geografía: [Ej: Operaciones en Chile y Colombia].
- Desafío detectado: [Ej: Baja representación de mujeres en puestos de liderazgo técnico y necesidad de protocolizar la inclusión de personas con discapacidad].

Escribe una estructura detallada y el contenido de los apartados clave para esta política, asegurando alineación implícita con el Estándar GRI 405 y el Convenio 190 de la OIT. Utiliza un tono corporativo, imperativo y de cumplimiento técnico. Divide el entregable en:

1. OBJETIVO Y ALCANCE: Define con precisión a quién aplica (incluyendo contratistas en la cadena de valor).
2. PILARES DE ACCIÓN: Redacta tres compromisos operativos concretos para: a) Procesos de selección ciegos/libres de sesgo, b) Equidad salarial (vínculo a auditorías de brecha), y c) Canales de denuncia seguros y confidenciales para casos de discriminación.
3. MECANISMO DE GOBERNANZA: Detalla quién es el órgano responsable de velar por el cumplimiento de la política (Comité de Ética / Sostenibilidad) y la periodicidad de su revisión.
4. CUADRO DE INDICADORES (KPIs): Genera una tabla Markdown con 3 indicadores específicos que la empresa deberá medir anualmente para demostrar que cumple esta política (asocia cada KPI a una métrica reportable GRI).

Evita adjetivos poéticos o declaraciones aspiracionales vacías. Céntrate en la responsabilidad operativa.`,
      variables: [
        { name: "[Empresa/Sector]", description: "Industria y tamaño de la organización", example: "Banca regional / Empresa de logística" },
        { name: "[Dotación]", description: "Cantidad de colaboradores y modalidad", example: "1,200 colaboradores en planta y oficinas" },
        { name: "[Desafío]", description: "Foco principal detectado en diagnóstico", example: "Brecha salarial y falta de protocolos antiacoso en faena" }
      ],
      explanationPoints: [
        "Segmentación del Alcance: Incluye contratistas de la cadena de valor para cumplir con debida diligencia.",
        "Anclaje a KPIs GRI: Vincula compromisos a indicadores medibles para la siguiente memoria de sostenibilidad.",
        "Filtro de Tono: Elimina el relleno publicitario y asegura un texto con fuerza legal y operativa interna."
      ],
      followUpPrompts: [
        {
          title: "Micro-Prompt 1: Cláusula de Adaptación Regulatoria Local",
          prompt: `Revisa la sección de 'Pilares de Acción' generada anteriormente y añade una cláusula técnica de adaptación regulatoria para asegurar el cumplimiento de las leyes de cuotas de empleo para personas con discapacidad vigentes en [País, ej: Chile / Colombia / Argentina / México].`
        },
        {
          title: "Micro-Prompt 2: Plan de Capacitación para Mandos Medios",
          prompt: `Diseña una propuesta de temario para 3 talleres cortos de sensibilización dirigidos a mandos medios (Líderes de Proyecto), con el fin de viabilizar la implementación práctica de esta política en el día a día operativo.`
        }
      ]
    },
    section3Title: "3. Anatomía del Prompt: Por qué mitiga el riesgo legal",
    checklist: [
      {
        id: "chk-6-1",
        title: "Cero Adjetivos Poéticos",
        description: "Las políticas auditables se redactan con verbos de acción y obligaciones de cumplimiento, no con aspiraciones poéticas."
      },
      {
        id: "chk-6-2",
        title: "Gobernanza con Nombre y Apellido",
        description: "Define explícitamente quién supervisa la política (Comité de Ética / Directorio) y cada cuánto se revisa."
      },
      {
        id: "chk-6-3",
        title: "Canales de Denuncia Protegidos",
        description: "Exige canales confidenciales con protocolo de no represalias alineado al Convenio 190 de la OIT."
      }
    ],
    section4Title: "4. Biblioteca de Micro-Prompts de Seguimiento",
    nextEditionTeaser: {
      edition: "Edición #07",
      date: "Viernes 16 de Octubre de 2026",
      topic: "Herramienta del Mes: Calculadora de Emisiones Alcance 1 y 2 en Excel (GHG Protocol)",
      format: "Semana 3 — Herramienta en Excel del Mes"
    },
    productionNotes: {
      institutionalFocus: "Empuja a los suscriptores a entender que los temas de diversidad no son 'RSE blanda', sino métricas duras de gobernanza.",
      practicalValue: "Entrega una política lista para ser revisada por el departamento de legales o recursos humanos.",
      scheduleAlignment: "Semana 2 del Ciclo: Guía de Prompt Engineering."
    }
  },

  // =========================================================================
  // EDICIÓN #07 - HERRAMIENTA EXCEL (CALCULADORA GEI ALCANCE 1 Y 2)
  // =========================================================================
  {
    id: 7,
    editionNumber: "#07",
    title: "Herramienta del Mes: Tu Calculadora de Emisiones Alcance 1 y 2 (GHG Protocol)",
    subtitle: "Matemática del carbono, plano técnico de hoja de cálculo y distinción metodológica Location vs Market-based.",
    subjectLine: "[FridAI Brief #07] Herramienta del Mes: Tu Calculadora de Emisiones Alcance 1 y 2 (GHG Protocol)",
    category: "excel-tool",
    categoryLabel: "Herramienta Excel",
    categoryColor: "#e76f51",
    cycleWeek: 3,
    releaseDate: "2026-10-16T08:00:00-03:00",
    formattedReleaseDate: "Viernes 16 de Octubre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Contabilidad de Carbono Corporativa",
    standards: ["GHG Protocol (Corporate Accounting and Reporting Standard)", "ISO 14064-1", "GRI 305: Emisiones"],
    introduction: [
      "La semana pasada definimos cómo redactar políticas DEI sin caer en clichés y con rigor institucional.",
      "Hoy nos ponemos el overol numérico: entramos en la contabilidad del carbono.",
      "Uno de los mayores desafíos para las empresas medianas y pequeñas es costear plataformas SaaS de gestión de huella de carbono. Sin embargo, el 90% puede resolver su inventario de Alcance 1 (Directas) y Alcance 2 (Indirectas por energía) con una hoja de cálculo correctamente formulada y auditada."
    ],
    section1Title: "1. El Marco Metodológico: La Matemática del Carbono",
    section1Subtitle: "La fórmula fundamental de cuantificación de emisiones GEI",
    section1Content: [
      "De acuerdo con el GHG Protocol (Corporate Standard), la cuantificación de las emisiones de gases de efecto invernadero se rige por una fórmula fundamental de multiplicación:",
      "E = AD × EF × GWP"
    ],
    section1KeyPillars: [
      {
        title: "E (Emisiones Totales)",
        description: "Representa las emisiones expresadas en toneladas métricas de dióxido de carbono equivalente (tCO₂e)."
      },
      {
        title: "AD (Activity Data / Datos de Actividad)",
        description: "El dato de consumo extraído de facturas o medidores (litros de diésel, m³ de gas natural, kWh facturados)."
      },
      {
        title: "EF (Emission Factor / Factor de Emisión)",
        description: "Coeficiente oficial que indica cuántos kg de CO₂ se emiten por cada unidad de recurso según la matriz local."
      },
      {
        title: "GWP (Global Warming Potential)",
        description: "Potencial de calentamiento de gases traza (CH₄, N₂O) para llevarlos a la unidad común de CO₂e (usualmente ya integrado en el EF oficial)."
      }
    ],
    section2Title: "2. El Blueprint de la Planilla Excel: Estructura de Columnas (A a H)",
    excelColumns: [
      { column: "Columna A", title: "ID", description: "Identificador único de registro (ej: GEI-01)", block: "Datos Base" },
      { column: "Columna B", title: "Alcance", description: "Clasificación estricta: Alcance 1 o Alcance 2", block: "Datos Base" },
      { column: "Columna C", title: "Fuente de Emisión", description: "Gas Natural-Calefacción, Diésel-Flota Propia, Electricidad-Red", block: "Datos Base" },
      { column: "Columna D", title: "Dato de Actividad", description: "Consumo numérico extraído de facturas o medidores", block: "Datos de Consumo" },
      { column: "Columna E", title: "Unidad", description: "Unidad física de medida (m³, L, kWh)", block: "Datos de Consumo" },
      { column: "Columna F", title: "Factor de Emisión", description: "Coeficiente de conversión oficial", block: "Factores de Emisión" },
      { column: "Columna G", title: "Unidad del Factor", description: "kgCO₂e/kWh, kgCO₂e/m³, tCO₂e/L", block: "Factores de Emisión" },
      { column: "Columna H", title: "Emisiones Totales (tCO₂e)", description: "Resultado en toneladas de carbono equivalente", block: "Cálculo Automatizado" }
    ],
    section3Title: "3. Fórmulas de Conversión y Doble Reporte de Alcance 2",
    excelFormulas: [
      {
        cell: "Celda H2 (Factor en kgCO₂e)",
        name: "Conversión de kg a Toneladas Métricas",
        formula: "=REDONDEAR((D2 * F2) / 1000; 3)",
        description: "Divide por 1,000 para pasar de kilogramos a toneladas métricas auditables (tCO₂e)."
      },
      {
        cell: "Celda H2 (Factor en tCO₂e)",
        name: "Cálculo Directo en Toneladas",
        formula: "=REDONDEAR(D2 * F2; 3)",
        description: "Multiplicación directa si el factor gubernamental ya está expresado en toneladas."
      }
    ],
    advisorInsight: "Al reportar Alcance 2 (electricidad), el GHG Protocol exige la distinción entre Enfoque de Localización (factor promedio de la red eléctrica nacional) y Enfoque de Mercado (refleja contratos de energía renovable PPA o certificados I-REC). Recomendamos reportar ambos.",
    section4Title: "4. AI Toolkit: El Extractor de Factores de Emisión Oficiales",
    promptBlock: {
      title: "Prompt Extractor de Factores de Emisión Gubernamentales",
      role: "Ingeniero Ambiental experto en Inventarios de Gases de Efecto Invernadero",
      instructions: `Actúa como un Ingeniero Ambiental experto en Inventarios de Gases de Efecto Invernadero. Necesito encontrar los factores de emisión oficiales más recientes para el año de reporte 2025/2026 en [Insertar País, ej: Argentina / México / España / Colombia]. Genérame una tabla técnica detallando los factores de emisión oficiales provistos por el ministerio de ambiente o secretaría de energía local para las siguientes fuentes de datos de actividad:

1. Electricidad de la red nacional interconectada (expresado en gCO2e/kWh o kgCO2e/kWh).
2. Consumo de Gas Natural de red comercial (expresado en kgCO2e/m3).
3. Diésel de uso comercial para transporte móvil (expresado en kgCO2e/litro).
4. Gasolina/Nafta para transporte móvil (expresado en kgCO2e/litro).

Para cada fuente, especifica la fuente bibliográfica oficial de donde se extrae el dato y el año de publicación del coeficiente. Presenta todo en una tabla Markdown limpia para copiar a Excel.`,
      variables: [
        { name: "[País]", description: "País donde operan las instalaciones", example: "Argentina / México / Colombia / Perú / Chile / España" }
      ],
      explanationPoints: [
        "Aísla los factores oficiales de secretarías de energía o ministerios ambientales.",
        "Garantiza la consistencia en unidades (gCO2e vs kgCO2e) para evitar errores de escala.",
        "Exige la cita bibliográfica exacta requerida por auditores de ISO 14064."
      ]
    },
    nextEditionTeaser: {
      edition: "Edición #08",
      date: "Viernes 23 de Octubre de 2026",
      topic: "AI Workflow: Cómo responder cuestionarios ESG (EcoVadis/CDP) en minutos sin alucinar",
      format: "Semana 4 — AI Workflow Showcase"
    },
    productionNotes: {
      institutionalFocus: "Traduce la metodología de GHG Protocol a lógica práctica de oficina eliminando errores comunes de decimales.",
      practicalValue: "Ahorra miles de dólares en licencias de software en etapas iniciales de medición climática.",
      scheduleAlignment: "Semana 3 del Ciclo: Herramienta en Excel del Mes."
    }
  },

  // =========================================================================
  // EDICIÓN #08 - AI WORKFLOW (CUESTIONARIOS ECOVADIS / CDP / RAG)
  // =========================================================================
  {
    id: 8,
    editionNumber: "#08",
    title: "AI Workflow: Cómo responder cuestionarios ESG (EcoVadis/CDP) en minutos sin alucinar",
    subtitle: "Cómo construir una Base de Conocimiento asistida por IA para contestar auditorías de clientes sin inventar información.",
    subjectLine: "[FridAI Brief #08] AI Workflow: Cómo responder cuestionarios ESG (EcoVadis/CDP) en minutos sin alucinar",
    category: "ai-workflow",
    categoryLabel: "AI Workflow",
    categoryColor: "#09193a",
    cycleWeek: 4,
    releaseDate: "2026-10-23T08:00:00-03:00",
    formattedReleaseDate: "Viernes 23 de Octubre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Automatización de Auditorías ESG y Evaluaciones de Proveedores",
    standards: ["EcoVadis Methodology", "CDP Climate / Water Questionnaires", "DJSI / S&P Global CSA", "ISO 14001 / ISO 45001"],
    introduction: [
      "La semana pasada estructuramos las fórmulas para construir una calculadora de huella de carbono de Alcance 1 y 2 en Excel.",
      "Hoy damos el paso hacia la automatización del flujo de trabajo: cómo responder las cientos de preguntas que tus clientes o auditores corporativos te hacen cada año sobre tu desempeño ESG.",
      "Si trabajás en sostenibilidad o asesorás a empresas en la cadena de grandes multinacionales, conocés el calvario: formularios interminables de EcoVadis y CDP que exigen adjuntar políticas y citar páginas exactas. Responderlos manualmente consume semanas. Hoy te enseñamos el flujo asistido por IA."
    ],
    section1Title: "1. El Enfoque Técnico: Evitar la Alucinación con Búsqueda Guiada por Evidencia",
    section1Subtitle: "En auditorías como EcoVadis o CDP, una respuesta no respaldada documentalmente vale cero puntos",
    section1Content: [
      "El gran riesgo de usar IA para responder evaluaciones de sostenibilidad es que la herramienta invente compromisos o políticas que la empresa no tiene firmadas.",
      "El flujo técnico correcto debe operar bajo la lógica de Búsqueda Guiada por Evidencia (RAG):"
    ],
    section1KeyPillars: [
      {
        title: "1. Anclaje Documental",
        description: "La IA solo puede responder utilizando como fuente el repositorio de documentos oficiales (Memorias GRI, Código de Conducta, Certificaciones ISO, Políticas DEI)."
      },
      {
        title: "2. Cita de Fuentes Exactas",
        description: "La IA debe indicar obligatoriamente el nombre del documento, sección y número de página de donde extrajo la afirmación."
      },
      {
        title: "3. Detección de Brecha (Gap)",
        description: "Si la empresa no cuenta con la política requerida, la IA debe declarar 'No evidenciado' en lugar de inventar una redacción genérica."
      }
    ],
    section2Title: "2. El Workflow Paso a Paso (Construyendo tu Base de Conocimiento)",
    stepByStepWorkflow: [
      {
        step: "Paso 1",
        title: "Indexación del Repositorio Interno",
        description: "Reúne en una carpeta o sesión de contexto los PDFs clave: Memoria GRI, Código de Conducta, Políticas Ambientales y SySO, Certificados ISO 9001/14001/45001 e Inventario GEI."
      },
      {
        step: "Paso 2",
        title: "Configuración del System Prompt",
        description: "Ingresa el System Prompt de Oficial de Compliance para restringir al modelo a responder exclusivamente con base en los archivos cargados."
      },
      {
        step: "Paso 3",
        title: "Pegado de Preguntas & Generación de Fichas",
        description: "Envía las preguntas del portal cliente. La IA entrega respuesta técnica, cita de manual y clasificación de evidencia."
      }
    ],
    section3Title: "3. Matriz de Salida Esperada (Ejemplo de Rendimiento)",
    genericTable: {
      headers: ["Pregunta del Cuestionario", "Respuesta Generada por IA", "Evidencia / Cita Interna", "Estado"],
      rows: [
        {
          "Pregunta del Cuestionario": "¿La empresa cuenta con procedimientos formales para la gestión segura de residuos peligrosos?",
          "Respuesta Generada por IA": "\"La compañía implementa un procedimiento estandarizado de clasificación, almacenamiento temporal y disposición final de residuos peligrosos mediante operadores autorizados, conforme a normativas locales.\"",
          "Evidencia / Cita Interna": "\"Manual de Gestión Ambiental ISO 14001 (Doc-ENV-04, Pág. 18): 'Sección 4.2: Manejo de Sustancias y Residuos Peligrosos'.\"",
          "Estado": "[Evidencia Sólida]"
        },
        {
          "Pregunta del Cuestionario": "¿Se realizan auditorías de derechos humanos en los proveedores de Nivel 2 (Tier 2)?",
          "Respuesta Generada por IA": "\"No se localiza evidencia documental que confirme la extensión de auditorías de debida diligencia hacia proveedores de segundo nivel.\"",
          "Evidencia / Cita Interna": "\"Información no encontrada en el repositorio actual.\"",
          "Estado": "[Sin Evidencia Documentada]"
        }
      ]
    },
    section4Title: "4. AI Toolkit: System Prompt para Responder Cuestionarios ESG",
    promptBlock: {
      title: "System Prompt: Oficial de Compliance y Evaluaciones ESG",
      role: "Oficial de Compliance y Especialista en Auditorías de Sostenibilidad (EcoVadis, CDP, DJSI)",
      instructions: `Actúa como un Oficial de Compliance y Especialista en Auditorías de Sostenibilidad (EcoVadis, CDP, DJSI). Tu única fuente de verdad para responder las preguntas sobre la empresa serán los documentos institucionales adjuntos a esta sesión. Para cada pregunta de cuestionario que te presente, debes generar un bloque de respuesta estandarizado con la siguiente estructura:

1. RESPUESTA TÉCNICA: Redacta una respuesta directa, formal y concisa (máximo 150 palabras) ajustada a la nomenclatura de las evaluaciones ESG corporativas.
2. EVIDENCIA Y CITA DIRECTA: Transcribe el fragmento textual exacto del documento interno que respalda la respuesta e indica el Nombre del Documento y Página/Sección.
3. ESTADO DE CUMPLIMIENTO: Clasifica como [Evidencia Sólida], [Evidencia Parcial] o [Sin Evidencia Documentada].
4. RECOMENDACIÓN DE MEJORA: Si la clasificación es "Parcial" o "Sin Evidencia", indica brevemente qué documento o cláusula falta redactar para obtener el puntaje máximo en la auditoría.

REGLA DE ORO: Si la información no existe en los documentos cargados, NO inventes ni asumas nada. Declara explícitamente "Información no encontrada en el repositorio actual".`,
      variables: [
        { name: "[Documentos Adjuntos]", description: "PDFs institucionales cargados en la sesión", example: "Memoria_2025.pdf, Codigo_Etica.pdf, ISO14001.pdf" }
      ],
      explanationPoints: [
        "Regla de Oro Anti-Alucinación: Prohíbe responder si no hay evidencia documental textual.",
        "Formato Ficha de Auditoría: Listo para copiar y pegar directamente en los portales web de EcoVadis o CDP.",
        "Identificación de Gaps: Muestra de inmediato qué política falta crear para ganar puntos."
      ]
    },
    nextEditionTeaser: {
      edition: "Edición #09",
      date: "Viernes 30 de Octubre de 2026",
      topic: "Deep-Dive: Transición Energética Justa: Cómo descarbonizar sin dejar a la comunidad atrás (Caso Ecopetrol)",
      format: "Semana 1 — Deep-Dive de Reporte Corporativo"
    },
    productionNotes: {
      institutionalFocus: "Soluciona un dolor de cabeza comercial masivo para empresas de la cadena de valor de multinacionales.",
      practicalValue: "Reduce el tiempo de llenado de cuestionarios en un 80% permitiendo foco en la gestión de políticas faltantes.",
      scheduleAlignment: "Semana 4 del Ciclo: AI Workflow Showcase."
    }
  },

  // =========================================================================
  // EDICIÓN #09 - DEEP-DIVE (ECOPETROL - TRANSICIÓN JUSTA)
  // =========================================================================
  {
    id: 9,
    editionNumber: "#09",
    title: "Transición Energética Justa: Cómo descarbonizar sin dejar a la comunidad atrás",
    subtitle: "El caso Ecopetrol: Diversificación hacia renovables (ISA), gestión de flaring, precio interno al carbono y reconversión laboral territorial.",
    subjectLine: "[FridAI Brief #09] Transición Energética Justa: Cómo descarbonizar sin dejar a la comunidad atrás",
    category: "deep-dive",
    categoryLabel: "Deep-Dive de Reporte",
    categoryColor: "#60afc1",
    cycleWeek: 1,
    releaseDate: "2026-10-30T08:00:00-03:00",
    formattedReleaseDate: "Viernes 30 de Octubre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Ecopetrol (Colombia / Regional)",
    standards: ["Directrices Transición Justa OIT", "TCFD", "SBTi Oil & Gas", "Internal Carbon Pricing"],
    introduction: [
      "Iniciamos nuestro tercer mes regresando a nuestra mesa de análisis de Reportes de Sostenibilidad para abordar el sector más presionado del planeta: Energía e Hidrocarburos.",
      "Ponemos bajo el microscopio la estrategia de Transición Energética Justa de Ecopetrol, un caso de estudio crítico sobre cómo una empresa de Petróleo & Gas busca diversificarse hacia renovables, transmisión eléctrica (ISA) e hidrógeno bajo en carbono, sin destruir el tejido socioeconómico de los territorios donde opera."
    ],
    section1Title: "1. El Deep-Dive: El Dilema de la Transición Justa",
    section1Subtitle: "Descarbonizar una petrolera es un desafío geopolítico, tecnológico y profundamente social",
    section1Content: [
      "Descarbonizar una empresa de software o un banco es un reto operativo; descarbonizar una petrolera o una generadora térmica es un reto social de supervivencia territorial.",
      "Aquí es donde cobra relevancia el concepto de Transición Justa (Just Transition) promovido por la OIT y el Pacto Global:"
    ],
    section1KeyPillars: [
      {
        title: "Diversificación del Negocio",
        description: "La adquisición estratégica de ISA (transmisión de energía) permite equilibrar ingresos fósiles con infraestructura eléctrica baja en emisiones en toda América Latina."
      },
      {
        title: "Gestión de Alcance 1 y 2",
        description: "Metas de cero emisiones netas para 2050 en operaciones directas, reduciendo la quema rutinaria de gas (flaring), eficiencia en refinerías y autogeneración solar."
      },
      {
        title: "Reconversión Laboral (El desafío de la 'S')",
        description: "El cuello de botella principal es la dependencia económica de los municipios petroleros. Se requieren programas reales de upskilling/reskilling para la mano de obra local."
      }
    ],
    section2Title: "2. Matriz ESG: Fortalezas y Brechas (Gaps) Técnicas",
    esgMatrix: [
      {
        dimension: "Ambiental (E)",
        strength: "Hoja de ruta clara para Hidrógeno Verde y Azul e integración de parques solares para autoconsumo en campos de extracción.",
        gap: "Emisiones de Alcance 3: El 85% a 90% del impacto ocurre cuando el cliente quema el combustible vendido. La meta de Alcance 3 sigue siendo aspiracional y dependiente de la demanda global."
      },
      {
        dimension: "Social (S)",
        strength: "Incorporación del enfoque de Derechos Humanos y Consulta Previa en proyectos de infraestructura y transmisión en zonas rurales e indígenas.",
        gap: "Riesgo de Desplazamiento Económico: Falta mayor profundidad en métricas sobre cuántos empleos indirectos 'verdes' se crean por cada empleo tradicional extractivo que se reconvierte."
      },
      {
        dimension: "Gobernanza (G)",
        strength: "Alineación explícita con recomendaciones de TCFD y fijación de un Precio Interno al Carbono para evaluar nuevos proyectos de inversión de capital.",
        gap: "Presión Regulatoria y Política: Vulnerabilidad de las metas de largo plazo frente a cambios de gobierno y giros en la política energética nacional."
      }
    ],
    advisorInsight: "Una Transición Energética que no garantiza la seguridad energética ni el sustento de las comunidades locales no es sostenible: es simplemente una crisis social diferida.",
    section3Title: "3. El Entregable de la Semana: Checklist para Planes de Transición",
    checklist: [
      {
        id: "chk-9-1",
        title: "¿El plan incluye partidas presupuestarias de Transición Justa?",
        description: "Verificá que existan fondos específicos asignados a la reconversión laboral y diálogo social con comunidades y sindicatos afectados."
      },
      {
        id: "chk-9-2",
        title: "¿Utilizan un Precio Interno al Carbono (Internal Carbon Pricing)?",
        description: "Proyectar inversiones considerando un costo por tonelada de CO₂ emitida evita la creación de activos varados (stranded assets)."
      },
      {
        id: "chk-9-3",
        title: "¿El Alcance 3 tiene objetivos basados en la ciencia (SBTi)?",
        description: "Exigí que la estrategia no se limite a oficinas o refinerías, sino al ciclo de vida completo del combustible comercializado."
      }
    ],
    section4Title: "4. AI Toolkit: Prompt para Evaluar Planes de Transición Climática",
    promptBlock: {
      title: "Prompt Maestro: Auditoría de Planes de Transición Justa (OIT / TCFD)",
      role: "Consultor Senior en Sostenibilidad e Inversión de Impacto especializado en el sector Energético e Industrial",
      instructions: `Actúa como un Consultor Senior en Sostenibilidad e Inversión de Impacto especializado en el sector Energético e Industrial. Analiza el siguiente texto/plan de transición climática de [Insertar Empresa o Sector] bajo las Directrices para una Transición Justa de la OIT (Organización Internacional del Trabajo) y los estándares del TCFD. Tu tarea es evaluar el documento e identificar:

1. Las metas cuantitativas de reducción de emisiones directas (Alcance 1 y 2) y si mencionan metas de Alcance 3.
2. Los mecanismos concretos de mitigación del impacto social (capacitación laboral, protección social y diálogo social con sindicatos/comunidades).
3. Tres "puntos ciegos" o riesgos no mitigados en la hoja de ruta presentada.

Entrega los resultados en un informe técnico de auditoría estructurado con recomendaciones para el Directorio.`,
      variables: [
        { name: "[Empresa o Sector]", description: "Compañía energética, minera o industrial pesada", example: "Compañía generadora térmica / Extractiva regional" }
      ],
      explanationPoints: [
        "Alinea el análisis con las directrices de la OIT sobre empleo y transición justa.",
        "Detecta si la descarbonización considera el costo social territorial.",
        "Evalúa la solidez del Precio Interno al Carbono en decisiones de CAPEX."
      ]
    },
    nextEditionTeaser: {
      edition: "Edición #10",
      date: "Viernes 6 de Noviembre de 2026",
      topic: "Prompt Engineering: Cómo auditar el pilar 'G' y los riesgos de corrupción con IA (GRI 205 / ISO 37301)",
      format: "Semana 2 — Guía de Prompt Engineering"
    },
    productionNotes: {
      institutionalFocus: "Pone el foco en la 'S' dentro de la transición climática, un aspecto muchas veces opacado por la tecnología.",
      practicalValue: "Provee criterios directos de evaluación para inversores institucionales y consultores del sector pesados.",
      scheduleAlignment: "Semana 1 del Ciclo: Deep-Dive de Reporte Corporativo."
    }
  },

  // =========================================================================
  // EDICIÓN #10 - PROMPT ENGINEERING (GOBERNANZA & COMPLIANCE GRI 205)
  // =========================================================================
  {
    id: 10,
    editionNumber: "#10",
    title: "Prompt Engineering: Cómo auditar el pilar 'G' y los riesgos de corrupción con IA",
    subtitle: "Matrices de integridad, anticorrupción y compliance bajo los estándares internacionales GRI 205 e ISO 37301.",
    subjectLine: "[FridAI Brief #10] Prompt Engineering: Cómo auditar el pilar 'G' y los riesgos de corrupción con IA",
    category: "prompt-engineering",
    categoryLabel: "Prompt Engineering",
    categoryColor: "#696484",
    cycleWeek: 2,
    releaseDate: "2026-11-06T08:00:00-03:00",
    formattedReleaseDate: "Viernes 6 de Noviembre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Auditoría de Gobernanza, Anticorrupción y Compliance",
    standards: ["GRI 205 (Anticorrupción)", "ISO 37301 (Sistemas de Gestión de Compliance)", "ISO 37001 (Antisoborno)", "FCPA / Leyes de Responsabilidad Penal Empresaria"],
    introduction: [
      "La semana pasada analizamos los retos de la Transición Energética Justa en Ecopetrol.",
      "Hoy volvemos a nuestra caja de herramientas para meterle lupa al pilar que sostiene a todos los demás: la Gobernanza ('G').",
      "En consultoría es común encontrar organizaciones con hermosas políticas ambientales o sociales que colapsan ante el primer escándalo de soborno, conflicto de interés o fraude en compras. Pedirle a una IA 'redacta una política anticorrupción' genera textos genéricos e inoperantes. Hoy te enseñamos el prompt maestro para construir una Matriz de Riesgos de Integridad Corporativa."
    ],
    section1Title: "1. El Enfoque Técnico: De la Declaración de Principios al Control Operativo",
    section1Subtitle: "Un programa de compliance no evalúa intenciones, evalúa mecanismos de control",
    section1Content: [
      "Para que la IA estructure un diagnóstico de gobernanza riguroso, debe cruzar la realidad de la empresa por tres marcos normativos clave:"
    ],
    section1KeyPillars: [
      {
        title: "1. GRI 205 (Anticorrupción)",
        description: "Exige reportar el porcentaje de operaciones evaluadas para detectar riesgos de corrupción y la capacitación impartida a empleados y socios de negocio."
      },
      {
        title: "2. ISO 37301 (Sistemas de Gestión de Compliance)",
        description: "Establece que los controles deben ser proporcionales a los riesgos identificados, exigiendo monitoreo continuo y cultura de integridad."
      },
      {
        title: "3. Responsabilidad Penal Empresaria / FCPA",
        description: "Monitoreo estricto de las interacciones entre la empresa (o sus intermediarios y gestores) y funcionarios públicos."
      }
    ],
    section2Title: "2. El Prompt Maestro: Auditoría e Identificación de Riesgos de Gobernanza",
    promptBlock: {
      title: "Prompt Maestro: Matriz Estratégica de Riesgos de Gobernanza e Integridad",
      role: "Oficial de Cumplimiento (CCO) y Auditor Forense experto en GRI 205 e ISO 37301",
      instructions: `Actúa como un Oficial de Cumplimiento (CCO) y Auditor Forense experto en los estándares GRI 205 (Anticorrupción) e ISO 37301 (Compliance Management Systems). Necesito realizar una evaluación inicial de riesgos de gobernanza e integridad para la siguiente organización:

- Empresa/Sector: [Ej: Constructora de infraestructura media / Cadena de distribución logística].
- Geografía de operación: [Ej: México y Colombia].
- Tipo de clientes principales: [Ej: 40% licitaciones públicas, 60% sector privado].
- Canales de intermediación: [Ej: Uso frecuente de agentes aduanales y gestores de licencias locales].

Genera una Matriz Estratégica de Riesgos de Gobernanza e Integridad estructurada en formato de tabla Markdown con las siguientes columnas:
1. Tipología de Riesgo Específico (Ej: Soborno transaccional para agilización de licencias, Conflicto de Interés en selección de proveedores, Pagos de facilitación).
2. Factor de Vulnerabilidad Operativa (¿En qué proceso o área crítica ocurre?).
3. Nivel de Riesgo Inherente (Alto / Medio / Bajo) con justificación técnica.
4. Control Mínimo Preventivo Exigido (El mecanismo de control interno que la empresa debe implementar).
5. Métrica/KPI de Monitoreo (Alineado explícitamente a GRI 205 o ISO 37301).

Genera al menos 6 escenarios de riesgo altamente plausibles para el sector y geografía indicados. Mantén un tono técnico, legal y preventivo. Evita generalidades.`,
      variables: [
        { name: "[Empresa/Sector]", description: "Tipo de actividad comercial", example: "Distribuidora farmacéutica / Constructora vial" },
        { name: "[Geografía]", description: "Países de operación", example: "Perú, Argentina y Brasil" },
        { name: "[Intermediación]", description: "Uso de despachantes, gestores o terceros", example: "Agentes aduaneros para importaciones clave" }
      ],
      explanationPoints: [
        "Enfoque en Terceros (Third-Party Risk): Aísla el riesgo donde ocurre más del 70% de las sanciones de corrupción globales.",
        "Controles Preventivos Concretos: Obliga a especificar la solución (dobles firmas, debida diligencia de proveedores, cláusulas contractuales).",
        "Vínculo a Reportabilidad GRI 205: Entrega los KPIs que alimentarán el capítulo de Gobernanza de la memoria anual."
      ],
      followUpPrompts: [
        {
          title: "Micro-Prompt 1: Política de Regalos e Hospitalidad",
          prompt: `Con base en la matriz anterior, redacta las cláusulas clave para una 'Política de Regalos, Gastos de Representación e Inserción Institucional', estableciendo límites monetarios claros (Umbrales en USD), procedimiento de registro público y excepciones prohibidas.`
        },
        {
          title: "Micro-Prompt 2: Protocolo del Canal Ético y No Represalias",
          prompt: `Diseña un protocolo en 5 pasos para la recepción, triaje, investigación independiente y garantía de NO REPRESALIAS de denuncias éticas recibidas a través de la Línea Transparente de la organización.`
        }
      ]
    },
    section3Title: "3. Anatomía del Prompt: Las 3 Reglas de Oro de Compliance",
    checklist: [
      {
        id: "chk-10-1",
        title: "Auditoría del Riesgo de Terceros",
        description: "Incorporar gestores o intermediarios fuerza al modelo a analizar los puntos ciegos de la cadena."
      },
      {
        id: "chk-10-2",
        title: "Controles Preventivos Proporcionales",
        description: "No basta con describir el riesgo; se exige el control interno específico que lo neutraliza."
      },
      {
        id: "chk-10-3",
        title: "Métricas Auditables para la Memoria",
        description: "Cada riesgo identificado queda amarrado a un KPI reportable bajo GRI 205 o ISO 37301."
      }
    ],
    section4Title: "4. Biblioteca de Micro-Prompts de Seguimiento",
    nextEditionTeaser: {
      edition: "Edición #11",
      date: "Viernes 13 de Noviembre de 2026",
      topic: "Herramienta del Mes: Calculadora de Brecha Salarial de Género en Excel (GRI 405-2 / Transparencia Retributiva)",
      format: "Semana 3 — Herramienta en Excel del Mes"
    },
    productionNotes: {
      institutionalFocus: "Aborda la 'G' con un ángulo práctico y de altísima demanda corporativa (Compliance / Integrity), evitando el tono puramente teórico.",
      practicalValue: "Permite estructurar matrices de riesgo de compliance listas para comités de auditoría.",
      scheduleAlignment: "Semana 2 del Ciclo: Guía de Prompt Engineering."
    }
  },

  // =========================================================================
  // EDICIÓN #11 - HERRAMIENTA EXCEL (BRECHA SALARIAL GRI 405-2)
  // =========================================================================
  {
    id: 11,
    editionNumber: "#11",
    title: "Herramienta del Mes: Calculadora de Brecha Salarial de Género en Excel (GRI 405-2)",
    subtitle: "Brecha no ajustada vs ajustada (Equal Pay for Equal Work), medianas y fórmulas condicionales para auditorías retributivas.",
    subjectLine: "[FridAI Brief #11] Herramienta del Mes: Calculadora de Brecha Salarial de Género en Excel (GRI 405-2)",
    category: "excel-tool",
    categoryLabel: "Herramienta Excel",
    categoryColor: "#e76f51",
    cycleWeek: 3,
    releaseDate: "2026-11-13T08:00:00-03:00",
    formattedReleaseDate: "Viernes 13 de Noviembre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Equidad Retributiva y Capital Humano",
    standards: ["GRI 405-2 (Ratio de salario base y remuneración)", "Convenio 100 OIT", "Directiva Transparencia Retributiva UE", "CSRD / ESRS S1-16"],
    introduction: [
      "La semana pasada desarmamos la auditoría del pilar de Gobernanza y los controles anticorrupción.",
      "Hoy nos metemos de lleno en los datos duros de la gestión de personas: la equidad retributiva.",
      "Medir la brecha salarial ya no es un ejercicio opcional; es un requerimiento regulatorio auditado en casi toda Iberoamérica y un indicador obligatorio en GRI 405 y CSRD (ESRS S1-16). Sin embargo, muchas empresas cometen el error de calcular promedios simples sin ajustar por categoría profesional u horas trabajadas. Hoy te entregamos el diseño técnico y las fórmulas para construir tu calculadora en Excel."
    ],
    section1Title: "1. El Marco Metodológico: La Matemática de la Equidad Retributiva",
    section1Subtitle: "Diferenciando entre Brecha No Ajustada y Brecha Ajustada",
    section1Content: [
      "Para que la medición de brecha sea técnicamente válida ante una auditoría, debemos diferenciar entre dos tipos de análisis:"
    ],
    section1KeyPillars: [
      {
        title: "1. Brecha No Ajustada (Unadjusted Pay Gap)",
        description: "Mide la diferencia porcentual entre el salario promedio/mediana de todos los hombres frente a todas las mujeres de la empresa, sin importar su rol. Refleja la segregación vertical (falta de mujeres en puestos directivos / techo de cristal)."
      },
      {
        title: "2. Brecha Ajustada (Equal Pay for Equal Work)",
        description: "Compara la remuneración de hombres y mujeres dentro de la misma categoría profesional o nivel de responsabilidad, ajustando por horas trabajadas y bonos. Refleja la discriminación directa o sesgo retributivo en roles equivalentes."
      }
    ],
    section2Title: "2. El Blueprint de la Planilla Excel: Estructura de Columnas (A a I)",
    excelColumns: [
      { column: "Columna A", title: "ID Empleado", description: "Código anónimo (ej. EMP-001)", block: "Pestaña: Base_Datos_Salarial" },
      { column: "Columna B", title: "Categoría / Nivel", description: "Nivel jerárquico (Dirección, Jefatura, Técnico, Operativo)", block: "Pestaña: Base_Datos_Salarial" },
      { column: "Columna C", title: "Género", description: "M (Masculino), F (Femenino), O (Otro/No Binario)", block: "Pestaña: Base_Datos_Salarial" },
      { column: "Columna D", title: "Horas Semanales", description: "Horas contractuales (40 jornada completa, 20 parcial)", block: "Pestaña: Base_Datos_Salarial" },
      { column: "Columna E", title: "Salario Base Anual", description: "Remuneración fija bruta anual en moneda local", block: "Pestaña: Base_Datos_Salarial" },
      { column: "Columna F", title: "Complementos / Bonos", description: "Variables, comisiones y beneficios monetizados anuales", block: "Pestaña: Base_Datos_Salarial" },
      { column: "Columna G", title: "Remuneración Total", description: "Suma automática de fijo + variable (=E2+F2)", block: "Pestaña: Base_Datos_Salarial" },
      { column: "Columna H", title: "Horas Totales Anuales", description: "Cálculo de jornada anual (=D2*52)", block: "Pestaña: Base_Datos_Salarial" },
      { column: "Columna I", title: "Salario Hora Ponderado", description: "Fórmula base de comparación justa (=REDONDEAR(G2/H2; 2))", block: "Pestaña: Base_Datos_Salarial" }
    ],
    section3Title: "3. Matriz de Resumen y Fórmulas Automatizadas (Pestaña: Reporte_GRI_405)",
    excelFormulas: [
      {
        cell: "Celda B2 (Promedio Hombres)",
        name: "Promedio Salario Hora Hombres por Categoría",
        formula: "=PROMEDIO.SI.CONJUNTO(Base_Datos_Salarial!I:I; Base_Datos_Salarial!B:B; A2; Base_Datos_Salarial!C:C; \"M\")",
        description: "Calcula el salario hora promedio masculino para la categoría evaluada en la celda A2."
      },
      {
        cell: "Celda C2 (Promedio Mujeres)",
        name: "Promedio Salario Hora Mujeres por Categoría",
        formula: "=PROMEDIO.SI.CONJUNTO(Base_Datos_Salarial!I:I; Base_Datos_Salarial!B:B; A2; Base_Datos_Salarial!C:C; \"F\")",
        description: "Calcula el salario hora promedio femenino para la categoría evaluada en la celda A2."
      },
      {
        cell: "Celda D2 (Brecha %)",
        name: "Cálculo Automático de Brecha Salarial Porcentual",
        formula: "=SI(B2=0; 0; REDONDEAR(((B2 - C2) / B2) * 100; 2))",
        description: "Un valor positivo indica que los hombres ganan un % más; cercano a 0% indica paridad retributiva."
      }
    ],
    advisorInsight: "Para cumplir con la legislación europea y evitar distorsiones por salarios atípicos (outliers), te sugerimos replicar la tabla usando la función MEDIANA.SI.CONJUNTO.",
    section4Title: "4. AI Toolkit: Prompt para Diagnóstico de Causas de Brecha Salarial",
    promptBlock: {
      title: "Prompt Maestro: Diagnóstico Estructural de Brecha Salarial (GRI 405-2)",
      role: "Consultor Senior en Sostenibilidad Social y Compensation & Benefits especialista en GRI 405-2",
      instructions: `Actúa como un Consultor Senior en Sostenibilidad Social y Compensation & Benefits especialista en el Estándar GRI 405-2 y equidad retributiva. Te proporciono los siguientes datos consolidados de brecha salarial de nuestra organización:

- Brecha Salarial Global No Ajustada: [Ej: 18.5% a favor de hombres].
- Brecha por Categorías (Ajustada):
  * Dirección: [Ej: 12.0%]
  * Mandos Medios/Jefaturas: [Ej: 4.2%]
  * Personal Operativo: [Ej: -1.1%]
- Representación Femenina en Dirección: [Ej: 22%].

Con base en estos datos, genera un informe técnico corto estructurado en:
1. DIAGNÓSTICO ESTRUCTURAL: Identifica si el problema principal es de discriminación salarial directa (igual trabajo) o de segregación vertical (techo de cristal).
2. PLAN DE ACCIÓN DE REMEDIACIÓN (3 Medidas): Redacta tres acciones correctivas concretas con plazo a 12 meses (ej. bandas salariales objetivas, auditoría de promociones).
3. TEXTO EXPLICATIVO PARA EL REPORTE ESG: Redacta una nota explicativa de 120 palabras para incorporar en el capítulo de Capital Humano de nuestra Memoria de Sostenibilidad.`,
      variables: [
        { name: "[Brecha Global]", description: "Porcentaje no ajustado", example: "16.4% a favor de hombres" },
        { name: "[Brecha por Categoría]", description: "Datos ajustados por nivel", example: "Dirección: 14%, Jefaturas: 3%, Operativos: 0%" }
      ],
      explanationPoints: [
        "Aísla el efecto del 'techo de cristal' de la discriminación directa en puestos equivalentes.",
        "Genera un plan de remediación en 3 medidas ejecutables para Recursos Humanos.",
        "Redacta la nota explicativa oficial para el capítulo de Capital Humano del Reporte ESG."
      ]
    },
    nextEditionTeaser: {
      edition: "Edición #12",
      date: "Viernes 20 de Noviembre de 2026",
      topic: "AI Workflow: Adverse Media Screening & Monitoreo de Riesgos ESG en Tiempo Real para tu Cadena de Valor",
      format: "Semana 4 — AI Workflow Showcase"
    },
    productionNotes: {
      institutionalFocus: "Diseñada diferenciando la brecha ajustada de la no ajustada, elevando el perfil técnico ante auditores laborales y ESG.",
      practicalValue: "Provee la plantilla lista para cumplir con normativas de transparencia retributiva.",
      scheduleAlignment: "Semana 3 del Ciclo: Herramienta en Excel del Mes."
    }
  },

  // =========================================================================
  // EDICIÓN #12 - AI WORKFLOW (ADVERSE MEDIA SCREENING / MONITOREO TIEMPO REAL)
  // =========================================================================
  {
    id: 12,
    editionNumber: "#12",
    title: "AI Workflow: Monitoreo de Riesgos ESG en Tiempo Real para tu Cadena de Valor",
    subtitle: "Cómo diseñar un sistema de alertas tempranas con IA (Adverse Media Screening) para clasificar incidentes bajo criterios SASB y GRI.",
    subjectLine: "[FridAI Brief #12] AI Workflow: Monitoreo de Riesgos ESG en Tiempo Real para tu Cadena de Valor",
    category: "ai-workflow",
    categoryLabel: "AI Workflow",
    categoryColor: "#09193a",
    cycleWeek: 4,
    releaseDate: "2026-11-20T08:00:00-03:00",
    formattedReleaseDate: "Viernes 20 de Noviembre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Debida Diligencia Continua y Gestión de Riesgo Reputacional",
    standards: ["CSDDD (Due Diligence Directive)", "SASB Standards", "GRI Standards 2021", "NLP / AI Media Monitoring"],
    introduction: [
      "La semana pasada estructuramos los cálculos en Excel para medir la Brecha Salarial de Género bajo GRI 405-2.",
      "Hoy cerramos el ciclo metodológico enfocándonos en la prevención de riesgos reputacionales y regulatorios en la cadena de suministro.",
      "El gran defecto de las auditorías e inventarios de proveedores tradicionales es que son fotografías estáticas: se realizan una vez al año y quedan desactualizadas al día siguiente. Si un proveedor clave sufre una huelga por violaciones laborales o un derrame químico no reportado, enterarse seis meses después es demasiado tarde. Hoy te enseñamos a crear un flujo de alertas tempranas."
    ],
    section1Title: "1. El Enfoque Técnico: Filtrado de Medios Adversos (Adverse Media Screening)",
    section1Subtitle: "Aplicar procesamiento de lenguaje natural (NLP) para aislar eventos de impacto material",
    section1Content: [
      "El monitoreo continuo no consiste en leer todas las noticias de la prensa local, sino en aplicar NLP asistido por IA para filtrar el 'ruido' mediático y categorizar cada noticia bajo tres parámetros de auditoría:"
    ],
    section1KeyPillars: [
      {
        title: "1. Taxonomía ESG / SASB",
        description: "Clasificar si el incidente corresponde a la dimensión Ambiental (efluentes, biodiversidad), Social (seguridad laboral, derechos humanos) o Gobernanza (fraude, sanciones regulatorias)."
      },
      {
        title: "2. Severidad del Riesgo (Escala 1 a 5)",
        description: "Medir la gravedad del impacto operativo y reputacional para la empresa contratante, desde peticiones de informe hasta sanciones judiciales y accidentes fatales."
      },
      {
        title: "3. Nivel de Certeza de la Fuente",
        description: "Diferenciar entre investigaciones periodísticas con fallos judiciales/sanciones oficiales y meros rumores no verificados en redes sociales."
      }
    ],
    section2Title: "2. El Workflow Paso a Paso (Tu Sistema de Monitoreo)",
    stepByStepWorkflow: [
      {
        step: "Paso 1",
        title: "Captura de Insumos (RSS / Google Alerts)",
        description: "Configura alertas de noticias con el formato: \"[Nombre del Proveedor]\" + \"multa\" OR \"sanción\" OR \"derrame\" OR \"huelga\" OR \"demanda\" OR \"investigación\"."
      },
      {
        step: "Paso 2",
        title: "Procesamiento con el Prompt Maestro",
        description: "Pega el texto de la noticia en la sesión de IA. El modelo categoriza bajo SASB/GRI, asigna nivel de severidad (1 a 5) y propone la acción correctiva."
      },
      {
        step: "Paso 3",
        title: "Notificación y Acción Inmediata para Compras",
        description: "Si el nivel de severidad es 4 o 5, activa el congelamiento preventivo de órdenes de compra o solicita descargo técnico formal en 48hs."
      }
    ],
    section3Title: "3. Matriz de Salida Esperada (Ejemplo de Rendimiento)",
    genericTable: {
      headers: ["Proveedor Evaluado", "Categoría ESG", "Resumen del Incidente", "Nivel de Severidad", "Recomendación para Compras"],
      rows: [
        {
          "Proveedor Evaluado": "Transportes Norte S.A.",
          "Categoría ESG": "Salud y Seguridad (GRI 403)",
          "Resumen del Incidente": "La secretaría de trabajo local paralizó temporalmente una de sus terminales por falta de mantenimiento en equipos de carga tras inspección post-accidente.",
          "Nivel de Severidad": "4 (Alto)",
          "Recomendación para Compras": "Congelar asignación de nuevas rutas hasta recibir acta de levantamiento de clausura y plan de remediación en 48hs."
        },
        {
          "Proveedor Evaluado": "Química del Sur Ltda.",
          "Categoría ESG": "Efluentes y Residuos (SASB RT-CH)",
          "Resumen del Incidente": "Vecinos presentaron una queja administrativa por olores en las inmediaciones de la planta industrial. No hay sanción formal.",
          "Nivel de Severidad": "2 (Bajo)",
          "Recomendación para Compras": "Solicitar informe técnico de monitoreo de emisiones atmosféricas del último trimestre en la próxima reunión bimensual."
        }
      ]
    },
    section4Title: "4. AI Toolkit: Prompt de Monitoreo y Clasificación de Alertas ESG",
    promptBlock: {
      title: "Prompt Maestro: Analista de Riesgo ESG y Adverse Media Screening",
      role: "Analista Senior de Riesgo ESG y Debida Diligencia Corporativa especialista en CSDDD y SASB",
      instructions: `Actúa como un Analista Senior de Riesgo ESG y Debida Diligencia Corporativa especialista en la normativa CSDDD de la Unión Europea y estándares SASB. Analiza el siguiente texto de noticia relacionado con la empresa/proveedor "[Insertar Nombre del Proveedor]":

[Pegar texto de la noticia o titular amplio]

Tu tarea es evaluar el incidente y generar un Reporte de Alerta Temprana en formato de tabla Markdown con los siguientes campos:
1. PROVEEDOR EVALUADO: Nombre de la entidad.
2. CATEGORÍA ESG (SASB/GRI): Identifica la categoría específica (Ej: Salud y Seguridad Ocupacional, Gestión de Residuos, Ética Comercial).
3. RESUMEN DEL INCIDENTE: Un párrafo técnico de máximo 50 palabras explicando el hecho concreto.
4. NIVEL DE SEVERIDAD (1 a 5):
   - 1-2: Riesgo Bajo/Moderado (Petición de información sin sanción).
   - 3: Riesgo Medio (Investigación formal en curso / protesta local).
   - 4-5: Riesgo Crítico/Alto (Sanción judicial, accidente grave, clausura u omisión ambiental severa).
5. RECOMENDACIÓN PARA EL ÁREA DE COMPRAS: Acción inmediata sugerida (Ej: Solicitar aclaración formal en 48hs, activar auditoría extraordinaria in situ, congelar nuevas órdenes de compra).

Si el texto proporcionado no contiene ningún riesgo ESG ni reputacional relevante, responde únicamente: "Sin riesgo ESG detectado en el texto analizado."`,
      variables: [
        { name: "[Nombre del Proveedor]", description: "Razón social del proveedor bajo escrutinio", example: "Transportes Logísticos del Plata S.A." },
        { name: "[Texto de la Noticia]", description: "Cuerpo de la noticia o reporte periodístico", example: "Noticia sobre inspección ambiental o conflicto laboral" }
      ],
      explanationPoints: [
        "Filtra 'ruido' mediático: descarta notas que no presenten riesgo material real.",
        "Escala de Severidad de 1 a 5 calibrada con acciones para el área de compras.",
        "Alineación con la Directiva CSDDD de debida diligencia continua."
      ]
    },
    nextEditionTeaser: {
      edition: "Edición #13",
      date: "Viernes 27 de Noviembre de 2026",
      topic: "Deep-Dive: Deforestación Cero y Agricultura Regenerativa en el Sector Agroindustrial Regional",
      format: "Semana 1 — Deep-Dive de Reporte Corporativo"
    },
    productionNotes: {
      institutionalFocus: "Entrega un flujo directamente aplicable para resolver el monitoreo continuo de proveedores, alineado con CSDDD.",
      practicalValue: "Transforma noticias públicas en fichas de acción ejecutiva inmediata para compras y compliance.",
      scheduleAlignment: "Semana 4 del Ciclo: AI Workflow Showcase."
    }
  },

  // =========================================================================
  // EDICIONES #13, #14, #15 - PRÓXIMAMENTE (PROGRAMADAS)
  // =========================================================================
  {
    id: 13,
    editionNumber: "#13",
    title: "Deep-Dive del Reporte de Empresas CMPC",
    subtitle: "Deforestación Cero y Agricultura Regenerativa en el Sector Agroindustrial Regional (Trazabilidad satelital EUDR & GRI).",
    subjectLine: "[FridAI Brief #13] Deep-Dive del Reporte de Empresas CMPC",
    category: "deep-dive",
    categoryLabel: "Deep-Dive de Reporte",
    categoryColor: "#60afc1",
    cycleWeek: 1,
    releaseDate: "2026-11-27T08:00:00-03:00",
    formattedReleaseDate: "Viernes 27 de Noviembre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Sector Forestal & Agroindustrial (Empresas CMPC)",
    standards: ["EUDR (Reglamento UE contra la Deforestación)", "GRI Sector Standard: Agriculture", "SBTi FLAG"],
    introduction: [
      "Próxima entrega programada para el Viernes 27 de Noviembre (Viernes AM).",
      "Analizaremos el reporte corporativo de Empresas CMPC, las exigencias del reglamento europeo EUDR de no deforestación, los estándares sectoriales GRI y la monetización del carbono en suelo."
    ],
    section1Title: "1. El Deep-Dive: Trazabilidad Satelital y EUDR en CMPC",
    section1Content: ["En producción y calibración técnica."],
    section2Title: "2. Matriz ESG Sectorial",
    section3Title: "3. Checklist de Cumplimiento",
    section4Title: "4. AI Toolkit & Prompts",
    nextEditionTeaser: {
      edition: "Edición #14",
      date: "Viernes 4 de Diciembre de 2026",
      topic: "Ingeniería de Escenarios Climáticos y Divulgación Financiera",
      format: "Semana 2 — Prompt Engineering"
    },
    productionNotes: {
      institutionalFocus: "En calibración institucional por el equipo de CapacitaRSE.",
      practicalValue: "Disponible a partir de su fecha oficial de liberación.",
      scheduleAlignment: "Semana 1 del Ciclo: Deep-Dive de Reporte Corporativo."
    },
    isPlaceholder: true
  },
  {
    id: 14,
    editionNumber: "#14",
    title: "Ingeniería de Escenarios Climáticos sobre Activos Corporativos",
    subtitle: "Un prompt maestro de ingeniería de escenarios climáticos sobre activos corporativos, identificando riesgos físicos y de transición.",
    subjectLine: "[FridAI Brief #14] Ingeniería de Escenarios Climáticos (IFRS S2 / TCFD)",
    category: "prompt-engineering",
    categoryLabel: "Prompt Engineering",
    categoryColor: "#696484",
    cycleWeek: 2,
    releaseDate: "2026-12-04T08:00:00-03:00",
    formattedReleaseDate: "Viernes 4 de Diciembre de 2026",
    estimatedReadingTime: "4 min de lectura",
    caseOrTopic: "Escenarios Climáticos y Divulgación Financiera",
    standards: ["IFRS S2: Climate-related Disclosures", "TCFD Recommendations", "NGFS Scenarios"],
    introduction: [
      "Próxima entrega programada para el Viernes 4 de Diciembre (Viernes AM).",
      "Modelado de un prompt maestro para traducir escenarios climáticos del IPCC y NGFS en impactos financieros cuantificables sobre activos corporativos."
    ],
    section1Title: "1. El Enfoque Técnico: Riesgos Físicos vs de Transición",
    section1Content: ["En producción y calibración técnica."],
    section2Title: "2. Prompt Maestro de Escenarios Climáticos",
    section3Title: "3. Anatomía del Prompt",
    section4Title: "4. Micro-prompts de Sensibilidad Financiera",
    nextEditionTeaser: {
      edition: "Edición #15",
      date: "Viernes 11 de Diciembre de 2026",
      topic: "Tablero de Control de KPIs ESG y Scorecard de Sostenibilidad (GRI / SASB / CSRD)",
      format: "Semana 3 & 4 — Herramienta & AI Workflow"
    },
    productionNotes: {
      institutionalFocus: "En calibración institucional por el equipo de CapacitaRSE.",
      practicalValue: "Disponible a partir de su fecha oficial de liberación.",
      scheduleAlignment: "Semana 2 del Ciclo: Prompt Engineering."
    },
    isPlaceholder: true
  },
  {
    id: 15,
    editionNumber: "#15",
    title: "Dashboard Integral de Madurez ESG & Roadmap Estratégico",
    subtitle: "Tablero de Control de KPIs ESG y Scorecard de Sostenibilidad (GRI / SASB / CSRD)",
    subjectLine: "[FridAI Brief #15] Tablero de Control de KPIs ESG y Scorecard de Sostenibilidad (GRI / SASB / CSRD)",
    category: "excel-tool",
    categoryLabel: "Herramienta Excel",
    categoryColor: "#e76f51",
    cycleWeek: 3,
    releaseDate: "2026-12-11T08:00:00-03:00",
    formattedReleaseDate: "Viernes 11 de Diciembre de 2026",
    estimatedReadingTime: "5 min de lectura",
    caseOrTopic: "Plan Estratégico Anual de Sostenibilidad y ESG",
    standards: ["Consolidado GRI, SASB, CSRD, GHG Protocol, ISO 37301"],
    introduction: [
      "Entrega final de la serie de 15 entregas de FridAI Brief by CapacitaRSE, programada para el Viernes 11 de Diciembre (Viernes AM).",
      "Consolidación de las matrices analizadas, calculadoras y prompts en un único dashboard de mando estratégico para la toma de decisiones."
    ],
    section1Title: "1. El Cierre del Ciclo: De la Herramienta Aislada al Sistema de Gestión",
    section1Content: ["En producción y calibración técnica para el cierre de la serie."],
    section2Title: "2. Dashboard Consolidado en Excel",
    section3Title: "3. Roadmap de Ejecución",
    section4Title: "4. AI Agent Master Workflow",
    nextEditionTeaser: {
      edition: "Ciclo 2027",
      date: "Marzo de 2027",
      topic: "Nueva temporada de FridAI Brief by CapacitaRSE",
      format: "CapacitaRSE Intelligence"
    },
    productionNotes: {
      institutionalFocus: "Cierre formal de las 15 entregas comprometidas del FridAI Brief.",
      practicalValue: "Entrega el resumen y plantilla integral de trabajo para el año entrante.",
      scheduleAlignment: "Entrega Final #15."
    },
    isPlaceholder: true
  }
];
