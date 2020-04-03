/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let newFlowersToBePlanted = n;
  // edge case-one element
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    newFlowersToBePlanted--;
  }

  // first element
  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    newFlowersToBePlanted--;
    flowerbed[0] = 1;
  }

  for (let i = 1; i < flowerbed.length; i++) {
    //last element
    if (i === flowerbed.length - 1) {
      if (flowerbed[i] !== 1 && flowerbed[i - 1] === 0) {
        newFlowersToBePlanted--;
      }
      break;
    }
    if (
      flowerbed[i] !== 1 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      newFlowersToBePlanted--;
      flowerbed[i] = 1;
    }
  }
  if (newFlowersToBePlanted <= 0) {
    return true;
  } else {
    return false;
  }
};
