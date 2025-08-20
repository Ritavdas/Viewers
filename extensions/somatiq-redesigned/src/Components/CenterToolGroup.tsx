import React from 'react';
import { useSystem, useToolbar } from '@ohif/core';
import ToolGroup from './ToolGroup';
import ToolButton from './ToolButton';

// Import tool icons
import lengthIcon from '../../assets/length.png';
// import lengthIcon from '../assets/length.png';
import zoomIcon from '../../assets/zoom.png';
import panIcon from '../../assets/pan.png';
import windowLevelIcon from '../../assets/windowLevel.png';
import captureIcon from '../../assets/capture.png';
import flipHorizontalIcon from '../../assets/flipHorizontal.png';

/**
 * CenterToolGroup - Main center tool group with actual tool icons
 *
 * This component implements the center tool group from Figma with 12 tools.
 * First 6 tools now have actual icons, remaining 6 have placeholders.
 */

function CenterToolGroup() {
  const { commandsManager } = useSystem();
  const { toolbarButtons, onInteraction } = useToolbar({ buttonSection: 'primary' });

  // Helper function to check if a tool is active
  const isToolActive = (toolName: string): boolean => {
    const toolButton = toolbarButtons.find(button => 
      button.id === toolName || 
      (button.componentProps && button.componentProps.id === toolName)
    );
    return toolButton?.componentProps?.isActive || false;
  };

  // Placeholder click handlers for tools 7-12
  const handleToolClick = (toolNumber: number) => {
    console.log(`Tool ${toolNumber} clicked`);
  };

  // OHIF tool command configurations
  const setToolActiveToolbar = {
    commandName: 'setToolActiveToolbar',
    commandOptions: {
      toolGroupIds: ['default', 'mpr', 'SRToolGroup', 'volume3d'],
    },
  };

  // Tool functionality handlers
  const handleLengthTool = () => {
    commandsManager.run(setToolActiveToolbar, { toolName: 'Length' });
  };

  const handleZoomTool = () => {
    commandsManager.run(setToolActiveToolbar, { toolName: 'Zoom' });
  };

  const handlePanTool = () => {
    commandsManager.run(setToolActiveToolbar, { toolName: 'Pan' });
  };

  const handleWindowLevelTool = () => {
    commandsManager.run(setToolActiveToolbar, { toolName: 'WindowLevel' });
  };

  const handleCaptureTool = () => {
    commandsManager.run('showDownloadViewportModal');
  };

  const handleFlipHorizontal = () => {
    commandsManager.run('flipViewportHorizontal');
  };

  return (
    <ToolGroup>
      {/* Tool 1 - Length Tool */}
      <ToolButton
        onClick={handleLengthTool}
        title="Length Tool"
        active={isToolActive('Length')}
      >
        <img
          src={lengthIcon}
          alt="Length Tool"
          className="h-6 w-6"
        />
      </ToolButton>

      {/* Tool 2 - Zoom Tool */}
      <ToolButton
        onClick={handleZoomTool}
        title="Zoom Tool"
        active={isToolActive('Zoom')}
      >
        <img
          src={zoomIcon}
          alt="Zoom Tool"
          className="h-6 w-6"
        />
      </ToolButton>

      {/* Tool 3 - Pan Tool */}
      <ToolButton
        onClick={handlePanTool}
        title="Pan Tool"
        active={isToolActive('Pan')}
      >
        <img
          src={panIcon}
          alt="Pan Tool"
          className="h-6 w-6"
        />
      </ToolButton>

      {/* Tool 4 - Window Level Tool */}
      <ToolButton
        onClick={handleWindowLevelTool}
        title="Window Level Tool"
        active={isToolActive('WindowLevel')}
      >
        <img
          src={windowLevelIcon}
          alt="Window Level Tool"
          className="h-6 w-6"
        />
      </ToolButton>

      {/* Tool 5 - Capture Tool */}
      <ToolButton
        onClick={handleCaptureTool}
        title="Capture Tool"
        active={false}
      >
        <img
          src={captureIcon}
          alt="Capture Tool"
          className="h-6 w-6"
        />
      </ToolButton>

      {/* Tool 6 - Flip Horizontal Tool */}
      <ToolButton
        onClick={handleFlipHorizontal}
        title="Flip Horizontal Tool"
        active={false}
      >
        <img
          src={flipHorizontalIcon}
          alt="Flip Horizontal Tool"
          className="h-6 w-6"
        />
      </ToolButton>

      {/* Tool 7 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(7)}
        title="Tool 7 - Please specify icon/function"
      >
        <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-white text-xs font-bold text-black">
          7
        </div>
      </ToolButton>

      {/* Tool 8 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(8)}
        title="Tool 8 - Please specify icon/function"
      >
        <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-white text-xs font-bold text-black">
          8
        </div>
      </ToolButton>

      {/* Tool 9 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(9)}
        title="Tool 9 - Please specify icon/function"
      >
        <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-white text-xs font-bold text-black">
          9
        </div>
      </ToolButton>

      {/* Tool 10 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(10)}
        title="Tool 10 - Please specify icon/function"
      >
        <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-white text-xs font-bold text-black">
          10
        </div>
      </ToolButton>

      {/* Tool 11 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(11)}
        title="Tool 11 - Please specify icon/function"
      >
        <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-white text-xs font-bold text-black">
          11
        </div>
      </ToolButton>

      {/* Tool 12 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(12)}
        title="Tool 12 - Please specify icon/function"
      >
        <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-white text-xs font-bold text-black">
          12
        </div>
      </ToolButton>
    </ToolGroup>
  );
}

export default CenterToolGroup;
