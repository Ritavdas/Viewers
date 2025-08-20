import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSystem, useToolbar } from '@ohif/core';
import { Icons } from '@ohif/ui-next';
import ToolButton from './ToolButton';

// Import measurement tool icons
import lengthIcon from '../../assets/length.png';

/**
 * MeasurementToolsDropdown - Dropdown with all measurement tools like original OHIF header
 *
 * This component replicates the exact functionality of the original OHIF measurement tools dropdown:
 * - Shows primary tool (active tool or Length by default)
 * - Dropdown with all 9 measurement tools
 * - Glass morphism styling to match design
 * - OHIF toolbar service integration
 */

const measurementTools = [
  {
    id: 'Length',
    label: 'Length',
    icon: 'tool-length',
    customIcon: lengthIcon,
    tooltip: 'Length Tool',
  },
  {
    id: 'Bidirectional',
    label: 'Bidirectional',
    icon: 'tool-bidirectional',
    tooltip: 'Bidirectional Tool',
  },
  {
    id: 'ArrowAnnotate',
    label: 'Annotation',
    icon: 'tool-annotate',
    tooltip: 'Arrow Annotate',
  },
  {
    id: 'EllipticalROI',
    label: 'Ellipse',
    icon: 'tool-ellipse',
    tooltip: 'Ellipse ROI',
  },
  {
    id: 'RectangleROI',
    label: 'Rectangle',
    icon: 'tool-rectangle',
    tooltip: 'Rectangle ROI',
  },
  {
    id: 'CircleROI',
    label: 'Circle',
    icon: 'tool-circle',
    tooltip: 'Circle Tool',
  },
  {
    id: 'PlanarFreehandROI',
    label: 'Freehand ROI',
    icon: 'icon-tool-freehand-roi',
    tooltip: 'Freehand ROI',
  },
  {
    id: 'SplineROI',
    label: 'Spline ROI',
    icon: 'icon-tool-spline-roi',
    tooltip: 'Spline ROI',
  },
  {
    id: 'LivewireContour',
    label: 'Livewire',
    icon: 'icon-tool-livewire',
    tooltip: 'Livewire tool',
  },
];

function MeasurementToolsDropdown() {
  const { commandsManager } = useSystem();
  const { toolbarButtons, onInteraction } = useToolbar({ buttonSection: 'primary' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find active measurement tool or default to Length
  const getActiveTool = () => {
    const activeTool = measurementTools.find(tool => {
      const toolButton = toolbarButtons.find(
        button =>
          button.id === tool.id || (button.componentProps && button.componentProps.id === tool.id)
      );
      return toolButton?.componentProps?.isActive;
    });
    return activeTool || measurementTools[0]; // Default to Length
  };

  // Check if there's a truly active measurement tool (not just default)
  const getActiveToolState = () => {
    return measurementTools.find(tool => {
      const toolButton = toolbarButtons.find(
        button =>
          button.id === tool.id || (button.componentProps && button.componentProps.id === tool.id)
      );
      return toolButton?.componentProps?.isActive;
    });
  };

  const activeTool = getActiveTool();
  const isToolReallyActive = !!getActiveToolState();

  // OHIF tool command configuration
  const setToolActiveToolbar = {
    commandName: 'setToolActiveToolbar',
    commandOptions: {
      toolGroupIds: ['default', 'mpr', 'SRToolGroup', 'volume3d'],
    },
  };

  // Handle tool selection
  const handleToolSelect = (toolId: string) => {
    commandsManager.run(setToolActiveToolbar, { toolName: toolId });
    setIsDropdownOpen(false);
  };

  // Handle primary tool click
  const handlePrimaryClick = () => {
    handleToolSelect(activeTool.id);
  };

  // Handle dropdown toggle
  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!isDropdownOpen && triggerRef.current) {
      // Calculate dropdown position based on trigger button
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 8, // 8px offset
        left: rect.left + window.scrollX,
      });
    }

    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      {/* Primary Tool Button with Dropdown Arrow */}
      <div
        ref={triggerRef}
        className="flex items-center"
      >
        {/* Main Tool Button */}
        <ToolButton
          onClick={handlePrimaryClick}
          title={activeTool.tooltip}
          active={isToolReallyActive}
        >
          {activeTool.customIcon ? (
            <img
              src={activeTool.customIcon}
              alt={activeTool.label}
              className="h-6 w-6"
            />
          ) : (
            <Icons.ByName
              name={activeTool.icon}
              className="h-6 w-6 text-white"
            />
          )}
        </ToolButton>

        {/* Dropdown Arrow */}
        <button
          onClick={handleDropdownToggle}
          className="ml-1 flex h-3 w-3 items-center justify-center text-white/60 transition-colors hover:text-white"
          title="More measurement tools"
        >
          <svg
            className={`h-2 w-2 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Portal-based Dropdown Menu */}
      {isDropdownOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className="min-w-48 fixed z-[9999] rounded-lg border border-white/10 bg-[#1a1a1a] shadow-2xl backdrop-blur-xl"
            style={{
              top: dropdownPosition.top,
              left: dropdownPosition.left,
            }}
          >
            <div className="p-2">
              {measurementTools.map(tool => (
                <button
                  key={tool.id}
                  onClick={() => handleToolSelect(tool.id)}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-white transition-colors hover:bg-white/10"
                  title={tool.tooltip}
                >
                  {/* Tool Icon */}
                  <div className="flex h-6 w-6 items-center justify-center">
                    {tool.customIcon ? (
                      <img
                        src={tool.customIcon}
                        alt={tool.label}
                        className="h-5 w-5"
                      />
                    ) : (
                      <Icons.ByName
                        name={tool.icon}
                        className="h-5 w-5 text-white"
                      />
                    )}
                  </div>

                  {/* Tool Label */}
                  <span>{tool.label}</span>

                  {/* Active Indicator */}
                  {activeTool.id === tool.id && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-blue-400" />
                  )}
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default MeasurementToolsDropdown;
