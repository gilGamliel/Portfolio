import { Button } from '@/components/ui';

/**
 * Hero / About Me section for the homepage
 */
export function Hero() {
  return (
    <section
      id="about"
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 animate-fade-in">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Your Name
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
          Full-Stack & Mobile App Developer
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I&apos;m a passionate developer who thrives on building{' '}
          <span className="text-gray-900 dark:text-white font-medium">
            production-grade systems
          </span>{' '}
          from the ground up. With a strong sense of{' '}
          <span className="text-gray-900 dark:text-white font-medium">
            ownership
          </span>{' '}
          and a problem-solving mindset, I transform complex challenges into
          elegant, scalable solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/#projects" size="lg">
            View My Projects
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
          <Button href="/#contact" variant="outline" size="lg">
            Get In Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
