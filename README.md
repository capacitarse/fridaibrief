# FridAI Brief by CapacitaRSE 🌿🤖

Plataforma web oficial para la publicación semanal, suscripción y lectura técnica de **FridAI Brief by CapacitaRSE**. 

Este proyecto implementa el ciclo completo de **15 entregas semanales** programadas para liberarse automáticamente cada **Viernes a las 8:00 AM (Hora de Buenos Aires / UTC-3)**, comenzando el **Viernes 4 de Septiembre** y culminando el **Viernes 11 de Diciembre**.

---

## 🎨 Identidad Gráfica Institucional (CapacitaRSE)

El diseño sigue estrictamente la paleta y normas institucionales de CapacitaRSE:

- **Color Principal:** `#60afc1` (con transparencias 10%, 20%, 35% y 60%).
- **Neutrales UI:** `#9ba1a5` + `#ffffff` (blanco puro) y fondos suaves `slate-50`.
- **Color Acento (CTA / Énfasis):** `#e76f51` (utilizado con mesura, 5–10% del diseño).
- **Color Soporte (Detalles / Sofisticación):** `#696484`.
- **Color de Contraste (Autoridad / Títulos):** `#09193a`.
- **Logo Institucional:** Integrado en el margen superior izquierdo con redirección a `capacitarse.org`.

---

## 🚀 Funcionalidades Principales

1. **Parrilla de 15 Entregas:**
   - 12 entregas completamente adaptadas y formateadas para la web con matrices ESG, checklists interactivos y bloques de prompts con copiado en 1 clic.
   - 3 entregas finales con ficha de programación y recordatorio ("Próximamente").
2. **Liberación Automática Semanal:**
   - Cálculo en tiempo real según la zona horaria `America/Argentina/Buenos_Aires` (UTC-3) a las 8:00 AM.
   - Contador regresivo en vivo hasta el próximo viernes.
   - **Modo Simulador / Revisión:** Permite a administradores o evaluadores previsualizar todas las ediciones o simular fechas de salida.
3. **Múltiples Opciones de Suscripción:**
   - **Suscripción por E-mail:** Registro local de suscriptores con vista previa del correo de aviso semanal en formato de texto plano sin spam.
   - **Sincronización con Calendarios (1 Clic):**
     - Google Calendar (evento recurrente con enlace y recordatorio).
     - Apple Calendar / iOS / macOS (descarga de archivo `.ics` con alarmas).
     - Microsoft Outlook & Office 365.
4. **Experiencia de Lectura Web Optimizada:**
   - **AI Toolkit:** Prompts maestros y micro-prompts con resaltado de variables y botón de copiado rápido.
   - **Herramientas en Excel:** Tablas de especificación de columnas y visor de fórmulas lógicas (`REDONDEAR`, `SI`, `PROMEDIO.SI.CONJUNTO`) listas para copiar.
   - **Checklists Interactivos:** Casillas de verificación con persistencia en el navegador (`localStorage`).
   - **Filtro y Búsqueda:** Búsqueda en tiempo real por palabra clave, estándar (GRI, SASB, TCFD, ISO) o categoría (Deep-Dive, Prompt Engineering, Herramienta Excel, AI Workflow).
   - **Exportación e Impresión:** Vista limpia para guardar en PDF.

---

## 📅 Cronograma Oficial de las 15 Entregas

| # | Fecha de Liberación (8:00 AM ART) | Categoría | Caso / Eje Temático |
|---|---|---|---|
| **#01** | Viernes 4 de Septiembre | Deep-Dive de Reporte | Plaza Logística: Real Estate Sostenible y Bonos Verdes |
| **#02** | Viernes 11 de Septiembre | Prompt Engineering | Mapeo de Stakeholders con Matriz de Mendelow |
| **#03** | Viernes 18 de Septiembre | Herramienta Excel | Matriz de Doble Materialidad Automatizada (CSRD/GRI) |
| **#04** | Viernes 25 de Septiembre | AI Workflow | Gap Analysis de Proveedores y Debida Diligencia CSDDD |
| **#05** | Viernes 2 de Octubre | Deep-Dive de Reporte | Natura &Co: Bioeconomía, EP&L y Desafíos de Alcance 3 |
| **#06** | Viernes 9 de Octubre | Prompt Engineering | Redacción de Políticas DEI (GRI 405 / Convenio 190 OIT) |
| **#07** | Viernes 16 de Octubre | Herramienta Excel | Calculadora de Emisiones Alcance 1 y 2 (GHG Protocol) |
| **#08** | Viernes 23 de Octubre | AI Workflow | Cuestionarios EcoVadis/CDP asistidos por IA y RAG |
| **#09** | Viernes 30 de Octubre | Deep-Dive de Reporte | Ecopetrol: Transición Energética Justa y Precio Interno al Carbono |
| **#10** | Viernes 6 de Noviembre | Prompt Engineering | Matrices de Riesgos de Gobernanza y Compliance (GRI 205 / ISO 37301) |
| **#11** | Viernes 13 de Noviembre | Herramienta Excel | Calculadora de Brecha Salarial de Género (GRI 405-2) |
| **#12** | Viernes 20 de Noviembre | AI Workflow | Adverse Media Screening y Monitoreo de Riesgos ESG en Tiempo Real |
| **#13** | Viernes 27 de Noviembre | Deep-Dive de Reporte | Deforestación Cero y Agricultura Regenerativa (EUDR) |
| **#14** | Viernes 4 de Diciembre | Prompt Engineering | Matriz de Riesgos Climáticos (TCFD / IFRS S2) |
| **#15** | Viernes 11 de Diciembre | Herramienta & AI Workflow | Dashboard Integral de Madurez ESG & Roadmap 2027 |

---

## 🛠️ Instalación y Ejecución Local

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn

### Pasos

1. Clonar el repositorio o descargar el código:
```bash
git clone https://github.com/tu-usuario/fridai-brief-capacitarse.git
cd fridai-brief-capacitarse
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

4. Compilar para producción:
```bash
npm run build
```

---

## 📦 Instrucciones para subir este proyecto a GitHub

Para publicar este proyecto en tu cuenta de GitHub:

```bash
# 1. Inicializar git si no está inicializado
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear el commit inicial
git commit -m "feat: Lanzamiento oficial de FridAI Brief by CapacitaRSE con 15 entregas y automatización"

# 4. Renombrar la rama principal a main
git branch -M main

# 5. Vincular con tu repositorio remoto de GitHub (reemplazar con tu URL)
git remote add origin https://github.com/TU_USUARIO/fridai-brief-capacitarse.git

# 6. Empujar los cambios
git push -u origin main
```

---

## 🌐 Opciones de Despliegue en la Nube

- **Vercel:** Conecta tu repositorio de GitHub directamente a Vercel (`Framework Preset: Vite`).
- **Cloud Run / Google Cloud:** Listo para desplegarse mediante contenedor o buildpack.
- **GitHub Pages:** Ejecuta `npm run build` y publica la carpeta `dist/`.

---

## 📄 Licencia y Créditos

Desarrollado para **CapacitaRSE** — Formación y consultoría líder en Sostenibilidad, RSE y ESG en Iberoamérica.  
Sitio web oficial:[cursosderse.com](https://www.cursosderse.com)
