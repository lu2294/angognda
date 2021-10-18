import React, { Component } from 'react'
import icon from 'images/4.svg';
import XdrPlayer from '@components/player';
import {  Modal } from 'antd';
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
        }).setView([31.67, 118.55], 15)
        
        L.tileLayer("http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",{
                    attribution: '&copy; 高德地图',
                    minZoom: 10,
                    subdomains: "1234"
                }).addTo(map);
        // map.createPane('imagePane');
        var polygonA = L.polyline(
            [
              // [31.670622520722453, 118.55149269104004],
              [31.670987764098236, 118.55063438415527],
              [31.670987764098236, 118.55050563812256],
              [31.67113386104637, 118.5499906539917],
              [31.671170385247496, 118.54977607727052],
              [31.67127995776469, 118.54947566986084],
              [31.6713895301526, 118.54926109313965],
              [31.6713895301526, 118.54908943176268],
              [31.671499102411254, 118.5490036010742],
              [31.671499102411254, 118.54878902435303],
              [31.67168172255505, 118.5484457015991],
              [31.671718246540735, 118.54814529418945],
              [31.671864342339774, 118.5478448867798],
              [31.67233915209942, 118.54634284973143],
               [31.672521770591363, 118.5458278656006],
              [31.672631341514155, 118.54492664337158],
               [31.672777435876803, 118.54445457458495],
               [31.672777435876803, 118.54436874389647],
               [31.67296005350692, 118.54273796081543],
               [31.672923530009612, 118.53951930999756],
               [31.67321571758576, 118.53471279144287],
               [31.67321571758576, 118.53282451629639],
               [31.67321571758576, 118.52973461151123],
               [31.673179194189036, 118.52754592895508],
               [31.67314267077791, 118.52548599243165],
               [31.67314267077791, 118.52402687072752],

            ],
            {color: '#a7081b', opacity:11,fillColor:'#a7081b',smoothFactor:2 }
        ).addTo(map);
        var myIcon = L.icon({
          iconUrl: icon,
          iconSize: [25, 55],
          // popupAnchor: [-3, -76]
      });
        L.marker([31.673179194189036, 118.52346897125246], {icon: myIcon,className: 'green'}).addTo(map).on('click', this.onClick)
        L.marker([31.670622520722453, 118.5514497756958], {icon: myIcon,className: 'green'}).addTo(map).on('click', this.onClick)


        L.polyline(
          [
            [31.66324429699179, 118.52325439453124],
            [31.663317351584368, 118.49823474884033]

          ],
          {color: '#a7081b', opacity:11,fillColor:'#a7081b',smoothFactor:2 }
      ).addTo(map);
      L.polyline(
        [
          [31.678127983552148, 118.49804162979125],
          [31.684026011589513, 118.49802017211914]

        ],
        {color: '#a7081b', opacity:11,fillColor:'#a7081b',smoothFactor:2 }
    ).addTo(map); 
      L.marker([31.66322603333468, 118.52372109889984], {icon: myIcon,className: 'green'}).addTo(map).on('click', this.onClick)
      L.marker([31.663294522030355, 118.49791824817656], {icon: myIcon,className: 'green'}).addTo(map).on('click', this.onClick)
      L.marker([31.684391202244726, 118.49802017211914], {icon: myIcon,className: 'green'}).addTo(map).on('click', this.onClick)
        map.on('click', function(e) {
          console.log([e.latlng.lat,e.latlng.lng]);
      } );
    }

    render() {
      const {isPlayer}  =  this.state
        return (
          <>
            <div id="mainmap" style={{ width: '100%', height: '100%' }}></div>
           
             {isPlayer ? <Modal className="player-wrapper" visible={isPlayer} width="60vw" wrapClassName="main-model" onCancel={() => { this.setState({isPlayer:false}) }} centered={true} footer={false}>
                <XdrPlayer url={'https://mp4.vjshi.com/2021-06-17/1a2484ee27b339f86744ceaf8f146578.mp4'} />
            </Modal> : null} 
            </>
        )
    }
}

export default ZMap
