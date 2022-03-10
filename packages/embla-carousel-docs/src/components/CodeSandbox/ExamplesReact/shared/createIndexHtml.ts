import { kebabCaseToPascalCase } from 'utils'

const indexHTML: string = require('!!raw-loader!./index.html').default

export const createIndexHtml = (title: string = ''): string => {
  const formattedTitle = kebabCaseToPascalCase(title, ' ')
  return indexHTML.replace('__REPLACE_HTML_TITLE__', formattedTitle)
}
