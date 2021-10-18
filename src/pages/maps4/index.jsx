import React, { Component } from 'react'
import icon from 'images/4.svg';
import tushuguan from 'images/tushuguan.svg';
import './index.less'

const L = window.L
class ZMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlayer:false
    };
  }
    componentDidMount() {
        this.initMainMap()
    }
    onClick=()=>{
      this.setState({isPlayer:true})
    }
    initMainMap() {
        const map = L.map('mainmap', {
            crs: L.CRS.EPSG3857, //要使用的坐标参考系统，默认的坐标参考系，互联网地图主流坐标系
        }).setView([31.67399183637079, 118.55313420295715], 17)
        
        L.tileLayer("http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",{
                    attribution: '&copy; 高德地图',
                    minZoom: 10,
                    subdomains: "1234"
                }).addTo(map);
       
        var myIcon = L.icon({
          iconUrl: tushuguan,
          iconSize: [35, 75],
          className: 'green'
          // popupAnchor: [-3, -76]
      });
        L.marker([31.67322484843272, 118.55421781539917], {icon: myIcon}).addTo(map).on('click', this.onClick)
        L.marker([31.670622520722453, 118.5514497756958], {icon: myIcon}).addTo(map).on('click', this.onClick)
        // const Y = String(document.getElementsByClassName('green')[0].style.transform).split(',')[1].trim().slice(0,-2)
        // const X = String(document.getElementsByClassName('green')[0].style.transform).split(',')[0].split('(')[1].trim().slice(0,-2)
        // console.log(Y,X)
        // document.getElementsByClassName('green')[0].style.animation = "myfirst 2s infinite"
        // console.log(document.getElementsByClassName('green')[0].style.transform)
        map.on('click', function(e) {
          console.log([e.latlng.lat,e.latlng.lng]);
      } );
       
    }

    render() {
        return (
          <>
            <div id="mainmap" style={{ width: '100%', height: '100%' }}></div>
            </>
        )
    }
}

export default ZMap
