/**
 * Utilities for generating calendar subscriptions (Google Calendar, iCal, Outlook)
 */

export interface CalendarEventParams {
  title: string;
  description: string;
  location?: string;
  url?: string;
}

const DEFAULT_EVENT: CalendarEventParams = {
  title: 'FridAI Brief by CapacitaRSE (Nueva Edición)',
  description: 'Nueva edición semanal de FridAI Brief disponible. Análisis técnico, matrices ESG, prompts corporativos y herramientas de sostenibilidad aplicadas con IA.\\n\\nAccede en: https://cursosderse.com\\nCapacitaRSE - Publicación: Viernes AM.',
  location: 'Online / FridAI Brief (CapacitaRSE)',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://cursosderse.com'
};

/**
 * Generate Google Calendar recurring link for Fridays 8:00 AM ART (11:00 UTC)
 */
export function getGoogleCalendarUrl(params: CalendarEventParams = DEFAULT_EVENT): string {
  // First Friday: Sep 4, 2026 08:00 ART = 11:00 UTC
  // End date: Dec 11, 2026 09:00 ART = 12:00 UTC
  const startIso = '20260904T110000Z';
  const endIso = '20260904T120000Z';
  const untilIso = '20261212T000000Z';
  
  const searchParams = new URLSearchParams({
    action: 'TEMPLATE',
    text: params.title,
    details: `${params.description}\n\nEnlace: ${params.url}`,
    location: params.location || 'Online',
    dates: `${startIso}/${endIso}`,
    recur: `RRULE:FREQ=WEEKLY;BYDAY=FR;UNTIL=${untilIso}`
  });

  return `https://calendar.google.com/calendar/render?${searchParams.toString()}`;
}

/**
 * Generate Outlook Live / Office 365 web link
 */
export function getOutlookWebUrl(params: CalendarEventParams = DEFAULT_EVENT): string {
  const startIso = '2026-09-04T08:00:00-03:00';
  const endIso = '2026-09-04T09:00:00-03:00';

  const searchParams = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: params.title,
    body: `${params.description}\n\nEnlace: ${params.url}`,
    location: params.location || 'Online',
    startdt: startIso,
    enddt: endIso
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${searchParams.toString()}`;
}

/**
 * Generate and trigger download of .ics file for Apple Calendar, Outlook Desktop, and all iCal clients
 */
export function downloadIcsCalendar(params: CalendarEventParams = DEFAULT_EVENT): void {
  const eventUid = `fridai-brief-capacitarse-${Date.now()}@cursosderse.com`;
  const nowUtc = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CapacitaRSE//FridAI Brief Calendar//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:FridAI Brief by CapacitaRSE',
    'X-WR-TIMEZONE:America/Argentina/Buenos_Aires',
    'X-WR-CALDESC:Aviso semanal de FridAI Brief cada Viernes AM.',
    'BEGIN:VTIMEZONE',
    'TZID:America/Argentina/Buenos_Aires',
    'BEGIN:STANDARD',
    'DTSTART:19700101T000000',
    'TZOFFSETFROM:-0300',
    'TZOFFSETTO:-0300',
    'TZNAME:ART',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    `UID:${eventUid}`,
    `DTSTAMP:${nowUtc}`,
    'DTSTART;TZID=America/Argentina/Buenos_Aires:20260904T080000',
    'DTEND;TZID=America/Argentina/Buenos_Aires:20260904T090000',
    'RRULE:FREQ=WEEKLY;BYDAY=FR;UNTIL=20261212T000000Z',
    `SUMMARY:${params.title}`,
    `DESCRIPTION:${params.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${params.location || 'Online'}`,
    `URL:${params.url || 'https://cursosderse.com'}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Recordatorio: Nuevo FridAI Brief de CapacitaRSE liberado',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'FridAI_Brief_CapacitaRSE.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
