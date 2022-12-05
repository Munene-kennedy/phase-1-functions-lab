// Code your solution in this file!
const returnfirstTwoDrivers = function (drivers) {
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
  };

  const returnlastTwoDrivers = function (drivers) {
    const lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers;
  };

  const selectingDrivers = [returnfirstTwoDrivers , returnlastTwoDrivers]

  const createFareMultiplier = function (multiplier) {
    return function (value) {
      return value * multiplier;
    };
  };

  const doubleFare = createFareMultiplier(2);

  const tripleFare = createFareMultiplier(3);

  const selectDifferentDrivers = function (drivers, fn) {
    return fn(drivers);
  };