import React from 'react';
import ToolGroup from './ToolGroup';
import ToolButton from './ToolButton';

/**
 * CenterToolGroup - Main center tool group with placeholder icons
 * 
 * This component implements the center tool group from Figma with 12 tools.
 * Each tool has a numbered placeholder icon so you can tell me which 
 * specific icons/functions should go where.
 */

function CenterToolGroup() {
  // Placeholder click handlers - will replace with real OHIF commands later
  const handleToolClick = (toolNumber: number) => {
    console.log(`Tool ${toolNumber} clicked`);
  };

  return (
    <ToolGroup>
      {/* Tool 1 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(1)}
        title="Tool 1 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          1
        </div>
      </ToolButton>

      {/* Tool 2 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(2)}
        title="Tool 2 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          2
        </div>
      </ToolButton>

      {/* Tool 3 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(3)}
        title="Tool 3 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          3
        </div>
      </ToolButton>

      {/* Tool 4 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(4)}
        title="Tool 4 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          4
        </div>
      </ToolButton>

      {/* Tool 5 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(5)}
        title="Tool 5 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          5
        </div>
      </ToolButton>

      {/* Tool 6 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(6)}
        title="Tool 6 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          6
        </div>
      </ToolButton>

      {/* Tool 7 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(7)}
        title="Tool 7 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          7
        </div>
      </ToolButton>

      {/* Tool 8 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(8)}
        title="Tool 8 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          8
        </div>
      </ToolButton>

      {/* Tool 9 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(9)}
        title="Tool 9 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          9
        </div>
      </ToolButton>

      {/* Tool 10 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(10)}
        title="Tool 10 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          10
        </div>
      </ToolButton>

      {/* Tool 11 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(11)}
        title="Tool 11 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          11
        </div>
      </ToolButton>

      {/* Tool 12 - Placeholder */}
      <ToolButton
        onClick={() => handleToolClick(12)}
        title="Tool 12 - Please specify icon/function"
      >
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">
          12
        </div>
      </ToolButton>
    </ToolGroup>
  );
}

export default CenterToolGroup;