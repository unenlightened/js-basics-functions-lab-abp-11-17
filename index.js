// Code your solution in this file!
const blockVertHQ = 42;

function distanceFromHqInBlocks(blockVertStart){
  return Math.abs(blockVertHQ - blockVertStart);
}

function distanceFromHqInFeet(blockVertStart){
  return distanceFromHqInBlocks(blockVertStart) * 264;
}

function distanceTravelledInFeet (blockVertStart, blockVertEnd){
 return Math.abs(blockVertStart - blockVertEnd) * 264;
}

function calculatesFarePrice(blockVertStart, blockVertEnd){
  const distance = distanceTravelledInFeet (blockVertStart, blockVertEnd);

  switch (true) {
    case distance > 2500:
      return 'cannot travel that far';
    case distance > 2000:
      return 25;
    case distance > 400:
      return distance * 0.02;       //first 400 ft are free, but it only passes when you calculate full distance
    default:
<<<<<<< HEAD
      return 0;
=======
      return 0;            
>>>>>>> 3b7f9e16ee5ae227bee67b8ef1397be4308168bb
  }
}
