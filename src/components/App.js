import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>SVG Length Calculator </h1>
  </header>
)

class SVGLengthCalculator extends Component {
  render () {
    return (
      <div className='cal'>

       hello

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
