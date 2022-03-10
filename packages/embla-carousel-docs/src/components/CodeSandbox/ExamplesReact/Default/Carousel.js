import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import mediaByIndex from './media'

const EmblaCarousel = ({ options, slides }) => {
  const [viewportRef] = useEmblaCarousel(options)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img"
                src={mediaByIndex(index)}
                alt="A cool cat."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
