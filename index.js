const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
};

function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    }
  };
  
  function fareDoubler(fare) {
    const doubleFare = createFareMultiplier(2);
    return doubleFare(fare);
  }

  function fareTripler(fare) {
    const tripleFare = createFareMultiplier(3);
    return tripleFare(fare);
  }

  function selectDifferentDrivers(drivers, returnDrivers) {
    if (returnDrivers === returnFirstTwoDrivers) {
      return drivers.slice(0, 2);
    } else if (returnDrivers === returnLastTwoDrivers) {
      return drivers.slice(-2);
    }
  }