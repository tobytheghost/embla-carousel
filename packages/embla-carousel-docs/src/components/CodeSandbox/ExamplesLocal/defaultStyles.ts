import { LAYERS } from 'consts'

export const SLIDE_HEIGHT = '19rem'

export const defaultStyles = `
  .embla__viewport {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
  }

  .embla__slide {
    position: relative;
    flex: 0 0 100%;
    margin-left: 1rem;
  }

  .embla__slide__img {
    display: flex;
    object-fit: cover;
    width: 100%;
    height: ${SLIDE_HEIGHT};
  }

  .embla__slide__number {
    width: 4.6rem;
    height: 4.6rem;
    z-index: ${LAYERS.STEP};
    position: absolute;
    top: 0.8rem;
    right: 0.9rem;
    background-color: rgba(var(--background-site-rgb-value), 0.85);
    border-radius: 50%;
    line-height: 4.6rem;
    font-weight: 500;
    text-align: center;
    pointer-events: none;
  }

  .embla__slide__number > span {
    background-image: linear-gradient(
      45deg,
      var(--brand-primary),
      var(--brand-secondary)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
