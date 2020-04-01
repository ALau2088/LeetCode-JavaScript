/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

var compareVersion = function(version1, version2) {
  var v1 = version1.split('.');
  var v2 = version2.split('.');
  var currentDecimal = 0;
  while (currentDecimal < v1.length && currentDecimal < v2.length) {
    var currentV1 = parseInt(v1[currentDecimal]);
    var currentV2 = parseInt(v2[currentDecimal]);

    if (currentV1 > currentV2) {
      return 1;
    } else if (currentV1 < currentV2) {
      return -1;
    } else if (currentV1 === currentV2) {
      if (v1.length === 1 && v2.length === 1) {
        return 0;
      } else {
        currentDecimal++;
      }
    }
  }

  if (v1.length > v2.length) {
    currentV1 = parseInt(v1[currentDecimal]);
    while (currentDecimal < v1.length) {
      if (currentV1 === 0) {
        currentDecimal++;
      } else {
        return 1;
      }
      currentV1 = parseInt(v1[currentDecimal]);
    }
    return 0;
  }

  if (v2.length > v1.length) {
    currentV2 = parseInt(v2[currentDecimal]);
    while (currentDecimal < v2.length) {
      if (currentV2 === 0) {
        currentDecimal++;
      } else {
        return -1;
      }
      currentV2 = parseInt(v2[currentDecimal]);
    }
    return 0;
  }
  return 0;
};
