// Import select from d3
import { select, selectAll } from 'd3-selection';

const dataset = [5, 10, 15, 20, 25];

export default () => {
  select('body')
    .selectAll('div')
    .data(dataset)
    .enter()
    .append('div');

  selectAll('p')
    .style('color', 'purple');
};
