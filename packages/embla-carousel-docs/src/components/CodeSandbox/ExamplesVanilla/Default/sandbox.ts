import { createPackageJson } from '../shared/createPackageJson'
import { createSandbox } from '../shared/createSandbox'

const packageJson = createPackageJson({
  name: 'embla-carousel-vanilla-default',
})

export const sandbox = (): string =>
  createSandbox(packageJson, {
    'index.html': {
      isBinary: false,
      content: '',
    },
  })
