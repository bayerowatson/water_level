import * as waterData from './waterData.js';

const driesData = await waterData.getDries();
const driesLevel = driesData.data.value.timeSeries[0].values[0].value[0];
const gauleyData = await waterData.getGauley();
const gauleyLevel = gauleyData.data.value.timeSeries[2].values[0].value[0];

console.log('Dries level:', driesLevel);
console.log('Gauley level:', gauleyLevel);

console.log('test')