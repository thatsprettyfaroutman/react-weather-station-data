import ReactDom from 'react-dom'
import React from 'react'
import Component from './Component'

const App = () => (
  <Component
    stationUrl={ process.env.STATION_URL }
  />
)

ReactDom.render(<App />, document.getElementById('root'))
