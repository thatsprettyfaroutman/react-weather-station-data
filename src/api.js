export function getStationData(stationUrl) {
  if (!stationUrl) {
    return Promise.reject('getStationData `stationUrl` not defined')
  }

  return fetch(stationUrl)
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Couldn\'t fetch weather data')
      }
      return res.json()
    })
    .then(json => {
      if (!json) {
        throw new Error('No weather data (json)')
      }

      const {
        t2m: tempData,
        Precipitation1h: rainData,
      } = json

      if (!Array.isArray(tempData) || !Array.isArray(rainData)) {
        throw new Error('Faulty weather data')
      }

      const temp = Math.round(tempData.pop().pop())
      const rain = rainData.pop().pop() > 0

      return {
        temp,
        rain,
      }
    })
}
