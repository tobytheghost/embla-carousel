import EmblaCarousel from 'embla-carousel'

function setupEmblaCarousel(options) {
  const wrap = document.querySelector('.embla')
  const viewPort = wrap.querySelector('.embla__viewport')
  const embla = EmblaCarousel(viewPort, options)
}

export default setupEmblaCarousel
