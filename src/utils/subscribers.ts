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

export const DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyH4vtMHCYZf6ZLL1uxMF3D71JlSWtN7wHvx3SM7rA0GFFxniTSoZTfcmeumumZxh-u5g/exec';

export const GOOGLE_APPS_SCRIPT_TEMPLATE = `/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: Webhook Receptor para FridAI Brief by CapacitaRSE
 * =========================================================================
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
`;

export function getSubscribers(): Subscriber[] {
  try {
    const raw = localStorage.getItem('fridai_subscribers');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map((item, index) => {
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

  // Envío directo a tu Google Apps Script de Google Workspace
  let syncedToWebhook = false;
  const webhookUrl = localStorage.getItem('fridai_webhook_url') || DEFAULT_WEBHOOK_URL;
  if (webhookUrl && webhookUrl.startsWith('http')) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
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
