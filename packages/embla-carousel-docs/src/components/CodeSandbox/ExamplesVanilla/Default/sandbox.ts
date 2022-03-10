import { createPackageJson } from '../shared/createPackageJson'
import { renderToStaticMarkup } from 'react-dom/server'
import { createSandbox } from '../shared/createSandbox'
import { createIndexHtml } from '../shared/createIndexHtml'
import EmblaCarousel from '../../ExamplesReact/Default/Carousel'

const packageJson = createPackageJson({
  name: 'embla-carousel-vanilla-default',
})

export const sandbox = (): string =>
  createSandbox(packageJson, {
    'index.html': {
      isBinary: false,
      content: '',
      // createIndexHtml(
      //   packageJson.name,
      //   renderToStaticMarkup(
      //     EmblaCarousel({ options: {}, slides: [0, 1, 2, 3, 4] }),
      //   ),
      // ),
    },
  })
