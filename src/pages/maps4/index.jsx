import React, { Component } from 'react';
import { Carousel } from 'antd';
import tushuguan from 'images/tushuguan.svg';
import sushe from 'images/sushe.svg';
import shitang from 'images/shitang.svg';
import jisuanji from 'images/jisuanji.svg';
import tiyuchang from 'images/tiyuchang.svg';
import xiaoyiyuan from 'images/xiaoyiyuan.svg';
import png1 from 'images/1.jpeg';
import png2 from 'images/2.webp';
import png3 from 'images/3.jfif';
import png5 from 'images/5.jpg';
import png6 from 'images/6.jpeg';
import png7 from 'images/7.jpeg';
import './index.less'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
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
          iconSize: [45, 75],
          className: 'green'
          // popupAnchor: [-3, -76]
      });
      const myIcon1 = L.icon({
        iconUrl: sushe,
        iconSize: [40, 75],
        className: 'green'
        // popupAnchor: [-3, -76]
    });
    const Icon3 = L.icon({
      iconUrl: shitang,
      iconSize: [40, 75],
      className: 'green'
      // popupAnchor: [-3, -76]
  });

  const Icon4 = L.icon({
    iconUrl: jisuanji,
    iconSize: [35, 75],
    className: 'green'
    // popupAnchor: [-3, -76]
});

const Icon5 = L.icon({
  iconUrl: tiyuchang,
  iconSize: [35, 75],
  className: 'green'
  // popupAnchor: [-3, -76]
});

const Icon6 = L.icon({
  iconUrl: xiaoyiyuan,
  iconSize: [35, 75],
  className: 'green'
  // popupAnchor: [-3, -76]
});
    const customOptions = {
      minWidth: "100px", // set max-width
      maxHeight:'100px',
      bottom:'-100px'
      // className: "customPopup", // name custom popup
    };
    const pop1 =`<div><img src=${png1}  width="500px" height="350px" /></div>`;
    const pop2 =`<div><img src=${png2}  width="500px" height="350px" /></div>`;
    const pop3 =`<div><img src=${png3}  width="500px" height="350px" /></div>`;
    const pop4 =`<div><img src=${png5}  width="800px" height="400px" /></div>`;
    const pop5 =`<div><img src=${png6}  width="500px" height="400px" /></div>`;
    const pop6 =`<div><img src=${png7}  width="500px" height="400px" /></div>`;

        L.marker([31.67322484843272, 118.55421781539917], {icon: myIcon}).bindPopup(pop1, customOptions).addTo(map) //图书馆

        L.marker([31.674521419583357, 118.5495615005493], {icon: myIcon1}).bindPopup(pop2, customOptions).addTo(map) //宿舍
        L.marker([31.67674928829602, 118.5517394542694], {icon: myIcon1}).bindPopup(pop2, customOptions).addTo(map) //宿舍
        L.marker([31.676320153806934, 118.55502247810364], {icon: myIcon1}).bindPopup(pop2, customOptions).addTo(map) //宿舍

        L.marker([31.674302282068588, 118.556889295578], {icon: Icon3}).bindPopup(pop3, customOptions).addTo(map) //食堂
        L.marker([31.674000967141417, 118.55019450187683], {icon: Icon3}).bindPopup(pop3, customOptions).addTo(map) //食堂
        L.marker([31.67539796447123, 118.55382084846497], {icon: Icon3}).bindPopup(pop3, customOptions).addTo(map) //食堂
        L.marker([31.676210587236564, 118.55623483657837], {icon: Icon3}).bindPopup(pop3, customOptions).addTo(map) //食堂


        L.marker([31.671416923229394, 118.55515122413635], {icon: Icon4}).bindPopup(pop4, customOptions).addTo(map) //计算机学院

        L.marker([31.672786566766842, 118.54885339736938], {icon: Icon5}).bindPopup(pop5, customOptions).addTo(map) //体育场

        L.marker([31.677543638393473, 118.55427145957947], {icon: Icon6}).bindPopup(pop6, customOptions).addTo(map) //校医院

        
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
