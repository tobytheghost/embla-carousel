import React from 'react'
import styled from 'styled-components'
import { IconWithText } from 'components/Icon'
import { PropType as SandboxLinkType, SandboxLink } from './SandboxLink'

// import { renderToStaticMarkup } from 'react-dom/server'
// import Carousel from '../ExamplesReact/Default/Carousel'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: -2.2rem;
  margin-bottom: 1.2rem;
  margin-left: -1.2rem;
`

const Item = styled.div`
  color: var(--text-low-contrast);
  display: flex;
  align-items: center;
  padding-left: 1.4rem;
  font-size: 1.4rem;
`

type PropType = {
  links: SandboxLinkType[]
}

export const SandboxLinks = (props: PropType) => {
  const { links } = props

  return (
    <Wrapper>
      <Item>
        <IconWithText iconSvg="pen" iconSize="1.5rem">
          Edit code:
        </IconWithText>
        {links.map(({ label, sandbox }) => (
          <Item key={label}>
            <SandboxLink sandbox={sandbox} label={label} />
          </Item>
        ))}
      </Item>
    </Wrapper>
  )
}
