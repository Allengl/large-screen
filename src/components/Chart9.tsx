import React, { useEffect, useRef } from 'react'
import { createEchartsOptions } from '../lib/createEchartOptions';
import * as echarts from 'echarts';
import { px } from '../lib/px';


type EChartsOption = echarts.EChartsOption;

const Chart9 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  let option: EChartsOption;

  const gaugeData = [
    {
      value: 20,
      name: 'CPU',
      title: {
        offsetCenter: ['0%', '-35%']
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '-20%']
      }
    },
    {
      value: 40,
      name: '内存',
      title: {
        offsetCenter: ['0%', '-5%']
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '10%']
      }
    },
    {
      value: 60,
      name: '磁盘',
      title: {
        offsetCenter: ['0%', '25%']
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '40%']
      }
    }
  ];


  const render = (data) => {
    myChart.current.setOption(createEchartsOptions({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        top: '15%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        min: '0',
        max: '1'
      },
      yAxis: {
        type: 'category',
        data: ['磁盘', '内存', 'CPU'],
      },
      series: [
        {
          type: 'bar',
          data: [0.12, 0.23, 0.45,],
          itemStyle: {
            color: '#3597d4'
          }
        },
      ]
    }));

  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current, 'dark');
    render(gaugeData[0]);
    // setInterval(() => {
    //   render(gaugeData[Math.ceil(Math.random() * 3)]);
    // }, 3000);
  }, []);

  return (
    <div className="chartWrapper">
      <div className="title">app01资源使用情况</div>
      <div ref={divRef} className="chart" />
    </div>
  )
}

export default Chart9
