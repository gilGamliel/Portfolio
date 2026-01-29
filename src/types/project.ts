/**
 * Project Data Model
 * Defines the structure for all portfolio projects.
 * All fields except required ones are optional to support flexible content.
 */

export type ProjectCategory = 'fullstack' | 'apps';

export type ProjectStatus = 'live' | 'in-development' | 'sunset' | 'archived';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'website' | 'appstore' | 'playstore' | 'demo' | 'other';
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  // Required fields
  slug: string;
  category: ProjectCategory;
  title: string;
  shortDescription: string;

  // Optional content fields
  subtitle?: string;
  description?: string;
  overview?: string;
  problemStatement?: string;

  // Media (all optional)
  videoUrl?: string;
  videoPoster?: string;
  images?: ProjectImage[];
  thumbnailUrl?: string;

  // Project details (all optional)
  features?: string[];
  architecture?: string;
  techStack?: string[];
  myRole?: string;
  responsibilities?: string[];
  status?: ProjectStatus;
  links?: ProjectLink[];

  // Metadata
  year?: number;
  duration?: string;
  teamSize?: string;
}

/**
 * Type guard to check if a project has video content
 */
export function hasVideo(project: Project): boolean {
  return Boolean(project.videoUrl);
}

/**
 * Type guard to check if a project has image content
 */
export function hasImages(project: Project): boolean {
  return Boolean(project.images && project.images.length > 0);
}

/**
 * Type guard to check if a project has any media
 */
export function hasMedia(project: Project): boolean {
  return hasVideo(project) || hasImages(project);
}

/**
 * Get display status text
 */
export function getStatusDisplay(status?: ProjectStatus): string {
  const statusMap: Record<ProjectStatus, string> = {
    live: '🟢 Live in Production',
    'in-development': '🔵 In Development',
    sunset: '🟠 Sunset',
    archived: '⚪ Archived',
  };
  return status ? statusMap[status] : '';
}
