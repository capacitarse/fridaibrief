export interface Subscriber {
  id: string;
  fullName: string;
  email: string;
  country: string;
  subscribedAt: string;
  source?: string;
  syncedToWebhook?: boolean;
}

export const LATAM_COUNTRIES = [
  'Argentina',
  'Chile',
  'Colombia',
  'México',
  'Perú',
  'España',
  'Costa Rica',
  'Ecuador',
  'Uruguay',
  'Panamá',
  'Bolivia',
  'Brasil',
  'Guatemala',
  'República Dominicana',
  'Paraguay',
  'El Salvador',
  'Honduras',
  'Nicaragua',
  'Venezuela',
  'Puerto Rico',
  'Estados Unidos',
  'Otro país'
];

export const GOOGLE_APPS_SCRIPT_TEMPLATE = `/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: Webhook Receptor para FridAI Brief by CapacitaRSE
 * =========================================================================
 * 
 * INSTRUCCIONES DE CONFIGURACIÓN EN 3 PASOS:
 * 
 * 1. Abre tu Google Sheets (o crea una nueva hoja llamada "Leads_FridAI_Brief").
 * 2. En el menú superior de Google Sheets, ve a: "Extensiones" > "Apps Script".
 * 3. Borra todo el código que aparezca y pega EXACTAMENTE este script completo.
 * 4. Haz clic en "Implementar" (Deploy) > "Nueva implementación" (New deployment).
 *    - Tipo: "Aplicación web" (Web App).
 *    - Ejecutar como: "Yo" (tu cuenta de Google).
 *    - Quién tiene acceso: "Cualquier persona" (Anyone - incluso anónimos).
 * 5. Copia la "URL de la aplicación web" resultante y pégala en el panel de FridAI Brief.
 * 
 * ¡Listo! Cada vez que alguien se suscriba en la web, se agregará una fila en tiempo real
 * con su Nombre, Email, País y Fecha.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Si la hoja está vacía, crear encabezados automáticos
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Fecha y Hora", 
        "Nombre y Apellido", 
        "Email Corporativo", 
        "País", 
        "Fuente",
        "Estado Recordatorio"
      ]);
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#09193a").setFontColor("#ffffff");
    }
    
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    
    var timestamp = new Date();
    var fullName = data.fullName || data.name || "Sin nombre";
    var email = data.email || "";
    var country = data.country || "No especificado";
    var source = data.source || "FridAI Brief Web";
    var status = "Activo - Envío Viernes AM";
    
    if (email) {
      sheet.appendRow([timestamp, fullName, email, country, source, status]);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Lead registrado correctamente" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", service: "FridAI Brief Webhook Service CapacitaRSE" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * OPCIONAL: Función para enviar el correo recordatorio semanal cada viernes
 * Puedes programar un activador (Trigger) semanal en Apps Script para los Viernes AM.
 */
function sendWeeklyFridayBriefEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  if (data.length <= 1) return;
  
  var subject = "[FridAI Brief] Nueva edición disponible | CapacitaRSE";
  var portalUrl = "https://capacitarse.github.io/fridaibrief/";
  
  // Recorre los contactos y envía el recordatorio
  for (var i = 1; i < data.length; i++) {
    var name = data[i][1];
    var email = data[i][2];
    
    if (email && email.indexOf("@") > -1) {
      var body = "Hola " + (name || "") + ",\\n\\n" +
                 "Ya se encuentra disponible la nueva edición de FridAI Brief de esta semana.\\n\\n" +
                 "Accede al análisis técnico, matrices y prompts en:\\n" +
                 portalUrl + "\\n\\n" +
                 "Saludos cordiales,\\nEquipo CapacitaRSE\\nhttps://cursosderse.com";
      
      try {
        MailApp.sendEmail(email, subject, body);
      } catch (err) {
        Logger.log("Error enviando a: " + email);
      }
    }
  }
}
`;

export function getSubscribers(): Subscriber[] {
  try {
    const raw = localStorage.getItem('fridai_subscribers');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map((item, index) => {
        // Support legacy format where item was just a string email or object without name/country
        if (typeof item === 'string') {
          return {
            id: `legacy-${index}`,
            fullName: 'Suscriptor',
            email: item,
            country: 'No especificado',
            subscribedAt: new Date().toISOString(),
            source: 'FridAI Brief'
          };
        }
        return {
          id: item.id || `sub-${index}-${Date.now()}`,
          fullName: item.fullName || item.name || 'Sin nombre',
          email: item.email || '',
          country: item.country || 'No especificado',
          subscribedAt: item.subscribedAt || new Date().toISOString(),
          source: item.source || 'FridAI Brief'
        };
      }).filter(s => s.email && s.email.includes('@'));
    }
    return [];
  } catch (e) {
    console.error('Error reading subscribers', e);
    return [];
  }
}

export async function saveSubscriber(data: {
  fullName: string;
  email: string;
  country: string;
  source?: string;
}): Promise<{ success: boolean; syncedToWebhook: boolean }> {
  const cleanEmail = data.email.trim().toLowerCase();
  const cleanName = data.fullName.trim();
  const cleanCountry = data.country.trim();
  const source = data.source || 'FridAI Brief Landing';
  
  const currentList = getSubscribers();
  
  // Check if exists, update or add
  const existingIdx = currentList.findIndex(s => s.email.toLowerCase() === cleanEmail);
  const newEntry: Subscriber = {
    id: Date.now().toString(),
    fullName: cleanName || (existingIdx >= 0 ? currentList[existingIdx].fullName : 'Suscriptor'),
    email: cleanEmail,
    country: cleanCountry || (existingIdx >= 0 ? currentList[existingIdx].country : 'No especificado'),
    subscribedAt: new Date().toISOString(),
    source,
    syncedToWebhook: false
  };

  if (existingIdx >= 0) {
    currentList[existingIdx] = { ...currentList[existingIdx], ...newEntry };
  } else {
    currentList.unshift(newEntry);
  }

  localStorage.setItem('fridai_subscribers', JSON.stringify(currentList));

  // Attempt Webhook dispatch if configured
  let syncedToWebhook = false;
  const webhookUrl = localStorage.getItem('fridai_webhook_url');
  if (webhookUrl && webhookUrl.startsWith('http')) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // standard for Google Apps Script Web Apps & external webhooks
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: newEntry.fullName,
          email: newEntry.email,
          country: newEntry.country,
          source: newEntry.source,
          timestamp: newEntry.subscribedAt
        })
      });
      syncedToWebhook = true;
    } catch (err) {
      console.warn('Webhook dispatch error:', err);
    }
  }

  return { success: true, syncedToWebhook };
}
