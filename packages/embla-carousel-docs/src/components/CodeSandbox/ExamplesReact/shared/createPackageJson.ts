import docsPackageJson from '../../../../../package.json'
import { PackageJsonType } from 'components/CodeSandbox/shared/types'

const packageJsonTemplate: PackageJsonType = {
  name: '',
  version: '1.0.0',
  description: 'Embla Carousel React example',
  main: 'src/js/index.js',
  dependencies: {
    'embla-carousel-react': docsPackageJson.version,
    react: docsPackageJson.dependencies.react,
    'react-dom': docsPackageJson.dependencies['react-dom'],
    'react-scripts': '5.0.0',
  },
  devDependencies: {
    typescript: '3.3.3',
  },
  scripts: {
    start: 'react-scripts start',
    build: 'react-scripts build',
    test: 'react-scripts test --env=jsdom',
    eject: 'react-scripts eject',
  },
  browserslist: ['>0.2%', 'not dead', 'not ie <= 11', 'not op_mini all'],
}

export const createPackageJson = (
  customConfig: Record<string, unknown>,
): PackageJsonType => {
  return Object.assign({}, packageJsonTemplate, customConfig)
}
