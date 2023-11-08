import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { DemoJson } from '../data/data';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

type EChartsOption = echarts.EChartsOption;

interface GraphNode {
  symbolSize: number;
  label?: {
    show?: boolean;
  };
}

const DemoChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const l = 0;
  const graph = DemoJson
  let option: EChartsOption;
  option = {
    title: {
      top: 'top',
      left: 'left'
    },
    // color:'#fff',
    tooltip: {},
    legend: [
      // {
      //   data: graph.categories.map(function (a: { name: string }) {
      //     return a.name;
      //   })
      // }
    ],
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: true
        },
        data: graph.nodes,
        links: graph.links,
        // categories: graph.categories,
        dataZoom: [
          {
            type: 'inside',
            disabled: true // 禁用缩放
          },
          {
            type: 'slider',
            disabled: true // 禁用滑动条拖动
          }
        ],
        roam: false,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: '#f00',
          curveness: 0.3,
          width: 3
        }
      }
    ]
  };


  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      myChart.showLoading();
      myChart.hideLoading();
      graph.nodes.forEach(function (node: GraphNode) {
        node.label = {
          show: node.symbolSize > 19
        };
      });


      myChart.setOption(option);

      // let l = 0; // Initialize l
      // const linesSize = lines.length; // Get the size of lines

      // window.setInterval(() => {
      //   const source = lines[l].source;
      //   const target = lines[l].target;
      //   const sourceItem = items[source];
      //   const targetItem = items[target];

      //   // Highlight the line
      //   sourceItem.symbolSize = 30;
      //   targetItem.symbolSize = 30;
      //   lines[l] = {
      //     source: lines[l].source,
      //     target: lines[l].target,
      //     lineStyle: {
      //       color: '#f00',
      //       width: 5
      //     }
      //   };

      //   // Update the chart
      //   myChart.setOption(option);

      //   // Reset the line style
      //   sourceItem.symbolSize = 20;
      //   targetItem.symbolSize = 20;
      //   lines[l] = {
      //     source: lines[l].source,
      //     target: lines[l].target,
      //     lineStyle: {
      //       color: 'blue',
      //       width: 1
      //     }
      //   };

      //   // Move on to the next line
      //   l = (l + 1) % linesSize;

      //   // Update the chart again to reflect the reset styles
      //   myChart.setOption(option);
      // }, 1000);
    }
  }, []);

  return (
    <div className='chart'>
      <div ref={chartRef} style={{ width: '100%', height: '60vh', margin: 'auto' }} />;
    </div>
  )
};

export default DemoChart;
