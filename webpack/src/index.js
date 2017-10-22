
// This import will fail if the alias for './utils' is above the
// alias for './utils/sum' in webpack.config.js
import { sum } from './utils/sum';

export class SumSomething {
  constructor() {
    console.log(sum(2,3));
  }
}

new SumSomething();
