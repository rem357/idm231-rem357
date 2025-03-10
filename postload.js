// Store HTML objects into JS variables/objects
const Day1Obj = document.getElementById("A Partridge in a Pear Tree");
const Day2Obj = document.getElementById("Two Turtle Doves");
const Day3Obj = document.getElementById("Three French Hens");
const Day4Obj = document.getElementById("Four Calling Birds");
const Day5Obj = document.getElementById("FIVE GOLDEN RINGS!");
const Day6Obj = document.getElementById("Six Geese a Laying");
const Day7Obj = document.getElementById("Seven Swans a Swimming");
const Day8Obj = document.getElementById("Eight Maids a Milking");
const Day9Obj = document.getElementById("Nine Ladies Dancing");
const Day10Obj = document.getElementById("Ten Lords a Leaping");
const Day11Obj = document.getElementById("Eleven Pipers Piping");
const Day12Obj = document.getElementById("Twelve Drummers Drumming");



// Display objects
const zNameObj = document.getElementById("zName");
const zImageObj = document.getElementById("zImage");
const zDateRangeObj = document.getElementById("zDateRange");
const zDescriptionObj = document.getElementById("zDescription");




// Close mode
const DisplayAreaObj = document.getElementById("DisplayArea");
const CloseBtnObj = document.getElementById("CloseBtn");




// Get 12 buttons to call one central function
Day1Obj.addEventListener("click", function () {
  displayDayInfo("A Partridge in a Pear Tree");
});

Day2Obj.addEventListener("click", function () {
  displayDayInfo("Two Turtle Doves");
});

Day3Obj.addEventListener("click", function () {
  displayDayInfo("Three French Hens");
});

Day4Obj.addEventListener("click", function () {
  displayDayInfo("Four Calling Birds");
});

Day5Obj.addEventListener("click", function () {
  displayDayInfo("FIVE GOLDEN RINGS!");
});

Day6Obj.addEventListener("click", function () {
  displayDayInfo("Six Geese a Laying");
});

Day7Obj.addEventListener("click", function () {
  displayDayInfo("Seven Swans a Swimming");
});

Day8Obj.addEventListener("click", function () {
  displayDayInfo("Eight Maids a Milking");
});

Day9Obj.addEventListener("click", function () {
  displayDayInfo("Nine Ladies Dancing");
});

Day10Obj.addEventListener("click", function () {
  displayDayInfo("Ten Lords a Leaping");
});

Day11Obj.addEventListener("click", function () {
  displayDayInfo("Eleven Pipers Piping");
});

Day12Obj.addEventListener("click", function () {
  displayDayInfo("Twelve Drummers Drumming");
});




