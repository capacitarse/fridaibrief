/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BRIEFS_DATA } from './data/briefsData';
import { BriefEdition } from './types';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { BriefGrid } from './components/BriefGrid';
import { BriefReader } from './components/BriefReader';
import { SubscribeModal } from './components/SubscribeModal';
import { CalendarModal } from './components/CalendarModal';
import { PlainEmailPreviewModal } from './components/PlainEmailPreviewModal';
import { SubscribersModal } from './components/SubscribersModal';
import { TimeTravelBar } from './components/TimeTravelBar';
import { Footer } from './components/Footer';
import { isBriefReleased, getNextReleaseCountdown } from './utils/time';

export default function App() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [activeBrief, setActiveBrief] = useState<BriefEdition | null>(null);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState<boolean>(false);
  const [subscribeInitialEmail, setSubscribeInitialEmail] = useState<string>('');
  const [isSubscribersOpen, setIsSubscribersOpen] = useState<boolean>(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [isEmailPreviewOpen, setIsEmailPreviewOpen] = useState<boolean>(false);
  const [unlockAll, setUnlockAll] = useState<boolean>(false);
  const [simulatedDate, setSimulatedDate] = useState<string | null>(null);
  const [currentBaTime, setCurrentBaTime] = useState<string>('');

  const openSubscribeWithEmail = (email: string = '') => {
    setSubscribeInitialEmail(email);
    setIsSubscribeOpen(true);
  };

  // Check admin mode from URL (?admin=true or ?preview=true) or sessionStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const adminParam = params.get('admin') || params.get('preview');
    const storedAdmin = typeof window !== 'undefined' ? sessionStorage.getItem('fridai_admin_mode') : null;
    
    if (adminParam === 'true' || adminParam === 'capacitarse' || storedAdmin === 'true') {
      setIsAdmin(true);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('fridai_admin_mode', 'true');
      }
    }
  }, []);

  const toggleAdminMode = () => {
    setIsAdmin(prev => {
      const nextVal = !prev;
      if (typeof window !== 'undefined') {
        if (nextVal) {
          sessionStorage.setItem('fridai_admin_mode', 'true');
        } else {
          sessionStorage.removeItem('fridai_admin_mode');
          setUnlockAll(false);
          setSimulatedDate(null);
        }
      }
      return nextVal;
    });
  };

  // Live timer for Buenos Aires clock & countdown
  useEffect(() => {
    const updateTime = () => {
      const dateToUse = simulatedDate ? new Date(simulatedDate) : new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Argentina/Buenos_Aires',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      };
      setCurrentBaTime(new Intl.DateTimeFormat('es-AR', options).format(dateToUse));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [simulatedDate]);

  // Handle URL query param (e.g. ?edition=1)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const editionParam = params.get('edition');
    if (editionParam) {
      const found = BRIEFS_DATA.find(b => b.id.toString() === editionParam || b.editionNumber.replace('#', '') === editionParam);
      if (found && !found.isPlaceholder) {
        setActiveBrief(found);
      }
    }
  }, []);

  // Check if brief is unlocked
  const isBriefUnlocked = (brief: BriefEdition): boolean => {
    if (unlockAll) return true;
    const simDate = simulatedDate ? new Date(simulatedDate) : null;
    return isBriefReleased(brief, simDate);
  };

  // Countdown calculations
  const simDateObj = simulatedDate ? new Date(simulatedDate) : null;
  const countdown = getNextReleaseCountdown(BRIEFS_DATA, simDateObj);

  // Available count
  const releasedCount = BRIEFS_DATA.filter(b => !b.isPlaceholder && (unlockAll || isBriefUnlocked(b))).length;

  const handleSelectBrief = (brief: BriefEdition) => {
    setActiveBrief(brief);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update URL without full reload
    const url = new URL(window.location.href);
    url.searchParams.set('edition', brief.id.toString());
    window.history.pushState({}, '', url);
  };

  const handleBackToGrid = () => {
    setActiveBrief(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('edition');
    window.history.pushState({}, '', url);
  };

  const scrollToGrid = () => {
    const gridElem = document.getElementById('parrilla-briefs');
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#09193a]">
      
      {/* Time Simulation & Buenos Aires Status Top Bar - Only visible in Admin Mode */}
      {isAdmin && (
        <TimeTravelBar
          unlockAll={unlockAll}
          onToggleUnlockAll={() => setUnlockAll(!unlockAll)}
          simulatedDate={simulatedDate}
          onSelectSimulatedDate={(iso) => setSimulatedDate(iso)}
          currentBaTime={currentBaTime}
          onOpenSubscribers={() => setIsSubscribersOpen(true)}
          onCloseAdminMode={toggleAdminMode}
        />
      )}

      {/* Main Navigation Header */}
      <Navbar
        onOpenSubscribe={() => openSubscribeWithEmail()}
        onOpenCalendar={() => setIsCalendarOpen(true)}
        onOpenEmailPreview={() => setIsEmailPreviewOpen(true)}
        onResetView={handleBackToGrid}
        activeBriefId={activeBrief ? activeBrief.id : null}
        unlockAll={unlockAll}
        onToggleUnlockAll={() => setUnlockAll(!unlockAll)}
        releasedCount={releasedCount}
        totalCount={BRIEFS_DATA.length}
        isAdmin={isAdmin}
      />

      {/* Main Content: Reader View or Home Grid */}
      <main className="flex-1">
        {activeBrief ? (
          <BriefReader
            brief={activeBrief}
            onBack={handleBackToGrid}
            onSelectBrief={handleSelectBrief}
            allBriefs={BRIEFS_DATA.filter(b => !b.isPlaceholder)}
            onOpenCalendar={() => setIsCalendarOpen(true)}
            onOpenSubscribe={() => openSubscribeWithEmail()}
          />
        ) : (
          <>
            <HeroBanner
              onOpenSubscribe={(email) => openSubscribeWithEmail(email || '')}
              onOpenCalendar={() => setIsCalendarOpen(true)}
              onScrollToGrid={scrollToGrid}
              nextBriefCountdown={countdown}
              totalBriefs={BRIEFS_DATA.length}
              availableBriefs={releasedCount}
            />

            <BriefGrid
              briefs={BRIEFS_DATA}
              onSelectBrief={handleSelectBrief}
              onOpenCalendar={() => setIsCalendarOpen(true)}
              onOpenSubscribe={() => openSubscribeWithEmail()}
              unlockAll={unlockAll}
              isBriefUnlockedFn={isBriefUnlocked}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenSubscribe={() => openSubscribeWithEmail()}
        onOpenCalendar={() => setIsCalendarOpen(true)}
        onOpenSubscribers={isAdmin ? () => setIsSubscribersOpen(true) : undefined}
        isAdmin={isAdmin}
        onToggleAdmin={toggleAdminMode}
      />

      {/* Modals */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        initialEmail={subscribeInitialEmail}
        onClose={() => {
          setIsSubscribeOpen(false);
          setSubscribeInitialEmail('');
        }}
        onOpenEmailPreview={() => {
          setIsSubscribeOpen(false);
          setIsEmailPreviewOpen(true);
        }}
      />

      <SubscribersModal
        isOpen={isSubscribersOpen}
        onClose={() => setIsSubscribersOpen(false)}
      />

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />

      <PlainEmailPreviewModal
        isOpen={isEmailPreviewOpen}
        onClose={() => setIsEmailPreviewOpen(false)}
        sampleBrief={activeBrief || BRIEFS_DATA[0]}
      />

    </div>
  );
}
