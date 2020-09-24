//Defined Variables
var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var lolCatJS = document.getElementById("timeEvent");
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var lolcat = document.getElementById("lolcat");
var image;
lolcat.src = image;
 var partyTimeButton = document.getElementById("partyTimeButton");

//WakeUpSelector Event
var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};

var napEvent = function()
{
    napTime = napTimeSelector.value;
};

var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};


// Show current time
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
// End Show Current Time

// Update Clock
var updateClock = function()
{
if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeUpTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Good Evening!";
} else {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Good afternoon!";
}

	showCurrentTime();
};
// End Update Clock

// Party Time Button

var isPartyTime = true;

var partyEvent = function() {

	var isPartyTime = false;

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	   partyTimeButton.innerText ='Party Time!';
	   partyTimeButton.style.backgroundColor = "#0A8DAB";}
	  else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = 'PARTY OVER!';
     partyTimeButton.style.backgroundColor = "#222";
   }
	partyEvent();
};

// End PartyTime Button

//Roll Call
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);


partyTimeButton.addEventListener('dblclick', partyEvent);
updateClock();
lolcat.src = image;
lolCatJS.innerText = messageText;
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

console.log("hello");
