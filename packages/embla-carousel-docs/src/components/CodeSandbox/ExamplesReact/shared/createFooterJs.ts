import { URLS } from 'consts'

const footerJs: string = require('!!raw-loader!./Footer.js').default

export const createFooterJs = (): string => {
  return footerJs.replace('__REPLACE_FOOTER_GITHUB_LINK__', URLS.GITHUB_ROOT)
}
