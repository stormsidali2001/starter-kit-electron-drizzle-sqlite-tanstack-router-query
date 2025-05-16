export interface JournalEntry {
  id: string;
  title: string;
  content?: string;
  timestamp?: string;
  createdAt: Date | string;
  lastModified?: Date | string;
  tags?: string[];
  projectId?: string | null;
  projectName?: string | null;
  mood?: number;
  isEncrypted?: boolean;
}

export interface JournalSectionNote {
  id: string;
  journalEntryId: string;
  section: string;
  content: string;
  timestamp: string;
}

export interface JournalStatistics {
  entriesCount: number;
  totalWordCount: number;
  averageWordsPerDay: number;
  streakDays: number;
  longestStreak: number;
  mostProductiveDay: string;
  topTags: Array<{
    tag: string;
    count: number;
  }>;
}

export interface CreateJournalEntryDto {
  title: string;
  content?: string;
  timestamp?: string;
  tags?: string[];
  projectId?: string;
  mood?: number;
}

export interface UpdateJournalEntryDto {
  title?: string;
  content?: string;
  timestamp?: string;
  tags?: string[];
  projectId?: string | null;
  mood?: number;
}

export interface CreateSectionNoteDto {
  section: string;
  content: string;
}

export interface DateRangeParams {
  startDate: Date;
  endDate: Date;
} 