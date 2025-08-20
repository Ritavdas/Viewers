import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Icons, useModal } from '@ohif/ui-next';
import { useSystem } from '@ohif/core';
import { preserveQueryParameters } from '@ohif/app';
import { Types } from '@ohif/core';

// Import the logo asset
import somatiqLogo from './SOMATIQ.png';
// Import tool group components
import CenterToolGroup from './CenterToolGroup';

/**
 * SomatiqHeader - Custom header component based on Figma design
 *
 * This component provides complete control over the header layout
 * to match the exact Figma design with tool groups and Somatiq branding.
 */
function SomatiqHeader({ appConfig }) {
  const { servicesManager, extensionManager } = useSystem();
  const { customizationService } = servicesManager.services;

  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const { show } = useModal();

  const onClickReturnButton = () => {
    const { pathname } = location;
    const dataSourceIdx = pathname.indexOf('/', 1);

    const dataSourceName = pathname.substring(dataSourceIdx + 1);
    const existingDataSource = extensionManager.getDataSources(dataSourceName);

    const searchQuery = new URLSearchParams();
    if (dataSourceIdx !== -1 && existingDataSource) {
      searchQuery.append('datasources', pathname.substring(dataSourceIdx + 1));
    }
    preserveQueryParameters(searchQuery);

    navigate({
      pathname: '/',
      search: decodeURIComponent(searchQuery.toString()),
    });
  };

  const AboutModal = customizationService.getCustomization(
    'ohif.aboutModal'
  ) as Types.MenuComponentCustomization;

  const UserPreferencesModal = customizationService.getCustomization(
    'ohif.userPreferencesModal'
  ) as Types.MenuComponentCustomization;

  const menuOptions = [
    {
      title: AboutModal?.menuTitle ?? t('Header:About'),
      icon: 'info',
      onClick: () =>
        show({
          content: AboutModal,
          title: AboutModal?.title ?? t('AboutModal:About OHIF Viewer'),
          containerClassName: AboutModal?.containerClassName ?? 'max-w-md',
        }),
    },
    {
      title: UserPreferencesModal.menuTitle ?? t('Header:Preferences'),
      icon: 'settings',
      onClick: () =>
        show({
          content: UserPreferencesModal,
          title: UserPreferencesModal.title ?? t('UserPreferencesModal:User preferences'),
          containerClassName:
            UserPreferencesModal?.containerClassName ?? 'flex max-w-4xl p-6 flex-col',
        }),
    },
  ];

  if (appConfig.oidc) {
    menuOptions.push({
      title: t('Header:Logout'),
      icon: 'power-off',
      onClick: async () => {
        navigate(`/logout?redirect_uri=${encodeURIComponent(window.location.href)}`);
      },
    });
  }

  return (
    <div className="my-2 flex h-12 items-center border-b border-gray-800 bg-black px-4">
      {/* Left side: Return button + Somatiq Logo */}
      <div className="flex items-center gap-3">
        {/* Return button (if enabled) */}
        {appConfig.showStudyList && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClickReturnButton}
            className="h-8 w-8 text-white hover:bg-gray-800"
          >
            <Icons.ArrowLeft className="h-5 w-5" />
          </Button>
        )}

        {/* Somatiq Logo */}
        <div className="flex items-center">
          <img
            src={somatiqLogo}
            alt="SOMATIQ"
            className="h-14"
          />
        </div>
      </div>

      {/* Center: Tool Groups Container */}
      <div className="flex flex-1 justify-center">
        <CenterToolGroup />
      </div>

      {/* Right side: Menu and controls */}
      <div className="flex items-center gap-2">
        {/* Settings menu */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-white hover:bg-gray-800"
        >
          <Icons.GearSettings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default SomatiqHeader;
