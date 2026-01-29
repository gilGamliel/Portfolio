import { Project, getStatusDisplay } from '@/types';
import { Button, TagList } from '@/components/ui';
import { ProjectMedia } from './ProjectMedia';

interface ProjectDetailsProps {
  project: Project;
}

/**
 * Generic project details component.
 * Renders all sections conditionally based on available data.
 * This is the core component that powers the data-driven project page.
 */
export function ProjectDetails({ project }: ProjectDetailsProps) {
  const {
    title,
    subtitle,
    description,
    overview,
    problemStatement,
    features,
    architecture,
    techStack,
    myRole,
    responsibilities,
    status,
    links,
    year,
    duration,
    teamSize,
  } = project;

  return (
    <article className="space-y-12">
      {/* Header Section */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            {description}
          </p>
        )}

        {/* Meta Info Bar */}
        <MetaInfoBar
          status={status}
          year={year}
          duration={duration}
          teamSize={teamSize}
          myRole={myRole}
        />
      </header>

      {/* Media Section */}
      <ProjectMedia project={project} />

      {/* Overview / Problem Statement */}
      {(overview || problemStatement) && (
        <section className="space-y-6">
          {problemStatement && (
            <ContentBlock
              title="The Problem"
              content={problemStatement}
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          )}
          {overview && (
            <ContentBlock
              title="Overview"
              content={overview}
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
            />
          )}
        </section>
      )}

      {/* Key Features */}
      {features && features.length > 0 && (
        <section>
          <SectionTitle
            title="Key Features"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            }
          />
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-medium">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Architecture */}
      {architecture && (
        <section>
          <SectionTitle
            title="Architecture & System Design"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            }
          />
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-900/50 p-5 rounded-lg border-l-4 border-blue-500">
            {architecture}
          </p>
        </section>
      )}

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <section>
          <SectionTitle
            title="Tech Stack"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
          />
          <div className="mt-4">
            <TagList tags={techStack} variant="primary" size="md" />
          </div>
        </section>
      )}

      {/* My Role & Responsibilities */}
      {(myRole || (responsibilities && responsibilities.length > 0)) && (
        <section>
          <SectionTitle
            title="My Role & Responsibilities"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />
          <div className="mt-4 space-y-4">
            {myRole && (
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {myRole}
              </p>
            )}
            {responsibilities && responsibilities.length > 0 && (
              <ul className="space-y-2">
                {responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Links */}
      {links && links.length > 0 && (
        <section>
          <SectionTitle
            title="Project Links"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            }
          />
          <div className="mt-4 flex flex-wrap gap-3">
            {links.map((link) => (
              <Button
                key={link.url}
                href={link.url}
                external
                variant={link.type === 'github' ? 'outline' : 'primary'}
                size="md"
              >
                <LinkIcon type={link.type} />
                <span className="ml-2">{link.label}</span>
              </Button>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

/**
 * Meta info bar showing status, year, duration, etc.
 */
function MetaInfoBar({
  status,
  year,
  duration,
  teamSize,
  myRole,
}: {
  status?: Project['status'];
  year?: number;
  duration?: string;
  teamSize?: string;
  myRole?: string;
}) {
  const items = [
    status && { label: 'Status', value: getStatusDisplay(status) },
    year && { label: 'Year', value: year.toString() },
    duration && { label: 'Duration', value: duration },
    teamSize && { label: 'Team', value: teamSize },
    myRole && { label: 'Role', value: myRole },
  ].filter(Boolean) as { label: string; value: string }[];

  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {item.label}:
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Section title with icon
 */
function SectionTitle({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      {title}
    </h2>
  );
}

/**
 * Content block with title and content
 */
function ContentBlock({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-3">
        <span className="text-blue-600 dark:text-blue-400">{icon}</span>
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{content}</p>
    </div>
  );
}

/**
 * Link icon based on type
 */
function LinkIcon({ type }: { type: string }) {
  switch (type) {
    case 'github':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case 'appstore':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      );
    case 'playstore':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
      );
    default:
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      );
  }
}
