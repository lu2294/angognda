import React, { Component } from 'react'
// import { center, zoom, CRS, clusterMaxZoom, clusterMinZoom} from 'config/defaultValue.config'

const L = window.L
class ZMap extends Component {
    componentDidMount() {
        this.initMainMap()
    }
    initMainMap() {
      const map = L.map('mainmap');
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
  map.setView([31.673956653099, 118.554346561431], 17);
  var  heatPoints = [];
  const data = [
    [31.67621971778903,118.55621337890624,Math.random() * 60],
    [31.676055367707246,118.55622410774232,Math.random() * 60],
    [31.674329674286227,118.55935692787169,Math.random() * 60],
    [31.673261371811506,118.55414271354675,Math.random() * 60],
    [31.673256806389936,118.55460941791533,Math.random() * 60],
    [31.67323397927874,118.55436801910399,Math.random() * 60],
    [31.6730422313233,118.55431437492369,Math.random() * 60],
    [31.6730422313243,118.55431437496369,Math.random() * 60],
    [31.67147170935871,118.55530142784119,Math.random() * 60],
    [31.671348440522294,1118.5554140806198,Math.random() * 60],
    [31.671184081819224,118.55531752109528,Math.random() * 60],
    [31.67135300603768,118.55531215667725,Math.random() * 60],
    [31.671270826726538,118.55526387691498,Math.random() * 60],
    [31.674156190104792,118.54933619499208,Math.random() * 60],
    [31.674484896700154,118.54941129684447,Math.random() * 60],
    [31.674914039670757,118.55009794235231,Math.random() * 60],
    [31.674147059349405,118.54884266853331,Math.random() * 60],
    [31.674338805023623,118.54995846748352,Math.random() * 60],
    [31.676849723741093,118.55188965797424,Math.random() * 60],
    [31.676639722232018,118.55149269104004,Math.random() * 60],
    [31.676374937043622,118.55156779289246,Math.random() * 60],
    [31.67679494078452,118.55159997940063,Math.random() * 60],
    [31.674713164484597,118.55511903762817,Math.random() * 60],

    [31.674302282068588,118.55522632598877,Math.random() * 40],
    [31.675060130442304,118.55519413948059,Math.random() * 60],
    [31.675498401377933,118.5551404953003,Math.random() * 60],
    [31.675516662622048,118.55457186698915,Math.random() * 60],
    [31.675206220984013,118.55456113815306,Math.random() * 60],
    [31.674777079363693,118.5546040534973,Math.random() * 60],
    [31.67429315132758,118.5546040534973,Math.random() * 60],
    [31.674338805023623,118.54995846748352,Math.random() * 60],
]
  for(let i = 0;i<100;i++){
    heatPoints[i] = [Math.random() * 0.00000000003 + 31.67621971778903, Math.random() * 0.5 + 118.000000000000004, Math.random() * 60]

  }
  var heat = L.heatLayer(data,{radius:20,minOpacity: 0.5 }).addTo(map);
  map.on('click', function(e) {
    console.log(e);
} );
 
    }

    render() {
        return (
            <div id="mainmap" style={{ width: '100%', height: '100%' }}></div>
        )
    }
}

export default ZMap
