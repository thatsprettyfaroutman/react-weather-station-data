import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { getStationData } from './api'


export default class ReactWeatherStationData extends Component {
  static defaultProps = {
    ticking: false,
    degreeCharacter: '°',
    loadingContent: 'Loading',
    rainIcon: 'Raining',
    snowIcon: 'Snowing',
  }

  static propTypes = {
    stationUrl: PropTypes.string.isRequired,
    ticking: PropTypes.bool,
    degreeCharacter: PropTypes.string,
    loadingContent: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ]),
    rainIcon: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ]),
    snowIcon: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ]),
  }

  state = {
    rain: undefined,
    temp: undefined,
  }
  mounted = false
  tickInterval = null

  componentDidMount() {
    this.mounted = true
    this.updateStationData()
    if ( this.props.ticking ) {
      this.setInterval(this.updateStationData, 30 * 60000 )
    }
  }

  componentWillUnmount() {
    this.mounted = false
    clearInterval( this.tickInterval )
    this.tickInterval = null
  }

  updateStationData = () => {
    const { stationUrl } = this.props
    getStationData( stationUrl )
      .then(({ rain, temp }) => {
        if ( this.mounted ) this.setState({ rain, temp })
      })
      .catch(error => {
        console.warn(error)
      })
  }

  render() {
    const { rain, temp } = this.state
    const {
      degreeCharacter,
      loadingContent,
      rainIcon,
      snowIcon,
    } = this.props

    if ( typeof temp === 'undefined' ) {
      return (
        <Fragment>
          <div></div>
          <div>{ loadingContent }</div>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <div>{ rain ? temp < 1 ? snowIcon : rainIcon : null }</div>
        <div>{ temp }{ degreeCharacter }</div>
      </Fragment>
    )
  }
}
