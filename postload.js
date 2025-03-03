// Store HTML objects into JS variables/objects
const Day1Obj = document.getElementById("Day1");
const Day2Obj = document.getElementById("Day2");
const Day3Obj = document.getElementById("Day3");
const Day4Obj = document.getElementById("Day4");
const Day5Obj = document.getElementById("Day5");
const Day6Obj = document.getElementById("Day6");
const Day7Obj = document.getElementById("Day7");
const Day8Obj = document.getElementById("Day8");
const Day9Obj = document.getElementById("Day9");
const Day10Obj = document.getElementById("Day10");
const Day11Obj = document.getElementById("Day11");
const Day12Obj = document.getElementById("Day12");

// Display objects
const zNameObj = document.getElementById("zName");
const zImageObj = document.getElementById("zImage");
const zDateRangeObj = document.getElementById("zDateRange");
const zDescriptionObj = document.getElementById("zDescription");

// Close mode
const DisplayAreaObj = document.getElementById("DisplayArea");
const CloseBtnObj = document.getElementById("CloseBtn");

// Get all buttons to call one central function
Day1Obj.addEventListener("click", function () {
  displayDayInfo("Day1");
});

Day2Obj.addEventListener("click", function () {
  displayDayInfo("Day2");
});

Day3Obj.addEventListener("click", function () {
  displayDayInfo("Day3");
});

// Display Day info function
function displayDayInfo(whichOne) {
  zNameObj.innerHTML = whichOne;
  switch (whichOne) {
    case "Day1":
      zImageObj.src = "media/Day1.png";
      zDateRangeObj.innerHTML = "Dec 25";
      zDescriptionObj.innerHTML = "On the first day of Christmas...";
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("bloop");
      break;

    case "Day2":
      zImageObj.src = "media/Day2.png";
      zDateRangeObj.innerHTML = "Dec 26";
      zDescriptionObj.innerHTML = "On the second day of Christmas...";
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("chimes");
      break;

    case "Day3":
      zImageObj.src = "media/Day3.png";
      zDateRangeObj.innerHTML = "Dec 27";
      zDescriptionObj.innerHTML = "On the third day of Christmas...";
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("crack");
      break;

    default:
      console.log("ERROR: INVALID DAY!");
  }
}

CloseBtnObj.addEventListener("click", function () {
  DisplayAreaObj.classList.add("hideMe");
});

// Play audio function
const allAudios = document.querySelectorAll("audio");

function playAudio(whichSound) {
  allAudios.forEach((thisAudio) => {
    thisAudio.pause();
    thisAudio.currentTime = 0; // Reset sound file back to start
  });
  document.getElementById(whichSound).play();
}

// Input date and submit code below
const submitObj = document.getElementById("zSubmit");

submitObj.addEventListener("click", function () {
  console.log("Submit button clicked on!");

  // Step 1: Capture user input date
  const birthDateObj = document.getElementById("zBirthday").valueAsDate;
  console.log("birthDateObj is " + birthDateObj);

  // Step 2: Make sure date is valid
  if (birthDateObj) {
    const tzOffSet = birthDateObj.getTimezoneOffset() * 60 * 1000;
    console.log("tzOffSet is " + tzOffSet);
    const birthDateEST = new Date(birthDateObj.getTime() + tzOffSet);
    console.log("birthDateEST is " + birthDateEST);

    // Extract month and day
    const month = birthDateEST.getMonth() + 1;
    const day = birthDateEST.getDate();
    console.log("month is " + month + " day is " + day);

    // Step 3: Convert date to a day of Christmas
    let christmas_day = "Day1"; // Default value

    if (month === 12 && day >= 25) christmas_day = "Day1";
    else if (month === 12 && day >= 26) christmas_day = "Day2";
    else if (month === 12 && day >= 27) christmas_day = "Day3";
    else if (month === 12 && day >= 28) christmas_day = "Day4";
    else if (month === 12 && day >= 29) christmas_day = "Day5";
    else if (month === 12 && day >= 30) christmas_day = "Day6";
    else if (month === 12 && day >= 31) christmas_day = "Day7";
    else if (month === 1 && day >= 1) christmas_day = "Day8";
    else if (month === 1 && day >= 2) christmas_day = "Day9";
    else if (month === 1 && day >= 3) christmas_day = "Day10";
    else if (month === 1 && day >= 4) christmas_day = "Day11";
    else if (month === 1 && day >= 5) christmas_day = "Day12";

    displayDayInfo(christmas_day);
  } else {
    alert("Please enter a valid date.");
  }
});
