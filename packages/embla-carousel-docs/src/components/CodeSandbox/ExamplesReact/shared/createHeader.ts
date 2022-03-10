import { kebabCaseToPascalCase } from 'utils'

const headerJs: string = require('!!raw-loader!./Header.js').default

export const createHeaderJs = (title: string = ''): string => {
  const formattedTitle = kebabCaseToPascalCase(
    title.replace('embla-carousel-react-', ''),
    ' ',
  )
  return headerJs.replace('__REPLACE_HEADER_TITLE__', formattedTitle)
}
