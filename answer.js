function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(x=> x==true).length
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
