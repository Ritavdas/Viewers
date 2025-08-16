import React from 'react';
import PropTypes from 'prop-types';
import SidePanelWithServices from '@ohif/extension-default/src/Components/SidePanelWithServices';

/**
 * SomatiqSidePanelWithServices - Redesigned side panel wrapper with glass morphism effects
 * 
 * This component wraps the original SidePanelWithServices with enhanced styling
 * for the glass morphism redesign while maintaining all original functionality.
 */
function SomatiqSidePanelWithServices({
  side,
  isExpanded,
  servicesManager,
  ...props
}) {
  return (
    <div className="h-full">
      {/* Glass morphism container */}
      <div className="h-full bg-gradient-to-b from-white/3 to-white/1 backdrop-blur-sm">
        {/* Original side panel with enhanced styling */}
        <div className="h-full [&_.ohif-scrollbar]:bg-white/5 [&_.ohif-scrollbar-thumb]:bg-white/20 [&_.ohif-scrollbar-thumb:hover]:bg-white/30">
          <SidePanelWithServices
            side={side}
            isExpanded={isExpanded}
            servicesManager={servicesManager}
            {...props}
          />
        </div>
      </div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/2 via-transparent to-white/2 pointer-events-none" />
    </div>
  );
}

SomatiqSidePanelWithServices.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  servicesManager: PropTypes.object.isRequired,
};

export default SomatiqSidePanelWithServices;