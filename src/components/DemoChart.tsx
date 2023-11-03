import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { DemoJson } from '../data/data';

type EChartsOption = echarts.EChartsOption;

interface GraphNode {
  symbolSize: number;
  label?: {
    show?: boolean;
  };
}

const DemoChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      let option: EChartsOption;

      myChart.showLoading();
      myChart.hideLoading();
      const graph = DemoJson
      graph.nodes.forEach(function (node: GraphNode) {
        node.label = {
          show: node.symbolSize > 30
        };
      });
      // eslint-disable-next-line prefer-const
      option = {
        title: {
          text: 'Les Miserables',
          subtext: 'Circular layout',
          top: 'bottom',
          left: 'right'
        },
        // tooltip: {},
        legend: [
          {
            data: graph.categories.map(function (a: { name: string }) {
              return a.name;
            })
          }
        ],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'circular',
            circular: {
              rotateLabel: true
            },
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              position: 'right',
              formatter: '{b}'
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3
            }
          }
        ]
      };

      myChart.setOption(option);
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '100vh' }} />;
};

export default DemoChart;