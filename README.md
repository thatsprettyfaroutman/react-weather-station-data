# react-weather-station-data


### This package is for my personal project, you probably won't find it useful


#### Usage
```
  render(
    <ReactWeatherStationData
      stationUrl={ <URL> }
      ticking
    />
  )
```


#### Renders
Fragment of two divs
```
<>
  <div> /* empty when loading || rainIcon || snowIcon */ </div>
  <div> /* loadingContent || temperature + degreeCharacter */ </div>
</>
```


#### Props

| prop | default | description |
| ---- | ------- | :----------- |
| `stationUrl` | undefined (required) | Url to station data |
| `ticking` | `false` | Should the station data update. Updates every 30 mins |
| `degreeCharacter` | `'°'` | Degree character |
| `loadingContent` | `'Loading'` | Content when loading. Accepts component |
| `rainIcon` | `'Raining'` | Icon when raining. Accepts component |
| `snowIcon` | `'Snowing'` | Icon when snowing. Accepts component |
