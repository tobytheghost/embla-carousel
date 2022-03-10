import docsPackageJson from '../../../../../package.json'
import { PackageJsonType } from 'components/CodeSandbox/shared/types'

const packageJsonTemplate: PackageJsonType = {
  name: '',
  version: '1.0.0',
  description: 'Embla Carousel Vanilla example',
  main: 'index.html',
  scripts: {
    start: 'parcel index.html --open',
    build: 'parcel build index.html',
  },
  dependencies: {
    'embla-carousel': docsPackageJson.version,
  },
  devDependencies: {
    '@babel/core': '7.2.0',
    'parcel-bundler': '^1.6.1',
  },
}

export const createPackageJson = (
  customConfig: Record<string, unknown>,
): PackageJsonType => {
  return Object.assign({}, packageJsonTemplate, customConfig)
}
