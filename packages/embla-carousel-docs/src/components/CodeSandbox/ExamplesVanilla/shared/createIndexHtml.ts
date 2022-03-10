import { kebabCaseToPascalCase } from 'utils'

const indexHTML: string = require('!!raw-loader!./index.html').default

export const createIndexHtml = (
  title: string = '',
  carouselContent: string = '',
): string => {
  const htmlTitle = kebabCaseToPascalCase(title, ' ')
  const sandboxTitle = kebabCaseToPascalCase(
    title.replace('embla-carousel-vanilla-', ''),
    ' ',
  )
  return indexHTML
    .replace('__REPLACE_HTML_TITLE__', htmlTitle)
    .replace('__REPLACE_HTML_SANDBOX_TITLE__', sandboxTitle)
    .replace('__REPLACE_HTML_SANDBOX_CONTENT__', carouselContent)
}
