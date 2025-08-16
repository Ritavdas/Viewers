import SomatiqViewerLayout from './ViewerLayout/SomatiqViewerLayout';

/**
 * Layout Template Module for Somatiq Redesigned Extension
 * 
 * This module provides the main layout template that defines the structural
 * organization of the redesigned viewer interface with glass morphism effects.
 */
export default function ({ servicesManager, extensionManager, commandsManager, hotkeysManager }) {
  function SomatiqViewerLayoutWithServices(props) {
    return SomatiqViewerLayout({
      servicesManager,
      extensionManager,
      commandsManager,
      hotkeysManager,
      ...props,
    });
  }

  return [
    {
      name: 'somatiqViewerLayout',
      id: 'somatiqViewerLayout',
      component: SomatiqViewerLayoutWithServices,
    },
  ];
}