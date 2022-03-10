import { createPackageJson } from '../shared/createPackageJson'
import { createSandbox } from '../shared/createSandbox'

const CarouselJs: string = require('!!raw-loader!./Carousel.js').default
const packageJson = createPackageJson({ name: 'embla-carousel-react-default' })

export const sandbox = (): string =>
  createSandbox(packageJson, {
    'src/js/EmblaCarousel.js': {
      isBinary: false,
      content: CarouselJs,
    },
  })
