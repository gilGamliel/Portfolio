'use client';

import { ReactNode, useRef, useState, useEffect } from 'react';

interface HorizontalScrollerProps {
  children: ReactNode;
  className?: string;
  showControls?: boolean;
}

/**
 * Horizontal scrolling container with smooth scroll behavior.
 * Supports touch scrolling on mobile and optional navigation controls.
 */
export function HorizontalScroller({
  children,
  className = '',
  showControls = true,
}: HorizontalScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    const targetScroll =
      scrollRef.current.scrollLeft +
      (direction === 'left' ? -scrollAmount : scrollAmount);

    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Scroll Container */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mb-4 snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {children}
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          {/* Left Button */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-200 ${
              canScrollLeft
                ? 'opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer'
                : 'opacity-0 cursor-not-allowed'
            }`}
          >
            <svg
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-200 ${
              canScrollRight
                ? 'opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer'
                : 'opacity-0 cursor-not-allowed'
            }`}
          >
            <svg
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Gradient Overlays for scroll indication */}
          <div
            className={`absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none transition-opacity duration-200 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            className={`absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none transition-opacity duration-200 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </>
      )}
    </div>
  );
}
