
import { px } from './px';

export const baseEchartOptions = {
  textStyle: {
    fontSize: px(6),
    color: '#79839E'
  },
  title: { show: false },
  legend: { show: false },
  grid: {
    x: px(0),
    y: px(12),
    x2: px(4),
    y2: px(0),
    containLabel: true
  },
};
