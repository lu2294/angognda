import React, { Component } from 'react'
// import { center, zoom, CRS, clusterMaxZoom, clusterMinZoom} from 'config/defaultValue.config'

const L = window.L
class ZMap extends Component {
    componentDidMount() {
        this.initMainMap()
    }
    initMainMap() {
      const map = L.map('mainmap').setView([31.67, 118.55], 13);
      var baseLayers = {
        "高德地图": L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
            subdomains: "1234"
        }).addTo(map),
        '高德影像': L.layerGroup([L.tileLayer('http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
            subdomains: "1234"
        }), L.tileLayer('http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}', {
            subdomains: "1234"
        })]),
        "天地图": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            key: 'BC9A493B41014CAABB98F0471D759707',
            styleId: 22677
        }),
        'GeoQ灰色底图': L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}')
    };
    var layercontrol = L.control.layers(baseLayers,{}, {
      position: "topright"
  }).addTo(map);
//   map.setView([51.508, 0.11], 18);
//   var circle = L.circle([51.508, 0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);


L.marker([31.67, 118.55]).addTo(map);
var polygonA = L.polyline([
  [31.67, 118.55],
  [31.87, 118.85]
],{color:'red'}).addTo(map);
 
    }

    render() {
        return (
            <div id="mainmap" style={{ width: '100%', height: '100%' }}></div>
        )
    }
}

export default ZMap