// Display Day info function
function displayDayInfo(whichOne) {
  zNameObj.innerHTML = whichOne;
  switch (whichOne) {
    case "A Partridge in a Pear Tree":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/1-1.png?raw=true";
      zDateRangeObj.innerHTML = "Jan 20 - Feb 18";
      zDescriptionObj.innerHTML = "On the first day of Christmas my true love gave to me a partridge in a pear tree. 	The Partridge is a symbol of stability and protection, making those born under its sign natural caretakers. Just as the lone partridge remains steadfast in its tree, these individuals are grounded, reliable, and self-sufficient. However, their adaptability allows them to navigate change with grace. They are both the pillar of support for loved ones and the free spirit who can thrive in any environment. Their dual nature makes them excellent problem-solvers and mediators in times of conflict.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "Two Turtle Doves":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/2-1.png?raw=true";
      zDateRangeObj.innerHTML = "Feb 19 - Mar 20";
      zDescriptionObj.innerHTML = "On the second day of Christmas my true love gave to me two turtle doves. 	Two turtle doves represent deep emotional bonds, faithfulness, and devotion. Those born under this sign have a heart full of love and a soul deeply attuned to others’ emotions. They seek meaningful connections in life, prioritizing loyalty and compassion over fleeting pleasures. They are romantics at heart, often seeing the world through a poetic lens. Just as turtle doves mate for life, these individuals value strong, lasting relationships and will go to great lengths to nurture their bonds.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "Three French Hens":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/3-1.png?raw=true";
      zDateRangeObj.innerHTML = "Mar 21 - Apr 19";
      zDescriptionObj.innerHTML = "On the third day of Christmas my true love gave to me three French hens. French hens were once considered a valuable gift, symbolizing wealth and sustenance. Those born under this sign possess an air of sophistication, resourcefulness, and quiet strength. They are deeply intuitive and know how to transform scarcity into abundance. With an alluring mystery about them, they draw people in with their depth and insight. They are dependable yet selective, ensuring they give their best only to those who truly deserve it.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "Four Calling Birds":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/4-1.png?raw=true";
      zDateRangeObj.innerHTML = "Apr 20 - May 20";
      zDescriptionObj.innerHTML = "On the fourth day of Christmas my true love gave to me four calling birds. Calling birds are known for their beautiful, attention-grabbing songs, just like those born under this sign who captivate others with their charisma and expressiveness. They are natural performers, thriving in environments where their voice can be heard. Their presence is impossible to ignore, and they inspire others with their confidence and passion. Whether through words, music, or leadership, they have a unique ability to draw people in and create a lasting impact.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "FIVE GOLDEN RINGS!":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/5-1.png?raw=true";
      zDateRangeObj.innerHTML = "May 21 - Jun 21";
      zDescriptionObj.innerHTML = "On the fifth day of Christmas my true love gave to me FIVE GOLDEN RINGS! 	Golden rings represent prosperity, prestige, and legacy—qualities deeply ingrained in those born under this sign. They are steadfast in their ambitions, radiating an aura of timeless elegance and strength. Like gold, their loyalty is unwavering, and they place great value on building a life of comfort and stability. They take pride in their achievements and possessions but never let material wealth overshadow their deep appreciation for love and tradition.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "Six Geese a Laying":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/6-1.png?raw=true";
      zDateRangeObj.innerHTML = "Jun 22 - Jul 22";
      zDescriptionObj.innerHTML = "On the sixth day of Christmas my true love gave to me six geese a laying. 	Geese are symbols of abundance, productivity, and nurturing energy. Those born under this sign are generous and always seeking to create something meaningful—whether it’s a family, a career, or an adventure-filled life. They have a restless spirit and are driven by a desire for expansion and exploration. They take pride in fostering growth in those around them, encouraging others to follow their dreams just as they chase their own.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "Seven Swans a Swimming":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/7-1.png?raw=true";
      zDateRangeObj.innerHTML = "Jul 23 - Aug 22";
      zDescriptionObj.innerHTML = "On the seventh day of Christmas my true love gave to me seven swans a swimming. 	Swans glide effortlessly across the water, symbolizing grace, inner peace, and quiet transformation. Those born under this sign exude an ethereal beauty, but beneath their calm exterior lies a powerful force for change. They are visionaries, always looking to the future and seeking deeper meaning in life. They navigate challenges with poise and have an innate ability to inspire others with their wisdom and unconventional approach to the world.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "Eight Maids a Milking":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/8-1.png?raw=true";
      zDateRangeObj.innerHTML = "Aug 23 - Sep 22";
      zDescriptionObj.innerHTML = "On the eighth day of Christmas my true love gave to me eight maids a milking. 	Milkmaids represent diligence, humility, and service, making those born under this sign the backbone of any endeavor. They are hardworking, meticulous, and find fulfillment in helping others. Though they often work behind the scenes, their impact is undeniable. They are practical problem-solvers who bring order to chaos and ensure that everything runs smoothly. Their humble nature makes them deeply respected, and they take pride in the simple joys of life.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "Nine Ladies Dancing":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/9-1.png?raw=true";
      zDateRangeObj.innerHTML = "Sep 23 - Oct 23";
      zDescriptionObj.innerHTML = "On the ninth day of Christmas my true love gave to me nine ladies dancing. 	Dancing ladies symbolize structured creativity, discipline, and celebration. Those born under this sign have an innate ability to balance responsibility with joy, ensuring that even the hardest work is infused with passion. They are determined and ambitious but also know how to appreciate life’s little victories. They bring energy and excitement wherever they go, making them natural leaders in both professional and social settings.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "Ten Lords a Leaping":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/10-1.png?raw=true";
      zDateRangeObj.innerHTML = "Oct 24 - Nov 21";
      zDescriptionObj.innerHTML = "On the tenth day of Christmas my true love gave to me ten lords a leaping. Leaping lords embody confidence, strength, and bold movement—qualities that define those born under this sign. They are fearless in their pursuits, taking charge of any situation with an unshakable belief in their abilities. They thrive on adventure, competition, and breaking boundaries. Their leadership qualities make them natural pioneers, always willing to take the first step into the unknown.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "Eleven Pipers Piping":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/11-1.png?raw=true";
      zDateRangeObj.innerHTML = "Nov 22 - Dec 21";
      zDescriptionObj.innerHTML = "On the eleventh day of Christmas my true love gave to me eleven pipers piping. 	Pipers symbolize harmony, music, and the power of emotional expression. Those born under this sign have a deeply artistic and intuitive nature, using creativity to bring people together. They are emotionally in tune with others, often serving as the mediators and peacemakers in their circles. Whether through music, writing, or simple heartfelt conversations, they have a way of uplifting spirits and creating a sense of unity.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    case "Twelve Drummers Drumming":
      zImageObj.src = "https://github.com/rem357/idm231-rem357/blob/main/12%20images/12-1.png?raw=true";
      zDateRangeObj.innerHTML = "Dec 22 - Jan 19";
      zDescriptionObj.innerHTML = "On the twelfth day of Christmas my true love gave to me twelve drummers drumming. Drummers represent rhythm, discipline, and balance—qualities that those born under this sign embody in every aspect of life. They have a strong sense of justice and fairness, ensuring that everything they do aligns with their core values. They are persistent and determined, keeping their momentum even in the face of challenges. Their ability to bring people together and maintain harmony makes them natural leaders and respected voices in any community.";
      DisplayAreaObj.classList.add("showMe");
      DisplayAreaObj.classList.remove("hideMe");
      playAudio("SOUND");
      break;

    default:
      console.log("ERROR: INVALID DAY!");

    
  }
}




// Close button functionality
CloseBtnObj.addEventListener("click", function () {
  DisplayAreaObj.classList.remove("showMe");
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
        const month = birthDateObj.getMonth() + 1;
        const day = birthDateObj.getDate();

 // step three convert date to a zodiac sign
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      astrological_sign = 'On The Twelfth Day Of Christmas'
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
          astrological_sign = 'On The Eleventh Day Of Christmas'
        } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
          astrological_sign = 'On The Tenth Day Of Christmas'
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
          astrological_sign = 'On The Ninth Day Of Christmas'
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
          astrological_sign = 'On The Eighth Day Of Christmas'
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
          astrological_sign = 'On The Seventh Day Of Christmas'
        } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
          astrological_sign = 'On The Sixth Day Of Christmas'
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
          astrological_sign = 'On The Fifth Day Of Christmas'
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
          astrological_sign = 'On The Fourth Day Of Christmas'
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
          astrological_sign = 'On The Third Day Of Christmas'
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
          astrological_sign = 'On The Second Day Of Christmas'
        } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
          astrological_sign = 'On The First Day Of Christmas'
        }
    displayZodInfo(astrological_sign);

    } else {
    alert('Please enter a valid date');
    }
});
