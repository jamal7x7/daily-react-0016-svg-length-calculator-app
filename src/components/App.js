import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>SVG Length Calculator </h1>
  </header>
)

const SVGInput = () => (
  <div className='svg-input'>
    <div className='svg-input-wrap'>

      <textarea
        className='svg-input-txt'
        rows='28'
        placeholder='enter SVG here'
         />

    </div>
  </div>
)
const SVGDraw = () => (
  <div className='svg-draw'>

    <svg width='166' height='167' viewBox='0 0 166 167' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient x1='100%' y1='0%' x2='0%' y2='100%' id='linearGradient-1'>
          <stop stopColor='#DD8EDA' offset='0%' />
          <stop stopColor='#42A3F9' offset='100%' />
        </linearGradient>
      </defs>

      <path fill='none' d='M82,165.035021 C136.666667,115.226587 164,75.2265873 164,45.035021 C164,-22.4669922 82,-4.48148277 82,36.411952 C82,-4.83233805 0,-21.4541065 0,45.035021 C2.18112565e-15,75.2265873 27.3333333,115.226587 82,165.035021 Z'
        id='heart-bg' stroke='#FFF' opacity='0.15' />
      <path fill='none' d='M55.9092218,3.42928539 C31.902164,-5.5743908 0,3.56313561 0,45.035021 C0,75.2265873 27.3333333,115.226587 82,165.035021 C136.666667,115.226587 164,75.2265873 164,45.035021 C164,-22.4669922 82,-4.48148277 82,36.411952'
        id='heart-dr' stroke='url(#linearGradient-1)' />

    </svg>

    <input type='range' min='0' max='100' />

  </div>
)
const SVGLength = () => (
  <div className='svg-length'>

    <p> Length </p>
    <div className='svg-length-txt' > 678 </div>

  </div>
)

class SVGLengthCalculator extends Component {
  render () {
    return (
      <div className='cal'>

        <SVGInput />
        <SVGDraw />
        <SVGLength />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <SVGLengthCalculator />

  </div>
)

export default App
