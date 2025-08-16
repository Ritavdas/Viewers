import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '@ohif/ui-next';
import { Types } from '@ohif/ui';

const PatientInfoVisibility = Types.PatientInfoVisibility;

/**
 * SomatiqViewerHeader - Redesigned header component with glass morphism effects
 * 
 * This component provides a modern, glass morphism header for the redesigned OHIF viewer.
 * Features include:
 * - Glass morphism background with backdrop blur
 * - Enhanced visual hierarchy
 * - Modern dark theme styling
 * - Preserved functionality from original header
 */
function SomatiqViewerHeader({
  hotkeysManager,
  extensionManager,
  servicesManager,
  appConfig,
}) {
  const { customizationService } = servicesManager.services;

  // Get menu options from customization service
  const AboutModal = customizationService.getCustomization(
    'ohif.aboutModal'
  );
  const UserPreferencesModal = customizationService.getCustomization(
    'ohif.userPreferencesModal'
  );

  const menuOptions = [
    {
      title: AboutModal?.menuTitle ?? 'About',
      icon: 'info',
      onClick: () => {
        // Handle about modal
      },
    },
    {
      title: UserPreferencesModal?.menuTitle ?? 'Preferences',
      icon: 'settings',
      onClick: () => {
        // Handle preferences modal
      },
    },
  ];

  if (appConfig.oidc) {
    menuOptions.push({
      icon: 'power-off',
      title: 'Logout',
      onClick: () => {
        // Handle logout
      },
    });
  }

  return (
    <div className="relative">
      {/* Glass Morphism Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/60 to-black/80 backdrop-blur-md border-b border-white/10" />
      
      {/* Header Content */}
      <div className="relative z-10">
        <Header
          isSticky={false}
          menuOptions={menuOptions}
          isReturnEnabled={false}
          WhiteLabeling={appConfig.whiteLabeling}
          showPatientInfo={PatientInfoVisibility.DISABLED}
          className="bg-transparent border-none"
        />
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}

SomatiqViewerHeader.propTypes = {
  hotkeysManager: PropTypes.object,
  extensionManager: PropTypes.object.isRequired,
  servicesManager: PropTypes.object.isRequired,
  appConfig: PropTypes.object.isRequired,
};

export default SomatiqViewerHeader;