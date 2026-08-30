import { BriefEdition } from '../types';

/**
 * Returns current timestamp in Buenos Aires time (UTC-3)
 */
export function getBuenosAiresNow(): Date {
  const now = new Date();
  // Adjust to UTC-3 offset
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const buenosAiresOffset = -3 * 3600000;
  return new Date(utc + buenosAiresOffset);
}

/**
 * Check if a brief is currently released
 */
export function isBriefReleased(brief: BriefEdition, simulatedDate?: Date | null): boolean {
  if (brief.isPlaceholder) return false;
  
  const targetDate = new Date(brief.releaseDate);
  const compareDate = simulatedDate || new Date();
  
  return compareDate.getTime() >= targetDate.getTime();
}

/**
 * Calculate time remaining until next upcoming release
 */
export function getNextReleaseCountdown(briefs: BriefEdition[], simulatedDate?: Date | null): {
  nextBrief: BriefEdition | null;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isAllReleased: boolean;
} {
  const now = simulatedDate || new Date();
  
  // Find the first unreleased brief
  const unreleased = briefs
    .filter(b => !b.isPlaceholder)
    .find(b => new Date(b.releaseDate).getTime() > now.getTime());

  if (!unreleased) {
    return {
      nextBrief: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isAllReleased: true,
    };
  }

  const diffMs = Math.max(0, new Date(unreleased.releaseDate).getTime() - now.getTime());
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return {
    nextBrief: unreleased,
    days,
    hours,
    minutes,
    seconds,
    isAllReleased: false,
  };
}

/**
 * Format date in Spanish
 */
export function formatSpanishDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Argentina/Buenos_Aires'
  });
}
