import React from 'react';
import classNames from 'classnames';

/**
 * ToolButton - Individual tool button with placeholder icon
 * 
 * This component provides the exact button styling from Figma design:
 * - Size: 24x24px
 * - White icons/content
 * - Hover effects
 * - Click handlers for functionality
 */

interface ToolButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string;
  active?: boolean;
}

function ToolButton({ 
  children, 
  onClick, 
  className, 
  title,
  active = false 
}: ToolButtonProps) {
  return (
    <button
      className={classNames(
        // Base styling from Figma - 24x24px
        'w-6 h-6',  // 24px x 24px from Figma
        'flex items-center justify-center',
        
        // Icon styling
        'text-white',
        
        // Interaction states
        'cursor-pointer',
        'transition-all duration-200',
        'hover:scale-110',
        'hover:text-white/80',
        'active:scale-95',
        
        // Active state
        active && 'text-blue-400',
        
        // Remove default button styles
        'bg-transparent border-none p-0 outline-none',
        
        className
      )}
      onClick={onClick}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
}

export default ToolButton;