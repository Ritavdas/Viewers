# Somatiq Redesigned Extension

This project includes a custom OHIF extension with Somatiq branding and redesigned UI components, implemented as a separate extension to maintain compatibility with the core OHIF system.

### Custom Implementation Overview

The Somatiq redesigned interface has been implemented as a self-contained extension located at:

```
extensions/somatiq-redesigned/
```

This approach ensures:

- **Non-invasive integration**: Core OHIF files remain untouched
- **Easy maintenance**: All customizations are contained in one extension
- **Version compatibility**: Updates to OHIF core won't break custom features
- **Modular design**: Can be easily enabled/disabled or deployed separately

### Key Components & Architecture

#### Project Structure

- **Worklist**: Main page (`Viewers/platform/app/src/routes/WorkList/WorkList.tsx`)
- **StudyListTable**: List of rows with study data
- **expandedContent**: Contains detailed row content and action buttons
- **tableDataSource**: Data management for the worklist table
- **Main viewer mode**: `Viewers/modes/longitudinal/src/index.ts`
- **Viewer layout**: `Viewers/extensions/default/src/ViewerLayout/index.tsx`

#### Custom UI Components

**1. CenterToolGroup** (`src/Components/CenterToolGroup.tsx`)

- 12-tool horizontal toolbar with Somatiq branding
- Custom icons for all tools (zoom, pan, measurement tools, etc.)
- OHIF command integration for full functionality
- Glass morphism styling with backdrop blur effects

**2. MeasurementToolsDropdown** (`src/Components/MeasurementToolsDropdown.tsx`)

- Smart dropdown with click position detection
- Dynamic primary tool switching based on active measurement tool
- Portal-based rendering for proper z-index management
- 9 measurement tools: Length, Bidirectional, Arrow Annotate, Ellipse ROI, Rectangle ROI, Circle ROI, Freehand ROI, Spline ROI, Livewire
- Custom rectangle indicator for dropdown trigger

**3. LayoutDropdown** (`src/Components/LayoutDropdown.tsx`)

- Full OHIF LayoutSelector functionality with custom Somatiq icon
- Common presets (1x1, 1x2, 2x2, 3x1 layouts)
- Advanced presets (MPR, 3D views, hanging protocols)
- Interactive 3x4 grid selector for custom layouts
- Handles both `setViewportGridLayout` and `setHangingProtocol` commands

**4. ToolButton** (`src/Components/ToolButton.tsx`)

- Base button component with Figma design specifications
- 24x24px sizing with hover and active states
- Glass morphism active state with blue accent colors
- Smooth transitions and scale effects

**5. ToolGroup** (`src/Components/ToolGroup.tsx`)

- Container component for horizontal tool arrangement
- Flexbox layout with proper spacing and alignment

### Technical Implementation Details

#### Icon Integration

- All custom icons stored in `assets/` directory
- PNG format for consistent rendering across different displays
- Proper alt text and accessibility considerations
- Dynamic icon switching for measurement tools based on active state

#### OHIF Integration

- Uses OHIF's `useSystem` and `useToolbar` hooks for state management
- Proper command integration via `commandsManager.run()`
- Toolbar section management ('primary' vs 'MeasurementTools')
- Full compatibility with OHIF's tool lifecycle and evaluation system

#### Styling Approach

- **Glass morphism design**: Backdrop blur effects, semi-transparent backgrounds
- **Consistent spacing**: 4px gaps between tools as per Figma specifications  
- **Hover effects**: Scale transforms and opacity changes for visual feedback
- **Active states**: Blue accent colors with border and shadow effects
- **Responsive design**: Proper sizing and alignment across different screen sizes

#### State Management

- Real-time tool state detection using OHIF toolbar services
- Dynamic UI updates based on active measurement tools
- Proper cleanup and event handling for dropdown interactions
- Portal-based rendering for complex dropdowns to avoid z-index conflicts

### Features Implemented

1. **Smart Measurement Tool Dropdown**
   - Primary tool icon changes based on active measurement tool
   - Click position detection (left 75% activates tool, right 25% opens dropdown)
   - Portal-based dropdown with all 9 measurement tools
   - Proper active state indicators

