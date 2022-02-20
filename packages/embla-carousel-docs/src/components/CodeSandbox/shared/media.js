const MEDIA_ROOT = `https://raw.githubusercontent.com/davidcetinkaya/embla-carousel/master/packages/embla-carousel-docs/src/assets/images`

const media = [
  `${MEDIA_ROOT}/slide-1.jpg`,
  `${MEDIA_ROOT}/slide-2.jpg`,
  `${MEDIA_ROOT}/slide-3.jpg`,
  `${MEDIA_ROOT}/slide-4.jpg`,
]

export const mediaByIndex = (index) => media[index % media.length]
