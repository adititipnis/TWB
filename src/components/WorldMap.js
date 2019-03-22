
import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import geoData from '../static/world-110m.json'

const markers = [
  { markerOffset: -25, name: "Canada", coordinates: [-106.3468, 56.1304] },
  { markerOffset: -25, name: "United States", coordinates: [-118.2437, 34.0522] },
  { markerOffset: 35, name: "Sweden", coordinates: [18.6435, 60.1282] },
  { markerOffset: 35, name: "France", coordinates: [2.2137, 46.2276] },
  { markerOffset: 35, name: "United Kingdom", coordinates: [-3.4360, 55.3781] },
  { markerOffset: 35, name: "Italy", coordinates: [12.5674, 41.8719] },
  { markerOffset: -25, name: "Germany", coordinates: [10.4515, 51.1657] },
  { markerOffset: -25, name: "Russia", coordinates: [105.3188, 61.5240] },
  { markerOffset: 35, name: "Delhi", coordinates: [77.1025, 28.7041] },
  { markerOffset: 35, name: "Mumbai", coordinates: [72.8777, 19.0760] },
  { markerOffset: -25, name: "Iran", coordinates: [53.6880, 32.4279] },
]

class WorldMap extends Component {
  render() {
    return (
      <div className="clientsMap">
      <h2 style={{color:"#fff", textAlign: "center"}}>Client Map</h2>
        <ComposableMap
          projection="times"
          projectionConfig={{
            scale: 200,
            rotation: [0,0,0],
          }}
          width={1000}
          height={550}
          style={{
            width: "80%",
            height: "auto",
            backgroundColor: '#222'
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography={geoData}>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: "#333",
                      stroke: "#444",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#222",
                      stroke: "#444",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#111",
                      stroke: "#444",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
            <Markers>
              {markers.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { fill: "#f01" },
                    hover: { fill: "#633" },
                    pressed: { fill: "#633" },
                  }}
                  >
                  <circle
                    cx={0}
                    cy={0}
                    r={5}
                    style={{
                      stroke: "#FF5722",
                      strokeWidth: 3,
                      opacity: 0.9,
                    }}
                  />
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default WorldMap