2. **Full Layout Selector**
   - Custom trigger with Somatiq change layout icon
   - Complete OHIF LayoutSelector functionality
   - Common and advanced preset options
   - Interactive grid selector for custom layouts

3. **Complete Tool Integration**
   - All 12 tools with proper OHIF command integration
   - Zoom, Pan, Window Level, Capture, Flip Horizontal tools
   - Image Slice Sync, Invert, Angle, 3D, DICOM Tag Browser
   - Proper active state detection and visual feedback

4. **Custom Styling System**
   - Glass morphism effects throughout
   - Consistent color scheme with blue accents
   - Smooth animations and transitions
   - Professional medical imaging interface appearance

### Getting Started with Somatiq Redesigned Extension

#### Prerequisites

- [Node.js 18+](https://nodejs.org/en/)
- [Yarn 1.20.0+](https://yarnpkg.com/en/docs/install)
- Yarn Workspaces enabled: `yarn config set workspaces-experimental true`

#### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/Viewers.git
   cd Viewers
   ```

2. **Install dependencies**

   ```bash
   # Enable Yarn Workspaces (if not already done)
   yarn config set workspaces-experimental true
   
   # Install all dependencies
   yarn install
   ```

3. **Start development server**

   ```bash
   # Standard development mode
   yarn dev
   
   # Or use fast development mode (experimental)
   yarn dev:fast
   ```

4. **Access the application**
   - Open your browser to `http://localhost:3000`
   - The Somatiq redesigned extension will be automatically loaded
   - Custom toolbar with Somatiq branding will replace the default OHIF toolbar

#### Available Commands

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn dev:fast` | Experimental fast development mode using rsbuild |
| `yarn build` | Build production version |
| `yarn test:unit` | Run unit tests |

#### Development Workflow

1. **Making Changes to Somatiq Components**
   - All custom components are in `extensions/somatiq-redesigned/src/Components/`
   - Changes are automatically reflected with hot reload
   - No need to restart the development server

2. **Adding New Icons**
   - Place new PNG icons in `extensions/somatiq-redesigned/assets/`
   - Import them in the respective component files
   - Follow the existing naming convention

3. **Modifying Tool Functionality**
   - Tool behaviors are defined in `CenterToolGroup.tsx`
   - Use OHIF's `commandsManager.run()` for tool actions
   - Refer to existing implementations for patterns

### Installation & Usage

The Somatiq redesigned extension is automatically loaded when running the OHIF viewer. The custom toolbar components replace the default OHIF toolbar while maintaining full functionality and compatibility with the core system.

**Key Development Files:**

```
extensions/somatiq-redesigned/src/
├── Components/
│   ├── CenterToolGroup.tsx      # Main toolbar with 12 tools
│   ├── MeasurementToolsDropdown.tsx  # Smart measurement dropdown
│   ├── LayoutDropdown.tsx       # Layout selector with custom icon
│   ├── ToolButton.tsx           # Base button component
│   └── ToolGroup.tsx            # Container component
├── assets/                      # Custom Somatiq icons (PNG format)
└── index.tsx                    # Extension entry point
```

This modular approach ensures that customizations remain separate from core OHIF functionality and can be easily maintained or updated independently.

---
<!-- prettier-ignore-start -->
<div align="center">
  <h1>OHIF Medical Imaging Viewer</h1>
  <p><strong>The OHIF Viewer</strong> is a zero-footprint medical image viewer
provided by the <a href="https://ohif.org/">Open Health Imaging Foundation (OHIF)</a>. It is a configurable and extensible progressive web application with out-of-the-box support for image archives which support <a href="https://www.dicomstandard.org/using/dicomweb/">DICOMweb</a>.</p>
</div>

<div align="center">
  <a href="https://docs.ohif.org/"><strong>Read The Docs</strong></a>
</div>
<div align="center">
  <a href="https://viewer.ohif.org/">Live Demo</a> |
  <a href="https://ui.ohif.org/">Component Library</a>
</div>
<div align="center">
  📰 <a href="https://ohif.org/news/"><strong>Join OHIF Newsletter</strong></a> 📰
</div>
<div align="center">
  📰 <a href="https://ohif.org/news/"><strong>Join OHIF Newsletter</strong></a> 📰
</div>

<hr />

[![NPM version][npm-version-image]][npm-url]
[![MIT License][license-image]][license-url]
[![This project is using Percy.io for visual regression testing.][percy-image]](percy-url)
<!-- [![NPM downloads][npm-downloads-image]][npm-url] -->
<!-- [![Pulls][docker-pulls-img]][docker-image-url] -->
<!-- [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FOHIF%2FViewers.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FOHIF%2FViewers?ref=badge_shield) -->

<!-- [![Netlify Status][netlify-image]][netlify-url] -->
<!-- [![CircleCI][circleci-image]][circleci-url] -->
<!-- [![codecov][codecov-image]][codecov-url] -->
<!-- [![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors) -->
<!-- prettier-ignore-end -->

|     |  | |
| :-: | :---  | :--- |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-measurements.webp?raw=true" alt="Measurement tracking" width="350"/> | Measurement Tracking | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=1.3.6.1.4.1.25403.345050719074.3824.20170125095438.5) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-segmentation.webp?raw=true" alt="Segmentations" width="350"/> | Labelmap Segmentations  | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=1.3.12.2.1107.5.2.32.35162.30000015050317233592200000046) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-ptct.webp?raw=true" alt="Hanging Protocols" width="350"/> | Fusion and Custom Hanging protocols  | [Demo](https://viewer.ohif.org/tmtv?StudyInstanceUIDs=1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-volume-rendering.webp?raw=true" alt="Volume Rendering" width="350"/> | Volume Rendering  | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=1.3.6.1.4.1.25403.345050719074.3824.20170125095438.5&hangingprotocolId=mprAnd3DVolumeViewport) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-pdf.webp?raw=true" alt="PDF" width="350"/> | PDF  | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=2.25.317377619501274872606137091638706705333) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-rtstruct.webp?raw=true" alt="RTSTRUCT" width="350"/> | RT STRUCT  | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=1.3.6.1.4.1.5962.99.1.2968617883.1314880426.1493322302363.3.0) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-4d.webp?raw=true" alt="4D" width="350"/> | 4D  | [Demo](https://viewer.ohif.org/dynamic-volume?StudyInstanceUIDs=2.25.232704420736447710317909004159492840763) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-video.webp?raw=true" alt="VIDEO" width="350"/> | Video  | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=2.25.96975534054447904995905761963464388233) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/microscopy.webp?raw=true" alt="microscopy" width="350"/> | Slide Microscopy  | [Demo](https://viewer.ohif.org/microscopy?StudyInstanceUIDs=2.25.141277760791347900862109212450152067508) |

## About

The OHIF Viewer can retrieve
and load images from most sources and formats; render sets in 2D, 3D, and
reconstructed representations; allows for the manipulation, annotation, and
serialization of observations; supports internationalization, OpenID Connect,
offline use, hotkeys, and many more features.

Almost everything offers some degree of customization and configuration. If it
doesn't support something you need, we accept pull requests and have an ever
improving Extension System.

## Why Choose Us

### Community & Experience

The OHIF Viewer is a collaborative effort that has served as the basis for many
active, production, and FDA Cleared medical imaging viewers. It benefits from
our extensive community's collective experience, and from the sponsored
contributions of individuals, research groups, and commercial organizations.

### Built to Adapt

After more than 8-years of integrating with many companies and organizations,
The OHIF Viewer has been rebuilt from the ground up to better address the
varying workflow and configuration needs of its many users. All of the Viewer's
core features are built using it's own extension system. The same extensibility
that allows us to offer:

- 2D and 3D medical image viewing
- Multiplanar Reconstruction (MPR)
- Maximum Intensity Project (MIP)
- Whole slide microscopy viewing
- PDF and Dicom Structured Report rendering
- Segmentation rendering as labelmaps and contours
- User Access Control (UAC)
- Context specific toolbar and side panel content
- and many others

Can be leveraged by you to customize the viewer for your workflow, and to add
any new functionality you may need (and wish to maintain privately without
forking).

### Support

- [Report a Bug 🐛](https://github.com/OHIF/Viewers/issues/new?assignees=&labels=Community%3A+Report+%3Abug%3A%2CAwaiting+Reproduction&projects=&template=bug-report.yml&title=%5BBug%5D+)
- [Request a Feature 🚀](https://github.com/OHIF/Viewers/issues/new?assignees=&labels=Community%3A+Request+%3Ahand%3A&projects=&template=feature-request.yml&title=%5BFeature+Request%5D+)
- [Ask a Question 🤗](community.ohif.org)
- [Slack Channel](https://join.slack.com/t/cornerstonejs/shared_invite/zt-1r8xb2zau-dOxlD6jit3TN0Uwf928w9Q)

For commercial support, academic collaborations, and answers to common
questions; please use [Get Support](https://ohif.org/get-support/) to contact
us.

## Developing

### Branches

#### `master` branch - The latest dev (beta) release

- `master` - The latest dev release

This is typically where the latest development happens. Code that is in the master branch has passed code reviews and automated tests, but it may not be deemed ready for production. This branch usually contains the most recent changes and features being worked on by the development team. It's often the starting point for creating feature branches (where new features are developed) and hotfix branches (for urgent fixes).

Each package is tagged with beta version numbers, and published to npm such as `@ohif/ui@3.6.0-beta.1`

### `release/*` branches - The latest stable releases

Once the `master` branch code reaches a stable, release-ready state, we conduct a comprehensive code review and QA testing. Upon approval, we create a new release branch from `master`. These branches represent the latest stable version considered ready for production.

For example, `release/3.5` is the branch for version 3.5.0, and `release/3.6` is for version 3.6.0. After each release, we wait a few days to ensure no critical bugs. If any are found, we fix them in the release branch and create a new release with a minor version bump, e.g., 3.5.1 in the `release/3.5` branch.

Each package is tagged with version numbers and published to npm, such as `@ohif/ui@3.5.0`. Note that `master` is always ahead of the `release` branch. We publish docker builds for both beta and stable releases.

Here is a schematic representation of our development workflow:

![alt text](platform/docs/docs/assets/img/github-readme-branches-Jun2024.png)

### Requirements

- [Yarn 1.20.0+](https://yarnpkg.com/en/docs/install)
- [Node 18+](https://nodejs.org/en/)
- Yarn Workspaces should be enabled on your machine:
  - `yarn config set workspaces-experimental true`

### Getting Started

1. [Fork this repository][how-to-fork]
2. [Clone your forked repository][how-to-clone]
   - `git clone https://github.com/YOUR-USERNAME/Viewers.git`
3. Navigate to the cloned project's directory
4. Add this repo as a `remote` named `upstream`
   - `git remote add upstream https://github.com/OHIF/Viewers.git`
5. `yarn install` to restore dependencies and link projects

#### To Develop

_From this repository's root directory:_

```bash
# Enable Yarn Workspaces
yarn config set workspaces-experimental true

# Restore dependencies
yarn install
```

## Commands

These commands are available from the root directory. Each project directory
also supports a number of commands that can be found in their respective
`README.md` and `package.json` files.

| Yarn Commands                | Description                                                   |
| ---------------------------- | ------------------------------------------------------------- |
| **Develop**                  |                                                               |
| `dev`              | Default development experience for Viewer                     |
| `dev:fast`             | Our experimental fast dev mode that uses rsbuild instead of webpack                     |
| `test:unit`                  | Jest multi-project test runner; overall coverage              |
| **Deploy**                   |                                                               |
| `build`\*                    | Builds production output for our PWA Viewer                   |  |

\* - For more information on different builds, check out our [Deploy
Docs][deployment-docs]

## Project

The OHIF Medical Image Viewing Platform is maintained as a
[`monorepo`][monorepo]. This means that this repository, instead of containing a
single project, contains many projects. If you explore our project structure,
you'll see the following:

```bash
.
├── extensions               #
│   ├── _example             # Skeleton of example extension
│   ├── default              # basic set of useful functionalities (datasources, panels, etc)
│   ├── cornerstone       # image rendering and tools w/ Cornerstone3D
│   ├── cornerstone-dicom-sr # DICOM Structured Report rendering and export
│   ├── cornerstone-dicom-sr # DICOM Structured Report rendering and export
│   ├── cornerstone-dicom-seg # DICOM Segmentation rendering and export
│   ├── cornerstone-dicom-rt # DICOM RTSTRUCT rendering
│   ├── cornerstone-microscopy # Whole Slide Microscopy rendering
│   ├── dicom-pdf # PDF rendering
│   ├── dicom-video # DICOM RESTful Services
│   ├── measurement-tracking # Longitudinal measurement tracking
│   ├── tmtv # Total Metabolic Tumor Volume (TMTV) calculation
|

│
├── modes                    #
│   ├── _example             # Skeleton of example mode
│   ├── basic-dev-mode       # Basic development mode
│   ├── longitudinal         # Longitudinal mode (measurement tracking)
│   ├── tmtv       # Total Metabolic Tumor Volume (TMTV) calculation mode
│   └── microscopy          # Whole Slide Microscopy mode
│
├── platform                 #
│   ├── core                 # Business Logic
│   ├── i18n                 # Internationalization Support
│   ├── ui                   # React component library
│   ├── docs                 # Documentation
│   └── viewer               # Connects platform and extension projects
│
├── ...                      # misc. shared configuration
├── lerna.json               # MonoRepo (Lerna) settings
├── package.json             # Shared devDependencies and commands
└── README.md                # This file
```

## Acknowledgments

To acknowledge the OHIF Viewer in an academic publication, please cite

> _Open Health Imaging Foundation Viewer: An Extensible Open-Source Framework
> for Building Web-Based Imaging Applications to Support Cancer Research_
>
> Erik Ziegler, Trinity Urban, Danny Brown, James Petts, Steve D. Pieper, Rob
> Lewis, Chris Hafey, and Gordon J. Harris
>
> _JCO Clinical Cancer Informatics_, no. 4 (2020), 336-345, DOI:
> [10.1200/CCI.19.00131](https://www.doi.org/10.1200/CCI.19.00131)
>
> Open-Access on Pubmed Central:
> <https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7259879/>

or, for v1, please cite:

> _LesionTracker: Extensible Open-Source Zero-Footprint Web Viewer for Cancer
> Imaging Research and Clinical Trials_
>
> Trinity Urban, Erik Ziegler, Rob Lewis, Chris Hafey, Cheryl Sadow, Annick D.
> Van den Abbeele and Gordon J. Harris
>
> _Cancer Research_, November 1 2017 (77) (21) e119-e122 DOI:
> [10.1158/0008-5472.CAN-17-0334](https://www.doi.org/10.1158/0008-5472.CAN-17-0334)

**Note:** If you use or find this repository helpful, please take the time to
star this repository on GitHub. This is an easy way for us to assess adoption
and it can help us obtain future funding for the project.

This work is supported primarily by the National Institutes of Health, National
Cancer Institute, Informatics Technology for Cancer Research (ITCR) program,
under a
[grant to Dr. Gordon Harris at Massachusetts General Hospital (U24 CA199460)](https://projectreporter.nih.gov/project_info_description.cfm?aid=8971104).

[NCI Imaging Data Commons (IDC) project](https://imaging.datacommons.cancer.gov/) supported the development of new features and bug fixes marked with ["IDC:priority"](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Apriority),
["IDC:candidate"](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Acandidate) or ["IDC:collaboration"](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Acollaboration). NCI Imaging Data Commons is supported by contract number 19X037Q from
Leidos Biomedical Research under Task Order HHSN26100071 from NCI. [IDC Viewer](https://learn.canceridc.dev/portal/visualization) is a customized version of the OHIF Viewer.

This project is tested with BrowserStack. Thank you for supporting open-source!

## License

MIT © [OHIF](https://github.com/OHIF)

<!--
  Links
  -->

<!-- prettier-ignore-start -->
<!-- Badges -->
<!-- ROW -->
[npm-url]: https://npmjs.org/package/@ohif/app
[npm-version-image]: https://img.shields.io/npm/v/@ohif/app.svg?style=flat-square
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE
[percy-image]: https://percy.io/static/images/percy-badge.svg
<!-- Links -->
[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[how-to-fork]: https://help.github.com/en/articles/fork-a-repo
[how-to-clone]: https://help.github.com/en/articles/fork-a-repo#step-2-create-a-local-clone-of-your-fork
[deployment-docs]: https://docs.ohif.org/deployment/
<!-- Platform -->
<!-- Extensions -->
<!-- prettier-ignore-end -->

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FOHIF%2FViewers.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2FOHIF%2FViewers?ref=badge_large&issueType=license)
