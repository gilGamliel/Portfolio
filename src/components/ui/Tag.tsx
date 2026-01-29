interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  size?: 'sm' | 'md';
}

const variantClasses = {
  default: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
  primary: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
};

const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
};

/**
 * Tag/badge component for displaying tech stack, status, etc.
 */
export function Tag({ label, variant = 'default', size = 'sm' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {label}
    </span>
  );
}

interface TagListProps {
  tags: string[];
  variant?: TagProps['variant'];
  size?: TagProps['size'];
  className?: string;
}

/**
 * Renders a list of tags with consistent spacing
 */
export function TagList({
  tags,
  variant = 'default',
  size = 'sm',
  className = '',
}: TagListProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Tag key={tag} label={tag} variant={variant} size={size} />
      ))}
    </div>
  );
}
