import React from 'react';
import { useSystem, useToolbar } from '@ohif/core';
import ToolGroup from './ToolGroup';
import ToolButton from './ToolButton';
import MeasurementToolsDropdown from './MeasurementToolsDropdown';

// Import tool icons
import zoomIcon from '../../assets/zoom.png';
import panIcon from '../../assets/pan.png';
import windowLevelIcon from '../../assets/windowLevel.png';
import captureIcon from '../../assets/capture.png';
import flipHorizontalIcon from '../../assets/flipHorizontal.png';
// Import additional tool icons (Tools 7-12)
import changeLayoutIcon from '../../assets/changeLayout.png';
import imageSyncIcon from '../../assets/ImageSliceSync.png';
import imageSynccIcon from '../../assets/slicee.png';
import invertIcon from '../../assets/Invert.png';
import angleIcon from '../../assets/Angle.png';
import threeDIcon from '../../assets/3D.png';
import dicomTagBrowserIcon from '../../assets/DicomTagBrowser.png';

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
    const toolButton = toolbarButtons.find(
      button =>
        button.id === toolName || (button.componentProps && button.componentProps.id === toolName)
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
      {/* Tool 1 - Measurement Tools Dropdown */}
      <MeasurementToolsDropdown />

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

      {/* Tool 6 - Change Layout */}
      <ToolButton
        onClick={() => handleToolClick(7)}
        title="Change Layout"
      >
        <img
          src={changeLayoutIcon}
          alt="Change Layout"
          className="h-6 w-6"
        />
      </ToolButton>

      {/* Tool 7 - Flip Horizontal Tool */}
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

      {/* Tool 8 - Image Slice Sync */}
      <ToolButton
        onClick={() => handleToolClick(8)}
        title="Image Slice Sync"
      >
        <img
          src={imageSynccIcon}
          alt="Image Slice Sync"
          className="h-5 w-5"
        />
      </ToolButton>

      {/* Tool 9 - Invert */}
      <ToolButton
        onClick={() => handleToolClick(9)}
        title="Invert Colors"
      >
        <img
          src={invertIcon}
          alt="Invert Colors"
          className="h-6 w-6"
        />
      </ToolButton>

      {/* Tool 10 - Angle */}
      <ToolButton
        onClick={() => handleToolClick(10)}
        title="Angle Tool"
      >
        <img
          src={angleIcon}
          alt="Angle Tool"
          className="h-6 w-6"
        />
      </ToolButton>

      {/* Tool 11 - 3D */}
      <ToolButton
        onClick={() => handleToolClick(11)}
        title="3D View"
      >
        <img
          src={threeDIcon}
          alt="3D View"
          className="h-6 w-6"
        />
      </ToolButton>

      {/* Tool 12 - DICOM Tag Browser */}
      <ToolButton
        onClick={() => handleToolClick(12)}
        title="DICOM Tag Browser"
      >
        <img
          src={dicomTagBrowserIcon}
          alt="DICOM Tag Browser"
          className="h-6 w-6"
        />
      </ToolButton>
    </ToolGroup>
  );
}

export default CenterToolGroup;
