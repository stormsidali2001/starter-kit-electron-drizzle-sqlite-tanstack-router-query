/**
 * Type definitions for Tags
 */

/**
 * Base Tag interface
 */
export interface Tag {
  id: string;
  name: string;
  color: string | null;
}

/**
 * Tag with usage count
 */
export interface TagWithUsage extends Tag {
  usageCount: number;
}

/**
 * DTO for creating a new tag
 */
export interface CreateTagDto {
  name: string;
  color?: string | null;
}

/**
 * DTO for updating a tag
 */
export interface UpdateTagDto {
  name?: string;
  color?: string | null;
} 