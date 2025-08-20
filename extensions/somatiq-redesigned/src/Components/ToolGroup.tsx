import React from 'react';
import classNames from 'classnames';

/**
 * ToolGroup - Reusable glass morphism container for tool buttons
 *
 * This component provides the exact glass morphism styling from Figma design:
 * - Background: #111111
 * - Border: rgba(255, 255, 255, 0.08)
 * - Backdrop blur: 21px
 * - Box shadow: Multiple shadows for depth
 * - Border radius: 20px
 */

interface ToolGroupProps {
  children: React.ReactNode;
  className?: string;
}

function ToolGroup({ children, className }: ToolGroupProps) {
  return (
    <div
      className={classNames(
        // Base glass morphism styling from Figma
        'flex items-center',
        'bg-[#111111]',
        '',
        'rounded-[20px]',
        'px-4 py-3', // 16px padding from Figma
        'h-[50px]', // Exact height from Figma
        'gap-4', // 16px gap between tools from Figma
        // Glass morphism effects
        'backdrop-blur-[21px]',
        // Figma box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.35), inset 0px 3px 4px 0px rgba(255, 255, 255, 0.04)
        'shadow-[0px_5px_7px_0px_rgba(0,0,0,0.35),inset_0px_3px_4px_0px_rgba(255,255,255,0.04)]',
        className
      )}
    >
      {children}
    </div>
  );
}

export default ToolGroup;
