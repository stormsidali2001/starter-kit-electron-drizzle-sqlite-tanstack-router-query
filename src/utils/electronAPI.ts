import { HabitsAPI, JournalEntriesAPI, TagsAPI } from '@/types/electron';

/**
 * Check if the Electron API is available
 */
export const isElectronAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.electronAPI !== 'undefined';
};

/**
 * Check if the habits API is available
 */
export const isHabitsAPIAvailable = (): boolean => {
  return isElectronAvailable() && 
         typeof window.electronAPI.habits !== 'undefined';
};

/**
 * Check if the journal entries API is available
 */
export const isJournalEntriesAPIAvailable = (): boolean => {
  return isElectronAvailable() && 
         typeof window.electronAPI.journalEntries !== 'undefined';
};

/**
 * Check if the tags API is available
 */
export const isTagsAPIAvailable = (): boolean => {
  return isElectronAvailable() && 
         typeof window.electronAPI.tags !== 'undefined';
};

/**
 * Get the habits API if available
 */
export const getHabitsAPI = (): HabitsAPI | null => {
  if (isHabitsAPIAvailable()) {
    return window.electronAPI.habits;
  }
  return null;
};

/**
 * Get the journal entries API if available
 */
export const getJournalEntriesAPI = (): JournalEntriesAPI | null => {
  if (isJournalEntriesAPIAvailable()) {
    return window.electronAPI.journalEntries;
  }
  return null;
};

/**
 * Get the tags API if available
 */
export const getTagsAPI = (): TagsAPI | null => {
  if (isTagsAPIAvailable()) {
    return window.electronAPI.tags;
  }
  return null;
};

/**
 * Log the status of Electron API for debugging
 */
export const logElectronAPIStatus = (): void => {
  console.log('Electron API status:', {
    windowExists: typeof window !== 'undefined',
    electronAPIExists: typeof window?.electronAPI !== 'undefined',
    habitsExists: typeof window?.electronAPI?.habits !== 'undefined',
    journalEntriesExists: typeof window?.electronAPI?.journalEntries !== 'undefined',
    tagsExists: typeof window?.electronAPI?.tags !== 'undefined'
  });
}; 