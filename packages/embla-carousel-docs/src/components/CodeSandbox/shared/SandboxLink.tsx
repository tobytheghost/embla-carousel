import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { plainButtonStyles } from 'components/Button'
import { contentLinkStyles } from 'components/Link'
import { useTabAccess } from 'hooks'
import { URLS } from 'consts'

const Submit = styled.button`
  ${plainButtonStyles};
  ${contentLinkStyles};
  padding: 0.6rem 0;
  display: block;
  line-height: 1.65;
`

export type PropType = {
  label: string
  sandbox: () => string
}

export const SandboxLink = (props: PropType) => {
  const [sandboxContent, setSandboxContent] = useState('')
  const { label, sandbox } = props
  const isTabbing = useTabAccess()
  const formRef = useRef<HTMLFormElement>(null)

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      if (!sandboxContent) {
        event.preventDefault()
        setSandboxContent(sandbox())
      }
    },
    [sandbox, sandboxContent],
  )

  useEffect(() => {
    if (sandboxContent) {
      formRef.current?.submit()
      setSandboxContent('')
    }
  }, [sandboxContent])

  return (
    <form
      ref={formRef}
      action={URLS.CODESANDBOX_DEFINE}
      onSubmit={onSubmit}
      method="POST"
      target="_blank"
    >
      <input type="hidden" name="parameters" value={sandboxContent} />
      <Submit $isTabbing={isTabbing} type="submit">
        {label}
      </Submit>
    </form>
  )
}
