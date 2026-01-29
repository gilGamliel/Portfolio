import { Hero, ProjectsSection } from '@/components';
import { getProjectsByCategory } from '@/data';

/**
 * Homepage - displays hero section and project carousels
 */
export default function HomePage() {
  const fullstackProjects = getProjectsByCategory('fullstack');
  const mobileProjects = getProjectsByCategory('apps');

  return (
    <>
      {/* Hero / About Section */}
      <Hero />

      {/* Projects Sections */}
      <div id="projects" className="scroll-mt-20">
        {/* Full-Stack Projects */}
        <ProjectsSection
          id="fullstack-projects"
          title="Full-Stack Projects"
          subtitle="End-to-end solutions built with modern technologies"
          projects={fullstackProjects}
        />

        {/* Mobile App Projects */}
        <ProjectsSection
          id="mobile-projects"
          title="Mobile Apps"
          subtitle="Native and cross-platform mobile applications"
          projects={mobileProjects}
        />
      </div>
    </>
  );
}
