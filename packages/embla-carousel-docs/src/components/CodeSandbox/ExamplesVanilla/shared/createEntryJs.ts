import { EmblaOptionsType } from 'embla-carousel-react'

const entryJs: string = require('!!raw-loader!./Entry.js').default

export const createEntryJs = (options: EmblaOptionsType = {}): string => {
  const formattedOptions = JSON.stringify(options, null, '\t')
  return entryJs.replace('__REPLACE_ENTRY_CAROUSEL_OPTIONS__', formattedOptions)
}
