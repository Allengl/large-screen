import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../lib/createEchartOptions';
import { px } from '../lib/px';

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: ['#f6b044', '#3597d4', '#3559a7', '#ea5c5a', '#3ab059', '#fdfdfd'],
      // legend: {
      //   bottom: px(0),
      //   textStyle: { color: 'white' },
      //   itemWidth: px(6),
      //   itemHeight: px(6)
      // },
      grid: {
        x: px(0),
        x2: px(8),
        y: px(8),
        y2: px(14),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 5, 10, 15, 20, 25, 30],
        splitLine: { show: true, lineStyle: { color: '#1e393d' } },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#1e393d' } },
        axisLabel: {
          formatter(val) {
            return val * 100 
          }
        }
      },
      series: [
        // {
        //   name: '异常消息',
        //   type: 'line',
        //   data: [6, 5, 3, 4, 3, 2, 1]
        // },
        {
          name: '总消息',
          type: 'line',
          data: [5, 3, 4, 6, 6, 3, 4]
        },
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(4),
        lineStyle: { width: px(1) }
      }))
    }));
  }, []);
  return (
    <div className="chartWrapper">
      <div className="title">近30日消息总数量趋势</div>
      <div ref={divRef} className="chart" />
    </div>
  );
};
