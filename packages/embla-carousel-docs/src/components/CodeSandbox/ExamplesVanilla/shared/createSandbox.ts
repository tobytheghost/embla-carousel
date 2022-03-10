import { EmblaOptionsType } from 'embla-carousel-react'
import { getParameters } from 'codesandbox/lib/api/define'
import { defaultStyles } from 'components/CodeSandbox/ExamplesLocal/defaultStyles'
import { createEntryJs } from '../shared/createEntryJs'
import {
  baseStyles,
  resetStyles,
  headerStyles,
  footerStyles,
  sandboxStyles,
} from '../../shared/SharedStyles'
import {
  PackageJsonType,
  SandboxConfigType,
} from 'components/CodeSandbox/shared/types'

const CarouselJs: string =
  require('!!raw-loader!../Default/Carousel.js').default

export const createSandbox = (
  packageJson: PackageJsonType,
  customConfig: SandboxConfigType['files'],
  options: EmblaOptionsType = {},
): string => {
  const DEFAULT_CONFIG: SandboxConfigType['files'] = {
    'package.json': {
      isBinary: false,
      content: JSON.stringify(packageJson, null, '\t'),
    },
    'src/css/reset.css': {
      isBinary: false,
      content: resetStyles,
    },
    'src/css/base.css': {
      isBinary: false,
      content: baseStyles + sandboxStyles + headerStyles + footerStyles,
    },
    'src/css/embla.css': {
      isBinary: false,
      content: defaultStyles,
    },
    'src/js/index.js': {
      isBinary: false,
      content: createEntryJs(options),
    },
    'src/js/setupEmblaCarousel.js': {
      isBinary: false,
      content: CarouselJs,
    },
  }

  return getParameters({
    files: Object.assign({}, DEFAULT_CONFIG, customConfig),
  })
}
