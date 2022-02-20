import docsPackageJson from '../../../../../package.json'

const packageJsonTemplate = {
  name: '',
  version: '1.0.0',
  description: 'Embla Carousel React example',
  main: 'src/js/index.js',
  dependencies: {
    'embla-carousel-react': docsPackageJson.version,
    react: '17.0.2',
    'react-dom': '17.0.2',
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

export const createPackageJson = (customConfig: Record<string, unknown>) => {
  return Object.assign({}, packageJsonTemplate, customConfig)
}
