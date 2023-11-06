import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../lib/createEchartOptions';
import { px } from '../lib/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = {
    1: [
      15, 13, 11,
      13, 14, 15,
      25
    ],
    2: [
      11, 15, 16,
      22, 19, 17,
      16
    ],
    3: [
      13, 14, 17,
      20, 17, 21,
      22
    ]
  };
  const render = data => {
    myChart.current.setOption(createEchartsOptions({
      color: ['#3597d4', '#f6b044', '#3559a7', '#ea5c5a', '#3ab059', '#fdfdfd'],
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 5, 10, 15, 20, 25, 30],
        splitLine: { show: true, lineStyle: { color: '#1e393d' } },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#1e393d' } },
        axisLabel: {
          formatter(val) {
            return val
          }
        }
      },
      series: [
        {
          name: '业务异常',
          type: 'line',
          data: data,
          symbol: 'circle',
          symbolSize: px(4),
          lineStyle: { width: px(1) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#3559a7'
            }, {
              offset: 1,
              color: '#1b1d52'
            }]),
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
      <div className="title">近30日异常消息数量趋势图</div>
      <div ref={divRef} className="chart" />
    </div>
  );
};
