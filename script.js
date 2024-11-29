// your JS code here. If required.
function isLeapYear(value) {
  if ((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0) {
    return "366"; // Leap year has 366 days
  } else {
    return "365"; // Non-leap year has 365 days
  }
}

// do not change the code below.
let value = parseInt(prompt("Enter the year?")); // Corrected to use `value`
alert(isLeapYear(value)); // Call the function with the corrected `value`
