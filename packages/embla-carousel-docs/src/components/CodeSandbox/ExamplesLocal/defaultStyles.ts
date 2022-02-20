import { css } from 'styled-components'
import { LAYERS } from 'consts'
import { createSquareSizeStyles, gradientTextStyles } from 'utils'

const ITEM_SPACING = '1rem'

export const defaultStyles = css`
  .embla {
    height: 100%;
  }

  .embla__viewport {
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  .embla__container {
    height: 100%;
    display: flex;
  }

  .embla__slide {
    position: relative;
    height: 100%;
    flex: 0 0 100%;
    margin-left: ${ITEM_SPACING};
  }

  .embla__slide__img {
    height: 100%;
    display: flex;
    object-fit: cover;
    width: 100%;
  }

  .embla__slide__number {
    ${createSquareSizeStyles('4.6rem')};
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

    > span {
      ${gradientTextStyles};
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`
