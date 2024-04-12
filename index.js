const batteryBatch = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatch.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);