/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { IntroView } from './components/views/IntroView';
import { ReadingView } from './components/views/ReadingView';
import { StoryView } from './components/views/StoryView';
import { GamesView } from './components/views/GamesView';
import { QuizView } from './components/views/QuizView';
import { ProgressModal } from './components/views/ProgressModal';
import { loadUserProgress, saveUserProgress, resetUserProgress } from './utils/storage';
import { sounds } from './utils/soundEffects';
import { UserProgress } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [isProgressOpen, setIsProgressOpen] = useState<boolean>(false);

  // Sync sounds state with progress
  useEffect(() => {
    sounds.enabled = progress.soundEnabled;
  }, [progress.soundEnabled]);

  // Save progress changes to localStorage
  const updateProgress = (updater: (prev: UserProgress) => UserProgress) => {
    setProgress(prev => {
      const next = updater(prev);
      saveUserProgress(next);
      return next;
    });
  };

  const handleAddStar = (count: number) => {
    updateProgress(prev => ({
      ...prev,
      totalStars: prev.totalStars + count
    }));
  };

  const handleToggleReadVerse = (ayahNum: number) => {
    updateProgress(prev => {
      const exists = prev.readVerses.includes(ayahNum);
      const newVerses = exists
        ? prev.readVerses.filter(n => n !== ayahNum)
        : [...prev.readVerses, ayahNum];
      return {
        ...prev,
        readVerses: newVerses
      };
    });
  };

  const handleCompleteGroup = (groupId: number) => {
    updateProgress(prev => {
      if (prev.studiedGroups.includes(groupId)) return prev;
      return {
        ...prev,
        studiedGroups: [...prev.studiedGroups, groupId]
      };
    });
  };

  const handleUpdateGameStatus = (
    gameKey: 'susunAyat' | 'pasangkanGambar' | 'benarSalah' | 'cariPasangan' | 'petualanganBintang',
    completed: boolean
  ) => {
    updateProgress(prev => ({
      ...prev,
      completedGames: {
        ...prev.completedGames,
        [gameKey]: completed
      }
    }));
  };

  const handleAdvanceQuestStage = (stage: number) => {
    updateProgress(prev => ({
      ...prev,
      questStage: Math.max(prev.questStage, stage)
    }));
  };

  const handleRecordQuizResult = (score: number) => {
    updateProgress(prev => ({
      ...prev,
      quizzesTaken: prev.quizzesTaken + 1,
      bestQuizScore: Math.max(prev.bestQuizScore, score)
    }));
  };

  const handleToggleSound = () => {
    updateProgress(prev => {
      const nextVal = !prev.soundEnabled;
      sounds.enabled = nextVal;
      return {
        ...prev,
        soundEnabled: nextVal
      };
    });
  };

  const handleChangeArabicSize = (size: 'normal' | 'large' | 'huge') => {
    updateProgress(prev => ({
      ...prev,
      fontSizeArabic: size
    }));
  };

  const handleResetProgress = () => {
    const fresh = resetUserProgress();
    setProgress(fresh);
    sounds.enabled = fresh.soundEnabled;
  };

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Strict 3-zone Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleNavigate}
        totalStars={progress.totalStars}
        onOpenProgress={() => setIsProgressOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {currentTab === 'home' && (
          <HomeView
            progress={progress}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'intro' && (
          <IntroView
            onNavigate={handleNavigate}
            onAddStar={handleAddStar}
          />
        )}

        {currentTab === 'reading' && (
          <ReadingView
            readVerses={progress.readVerses}
            onToggleReadVerse={handleToggleReadVerse}
            fontSizeArabic={progress.fontSizeArabic}
            onChangeFontSize={handleChangeArabicSize}
            onAddStar={handleAddStar}
          />
        )}

        {currentTab === 'story' && (
          <StoryView
            studiedGroups={progress.studiedGroups}
            onCompleteGroup={handleCompleteGroup}
            onAddStar={handleAddStar}
          />
        )}

        {currentTab === 'games' && (
          <GamesView
            completedGames={progress.completedGames}
            questStage={progress.questStage}
            onUpdateGameStatus={handleUpdateGameStatus}
            onAdvanceQuestStage={handleAdvanceQuestStage}
            onAddStar={handleAddStar}
          />
        )}

        {currentTab === 'quiz' && (
          <QuizView
            bestScore={progress.bestQuizScore}
            quizzesTaken={progress.quizzesTaken}
            onRecordQuizResult={handleRecordQuizResult}
            onAddStar={handleAddStar}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onSelectTab={handleNavigate} />

      {/* Progress & Accessibility Modal */}
      <ProgressModal
        isOpen={isProgressOpen}
        onClose={() => setIsProgressOpen(false)}
        progress={progress}
        onToggleSound={handleToggleSound}
        onResetProgress={handleResetProgress}
        onChangeArabicSize={handleChangeArabicSize}
      />
    </div>
  );
}
