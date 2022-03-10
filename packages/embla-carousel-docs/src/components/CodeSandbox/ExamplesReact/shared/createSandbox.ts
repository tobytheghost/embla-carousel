import { EmblaOptionsType } from 'embla-carousel-react'
import { getParameters } from 'codesandbox/lib/api/define'
import { createIndexHtml } from '../shared/createIndexHtml'
import { createHeaderJs } from '../shared/createHeader'
import { createFooterJs } from '../shared/createFooterJs'
import { createEntryJs } from './createEntryJs'
import { defaultStyles } from 'components/CodeSandbox/ExamplesLocal/defaultStyles' // Move to SharedStyles?
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

const mediaJs: string = require('!!raw-loader!../../shared/media.js').default

export const createSandbox = (
  packageJson: PackageJsonType,
  customConfig: SandboxConfigType['files'],
  options: EmblaOptionsType = {},
  slideCount: number = 5,
): string => {
  const DEFAULT_CONFIG: SandboxConfigType['files'] = {
    'package.json': {
      isBinary: false,
      content: JSON.stringify(packageJson, null, '\t'),
    },
    'public/index.html': {
      isBinary: false,
      content: createIndexHtml(packageJson.name),
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
      content: createEntryJs(options, slideCount),
    },
    'src/js/Header.js': {
      isBinary: false,
      content: createHeaderJs(packageJson.name),
    },
    'src/js/Footer.js': {
      isBinary: false,
      content: createFooterJs(),
    },
    'src/js/media.js': {
      isBinary: false,
      content: mediaJs,
    },
  }

  return getParameters({
    files: Object.assign({}, DEFAULT_CONFIG, customConfig),
  })
}
