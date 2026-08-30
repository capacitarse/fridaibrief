import { SubscriberRecord } from '../types';

const STORAGE_KEY = 'fridai_subscribers_list';
const WEBHOOK_STORAGE_KEY = 'fridai_google_sheet_webhook';
const DEFAULT_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyH4vtMHCYZf6ZLL1uxMF3D71JlSWtN7wHvx3SM7rA0GFFxniTSoZTfcmeumumZxh-u5g/exec'; 

export function getSubscribers(): SubscriberRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load subscribers from local storage', e);
    return [];
  }
}

export function saveSubscriber(record: Omit<SubscriberRecord, 'id' | 'timestamp'>): { success: boolean; isDuplicate: boolean; count: number } {
  if (typeof window === 'undefined') {
    return { success: false, isDuplicate: false, count: 0 };
  }

  const existingList = getSubscribers();
  const normalizedEmail = record.email.trim().toLowerCase();

  // Check if already subscribed
  const existingIndex = existingList.findIndex(item => item.email.toLowerCase() === normalizedEmail);
  
  const newRecord: SubscriberRecord = {
    id: existingIndex >= 0 ? existingList[existingIndex].id : `sub_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    email: normalizedEmail,
    name: record.name?.trim() || undefined,
    organization: record.organization?.trim() || undefined,
    preferredChannel: record.preferredChannel || 'email',
    editionTarget: record.editionTarget || 'ALL_LAUNCH',
    timestamp: new Date().toISOString()
  };

  let updatedList: SubscriberRecord[];
  let isDuplicate = false;

  if (existingIndex >= 0) {
    // Update existing
    updatedList = [...existingList];
    updatedList[existingIndex] = newRecord;
    isDuplicate = true;
  } else {
    // Append new
    updatedList = [newRecord, ...existingList];
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  } catch (e) {
    console.error('Failed to save subscriber locally', e);
  }

  // Auto-send to your Google Sheets Apps Script Webhook
  const webhookUrl = getAppsScriptWebhookUrl();
  if (webhookUrl && webhookUrl.startsWith('http')) {
    try {
      const payload = {
        timestamp: newRecord.timestamp,
        email: newRecord.email,
        name: newRecord.name || '',
        organization: newRecord.organization || '',
        preferredChannel: newRecord.preferredChannel || 'email',
        editionTarget: newRecord.editionTarget || 'ALL_LAUNCH'
      };

      fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload)
      }).catch(() => {
        const qs = new URLSearchParams({
          timestamp: newRecord.timestamp,
          email: newRecord.email,
          name: newRecord.name || '',
          organization: newRecord.organization || '',
          preferredChannel: newRecord.preferredChannel || 'email'
        }).toString();
        fetch(`${webhookUrl}?${qs}`, { mode: 'no-cors' });
      });
    } catch (err) {
      console.warn('Google Sheets Webhook dispatch note:', err);
    }
  }

  return {
    success: true,
    isDuplicate,
    count: updatedList.length
  };
}

export function getAppsScriptWebhookUrl(): string {
  if (typeof window === 'undefined') return DEFAULT_APPS_SCRIPT_URL;
  return localStorage.getItem(WEBHOOK_STORAGE_KEY) || DEFAULT_APPS_SCRIPT_URL;
}

export function setAppsScriptWebhookUrl(url: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(WEBHOOK_STORAGE_KEY, url.trim());
}

export function exportSubscribersToCSV(): void {
  const subscribers = getSubscribers();
  if (subscribers.length === 0) {
    alert('Aún no hay suscriptores guardados localmente.');
    return;
  }

  const headers = ['ID', 'Email', 'Nombre', 'Organización', 'Canal Preferido', 'Objetivo Edición', 'Fecha y Hora Registro'];
  const rows = subscribers.map(s => [
    s.id,
    `"${s.email}"`,
    `"${s.name || ''}"`,
    `"${s.organization || ''}"`,
    `"${s.preferredChannel}"`,
    `"${s.editionTarget || ''}"`,
    `"${s.timestamp}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `fridai_suscriptores_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
