// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet (block) {
  feet = distanceFromHqInBlocks(block) * 264;
  return feet;
}

function distanceTravelledInFeet(startblock, endblock) {
   if (startblock < endblock) {
     return endblock - startblock * 264;
   } else {
     return startblock - endblock * 264;
   }
}