import React from 'react';
import PropTypes from 'prop-types';
import SidePanelWithServices from '@ohif/extension-default/src/Components/SidePanelWithServices';

/**
 * SomatiqSidePanelWithServices - Clean side panel wrapper
 * 
 * This component simply wraps the original SidePanelWithServices without any custom styling.
 * Ready for customization as needed for the assignment.
 */
function SomatiqSidePanelWithServices({
  side,
  isExpanded,
  servicesManager,
  ...props
}) {
  return (
    <SidePanelWithServices
      side={side}
      isExpanded={isExpanded}
      servicesManager={servicesManager}
      {...props}
    />
  );
}

SomatiqSidePanelWithServices.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  servicesManager: PropTypes.object.isRequired,
};

export default SomatiqSidePanelWithServices;