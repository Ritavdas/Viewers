import React from 'react';
import SomatiqHeader from './SomatiqHeader';

/**
 * SomatiqViewerHeader - Wrapper component for our custom header
 *
 * This component simply wraps our custom SomatiqHeader to maintain
 * the same interface as the original ViewerHeader.
 */
function SomatiqViewerHeader({ appConfig }) {
  return <SomatiqHeader appConfig={appConfig} />;
}

export default SomatiqViewerHeader;
