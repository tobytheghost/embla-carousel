import { getParameters } from 'codesandbox/lib/api/define'
import { createPackageJson } from '../shared/createPackageJson'
import { createIndexHtml } from '../shared/createIndexHtml'
import { URLS } from 'consts'
import {
  baseStyles,
  resetStyles,
  headerStyles,
  footerStyles,
} from '../../shared/SharedStyles'

const packageJson = createPackageJson({ name: 'embla-carousel-react-default' })

export const sandbox = getParameters({
  files: {
    'package.json': {
      isBinary: false,
      content: JSON.stringify(packageJson),
    },
    'public/index.html': {
      isBinary: false,
      content: createIndexHtml(packageJson.name),
    },
    'src/css/base.css': {
      isBinary: false,
      content: baseStyles,
    },
    'src/css/reset.css': {
      isBinary: false,
      content: resetStyles,
    },
    'src/css/header.css': {
      isBinary: false,
      content: headerStyles,
    },
    'src/css/footer.css': {
      isBinary: false,
      content: footerStyles,
    },
    'src/js/settings.js': {
      isBinary: true,
      content: `${URLS.GITHUB_ROOT_RAW}/src/components/CodeSandbox/shared/settings.js`,
    },
    'src/js/media.js': {
      isBinary: true,
      content: `${URLS.GITHUB_ROOT_RAW}/src/components/CodeSandbox/shared/media.js`,
    },
    'src/js/index.js': {
      isBinary: true,
      content: `${URLS.GITHUB_ROOT_RAW}/src/components/CodeSandbox/ExamplesReact/shared/Entry.js`,
    },
    'src/js/Header.js': {
      isBinary: true,
      content: `${URLS.GITHUB_ROOT_RAW}/src/components/CodeSandbox/ExamplesReact/shared/Header.js`,
    },
    'src/js/Footer.js': {
      isBinary: true,
      content: `${URLS.GITHUB_ROOT_RAW}/src/components/CodeSandbox/ExamplesReact/shared/Footer.js`,
    },
    'src/js/EmblaCarousel.js': {
      isBinary: true,
      content: `${URLS.GITHUB_ROOT_RAW}/src/components/CodeSandbox/ExamplesReact/Default/Carousel.js`,
    },
  },
})
