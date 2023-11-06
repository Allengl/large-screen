import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../lib/createEchartOptions';
import {px} from '../lib/px';

export const Chart7 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = {
    1: [
      {value: 0.06, name: 'ACS'},
      {value: 0.15, name: 'BC_DGT_SAL'},
      {value: 0.13, name: 'BC_CRM'},
      {value: 0.06, name: 'CRM'},
      {value: 0.06, name: 'CITIMACAU'},
    ],
    2: [
      {value: 0.08, name: 'CN_FKB_MO'},
      {value: 0.06, name: 'BC_SMMS'},
      {value: 0.11, name: 'DMS'},
      {value: 0.09, name: 'SMMS'},
      {value: 0.12, name: 'CITIHK'},
    ],
    3: [
      {value: 0.13, name: 'CIB'},
      {value: 0.09, name: 'FKB'},
      {value: 0.08, name: 'Local BI'},
      {value: 0.10, name: 'MDM'},
      {value: 0.09, name: 'SHUYUN'},
    ]
  };
  const render = data => {
    myChart.current.setOption(createEchartsOptions({
      color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059'],
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      legend: {
        orient: 'vertical',
        right: px(10),
        top: 'center',
        textStyle: {color: 'white'},
        itemWidth: px(6),
        itemHeight: px(6),
        itemGap: px(5),
        formatter(name) {
          const value = data.find(i => i.name === name)?.value * 100 + '%';
          return name + ' ' + value;
        }
      },
      series: [
        {
          center: ['35%', '52%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
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
      <div className="title">当日接口交易量</div>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
