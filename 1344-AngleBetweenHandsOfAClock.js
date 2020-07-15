/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */

/*
2pi = 360degrees
instead say 12 clock units = 360degrees
convert minutes by minutes divide by 60 
60 mins = 12 hrs
minutes divide by 60 X 12 would give hr point
5/60 * 12 = 1

minutes/60 * 12 = clock units 
hours modulo 12 + minutes/60*1 = clock units

example
--------------------
Input: hour = 12, minutes = 30
Output: 165

convert hours: 12 modulo 12 + minutes/60 =  .5
convert minutes: 30/60 * 12 = 6
angle a = |6 - .5|/12 * 360 = 165
return max of 165 and 195(360 - 165) = 165


a = (6 - .5)/12 * 360
take absolute value
return max(a, b)

units 

pseudocode
------------------------
convert minutes to clock units
convert hours to clock units
first angle is absolute difference of minutes in clock units and hours in clock units
second angle is the difference of 360 and first angle
return the min of the two angles

*/
var angleClock = function (hour, minutes) {
  let hourCon = (hour % 12) + minutes / 60;
  let minCon = (minutes / 60) * 12;
  let angleA = (Math.abs(minCon - hourCon) / 12) * 360;
  return Math.min(angleA, 360 - angleA);
};
