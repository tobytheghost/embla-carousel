import React from 'react'
import styled from 'styled-components'
import { IconWithText } from 'components/Icon'
import { plainButtonStyles } from 'components/Button'
import { contentLinkStyles } from 'components/Link'
import { useTabAccess } from 'hooks'
import { URLS } from 'consts'

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

const Sumbit = styled.input`
  ${plainButtonStyles};
  ${contentLinkStyles};
  padding: 0.6rem 0;
  display: block;
`

type PropType = {
  links: {
    label: string
    sandbox: string
  }[]
}

export const SandboxLinks = (props: PropType) => {
  const { links } = props
  const isTabbing = useTabAccess()

  return (
    <Wrapper>
      <Item>
        <IconWithText iconSvg="pen" iconSize="1.5rem">
          Edit code:
        </IconWithText>
        {links.map(({ label, sandbox }) => (
          <Item key={label}>
            <form
              action={URLS.CODESANDBOX_DEFINE}
              method="POST"
              target="_blank"
            >
              <input type="hidden" name="parameters" value={sandbox} />
              <Sumbit type="submit" value={label} $isTabbing={isTabbing} />
            </form>
          </Item>
        ))}
      </Item>
    </Wrapper>
  )
}
