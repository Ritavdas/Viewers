import React from 'react';
import { id } from './id';
import getLayoutTemplateModule from './getLayoutTemplateModule';
import getPanelModule from './getPanelModule';
import getViewportModule from './getViewportModule';

/**
 * Somatiq Redesigned Extension
 * 
 * This extension provides a modern, glass morphism UI redesign for OHIF Viewer
 * while maintaining all existing functionality. It includes:
 * - Custom ViewerLayout with glass morphism effects
 * - Redesigned panels and components
 * - Modern dark theme with enhanced UX
 */
const extension = {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id,

  /**
   * Layout template module provides the main viewer layout component
   */
  getLayoutTemplateModule,

  /**
   * Panel module provides custom panels for the redesigned UI
   */
  getPanelModule,

  /**
   * Viewport module provides custom viewport components
   */
  getViewportModule,
};

export default extension;