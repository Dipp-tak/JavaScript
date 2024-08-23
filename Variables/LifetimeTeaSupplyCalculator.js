/*In this code MyAge MyMaxAge Leapyear TeaPerDay and TeaNeeded is a variable.
and their I calculate LeapYear and TeaPerDay variables using the others variables */
var MyAge = 20;
var MyMaxAge = 80;
var LeapYear = (MyMaxAge - MyAge)/4
var TeaPerDay = 3;

var TeaNeeded = ((MyMaxAge - MyAge-LeapYear)*365*TeaPerDay)+(LeapYear*TeaPerDay*366);

console.log("In my lifetime, I will approximately eat "+TeaNeeded+" cups of tea. ");
