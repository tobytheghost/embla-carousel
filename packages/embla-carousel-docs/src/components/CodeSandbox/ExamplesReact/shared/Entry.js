import React from 'react'
import ReactDOM from 'react-dom'
import EmblaCarousel from './EmblaCarousel'
import Header from './Header'
import Footer from './Footer'
import '../css/reset.css'
import '../css/base.css'
import '../css/embla.css'

const CAROUSEL_OPTIONS = __REPLACE_ENTRY_CAROUSEL_OPTIONS__
const SLIDE_COUNT = __REPLACE_ENTRY_SLIDE_COUNT__
const slides = Array.from(Array(SLIDE_COUNT).keys())

const App = () => (
  <main className="sandbox">
    <Header />
    <div className="sandbox__carousel">
      <EmblaCarousel options={CAROUSEL_OPTIONS} slides={slides} />
    </div>
    <Footer />
  </main>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
