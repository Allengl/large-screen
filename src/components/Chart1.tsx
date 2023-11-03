import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

import {createEchartsOptions} from '../lib/createEchartOptions';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = {
    1: [50, 20, 30, 25, 15, 26, 20, '湖北省', '浙江省', '福建省', '北京', '上海', '重庆', '新疆'],
    2: [16, 26, 22, 29, 17, 21, 27, '湖南省', '广东省', '江西省', '黑龙江省', '内蒙古', '广西省', '江苏省'],
    3: [12, 25, 33, 18, 21, 23, 14, '陕西省', '辽宁省', '山东省', '河北省', '河南省', '甘肃省', '宁夏']
  };
  const render = data => {
    myChart.current?.setOption(createEchartsOptions({
      color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
      xAxis: {
        data: data.slice(7, -1),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        }
      },
      series: [{
        type: 'bar',
        data: data.slice(0, 6)
      }]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    render(data[1]);
    setInterval(() => {
      render(data[Math.ceil(Math.random() * 3)]);
    }, 1500);
  }, []);
  return (
    <div className="chartWrapper">
      <div className="title">昨日接口耗时统计</div>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
