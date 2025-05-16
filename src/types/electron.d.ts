import { JournalEntry, CreateJournalEntryDto, UpdateJournalEntryDto } from './journal';
import { 
  Habit, 
  CreateHabitDto, 
  UpdateHabitDto, 
  LogHabitCompletionDto, 
  HabitCompletionWithHabit,
  HabitStatistics,
  HabitWithStats,
  PaginatedResult,
  JournalEntryWithHabitCompletion
} from './habit';
import { Tag } from './tag';

// Define the structure of the habits API
export interface HabitsAPI {
  getAllActive: () => Promise<Habit[]>;
  create: (data: CreateHabitDto) => Promise<Habit>;
  update: (id: string, data: UpdateHabitDto) => Promise<Habit>;
  archive: (id: string) => Promise<Habit>;
  restore: (id: string) => Promise<Habit>;
  logCompletion: (data: LogHabitCompletionDto) => Promise<any>;
  getCompletions: (habitIds: string[] | null, startDate: string, endDate: string) => Promise<PaginatedResult<HabitCompletionWithHabit>>;
  getTodayCompletions: () => Promise<PaginatedResult<HabitCompletionWithHabit>>;
  getDateCompletions: (dateString: string) => Promise<PaginatedResult<HabitCompletionWithHabit>>;
  getStatistics: (habitId: string, period?: 'week' | 'month' | 'year') => Promise<HabitStatistics>;
  getWithStats: (options?: any) => Promise<PaginatedResult<HabitWithStats>>;
  getTags: (habitId: string) => Promise<Tag[]>;
  setTags: (habitId: string, tagIds: string[]) => Promise<boolean>;
  getByTag: (tagId: string, page?: number, pageSize?: number) => Promise<PaginatedResult<Habit>>;
  getJournalEntries: (habitId: string, page?: number, pageSize?: number) => Promise<PaginatedResult<JournalEntryWithHabitCompletion>>;
}

// Define the journal entries API
export interface JournalEntriesAPI {
  getAll: () => Promise<JournalEntry[]>;
  getById: (id: string) => Promise<JournalEntry>;
  create: (data: CreateJournalEntryDto) => Promise<JournalEntry>;
  update: (id: string, data: UpdateJournalEntryDto) => Promise<JournalEntry>;
  delete: (id: string) => Promise<void>;
  getByDateRange: (startDate: string, endDate: string) => Promise<JournalEntry[]>;
  search: (keyword: string) => Promise<JournalEntry[]>;
  getByTag: (tagName: string) => Promise<JournalEntry[]>;
  getTags: (id: string) => Promise<string[]>;
  getStatistics: (period: 'week' | 'month' | 'year') => Promise<any>;
  linkToProject: (journalEntryId: string, projectId: string) => Promise<void>;
  addSectionNote: (journalEntryId: string, data: any) => Promise<any>;
  getSectionNotes: (journalEntryId: string, section?: string) => Promise<any>;
}

// Define the tags API
export interface TagsAPI {
  getAll: () => Promise<Tag[]>;
  getById: (id: string) => Promise<Tag>;
  create: (data: { name: string; color?: string | null }) => Promise<Tag>;
  update: (id: string, data: { name?: string; color?: string | null }) => Promise<Tag>;
  delete: (id: string) => Promise<void>;
  getWithUsageCount: () => Promise<any[]>;
  getEntitiesByTag: (tagName: string, entityType?: string) => Promise<any[]>;
  getAllEntitiesByTag: (tagName: string) => Promise<any[]>;
  addToEntity: (tagId: string, entityId: string, entityType: string) => Promise<void>;
  removeFromEntity: (tagId: string, entityId: string, entityType: string) => Promise<void>;
  setEntityTags: (entityId: string, entityType: string, tagIds: string[]) => Promise<void>;
  getEntityTags: (entityId: string, entityType: string) => Promise<Tag[]>;
}

// Define the main Electron API interface
export interface ElectronAPI {
  journalEntries: JournalEntriesAPI;
  tags: TagsAPI;
  habits: HabitsAPI;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

export {}; 