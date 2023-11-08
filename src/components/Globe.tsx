import * as echarts from 'echarts';
import 'echarts-gl';
import { useEffect, useRef } from 'react';
import { DemoJson } from '../data/data';
import { createEchartsOptions } from '../lib/createEchartOptions';

const ROOT_PATH = 'https://echarts.apache.org/examples';


// const nodesData = [
//   {
//     name: '北京',
//     value: [116.4074, 39.904] // 中国（北京）的经纬度
//   },
//   {
//     name: '华盛顿',
//     value: [-77.0369, 38.9072] // 美国（华盛顿）的经纬度
//   },
//   {
//     name: '伦敦',
//     value: [-0.1276, 51.5074] // 英国（伦敦）的经纬度
//   },
//   {
//     name: '巴黎',
//     value: [2.3522, 48.8566] // 法国（巴黎）的经纬度
//   },
//   {
//     name: '东京',
//     value: [139.6917, 35.6895] // 日本（东京）的经纬度
//   }
// ];





const Globe = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const nodes = DemoJson.nodes


  const nodeData = nodes.map((node, index) => {
    const longitude = (360 / nodes.length) * index; // Distribute longitude evenly
    const latitude = Math.random() * 180 - 90; // Generate random latitude

    return {
      name: node.name,
      value: [longitude, latitude]
    };
  });

  const nodesData = nodeData.map(item => ({
    value: [item.value[0], item.value[1], 0],
    name: item.name,
  }))

  const generateLinesData = (data) => {
    const linesData = [];
    for (let i = 0; i < data.length - 1; i++) {
      linesData.push({
        coords: [data[i].value, data[i + 1].value]
      });
    }
    return linesData;
  };

  const linesData = generateLinesData(nodesData);


  // const linesData = [
  //   {
  //     coords: [nodesData[0].value, nodesData[1].value, 1]
  //   },
  //   {
  //     coords: [nodesData[1].value, nodesData[2].value]
  //   },
  //   {
  //     coords: [nodesData[2].value, nodesData[3].value]
  //   },
  //   {
  //     coords: [nodesData[3].value, nodesData[4].value]
  //   }
  // ]



  const render = (nodesData, linesData) => {
    myChart.current?.setOption(createEchartsOptions(
      {
        backgroundColor: '#000',
        globe: {
          baseTexture: ROOT_PATH + '/data-gl/asset/earth.jpg',
          shading: 'lambert',
          environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
          atmosphere: {
            show: true
          },
          light: {
            ambient: {
              intensity: 0.1
            },
            main: {
              intensity: 1.5
            }
          }
        },
        series: [
          {
            type: 'scatter3D',
            coordinateSystem: 'globe',
            data: nodesData,
            symbolSize: 5,
            label: {
              show: true,
              formatter: '{b}'
            },
            itemStyle: {
              color: 'white'
            },

          },
          {
            type: 'lines3D',
            coordinateSystem: 'globe',
            effect: {
              show: true,
              trailWidth: 1,
              trailLength: 2,
              trailOpacity: 0.5,
              trailColor: 'rgba(30, 144, 255, 0.6)'
            },
            // blendMode: 'lighter',
            lineStyle: {
              width: 2,
              opacity: 0.7
            },
            data: linesData
          }
        ]
      }
    ))
  };

  useEffect(() => {
    console.log(nodesData);
    console.log(linesData);

    myChart.current = echarts.init(divRef.current);
    render(nodesData, linesData);

  }, [])



  return (
    <div ref={divRef} className="chart" />
  )
}

export default Globe
