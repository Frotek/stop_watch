const resetToDefault = function() {
  actualTime.hours = 0;
  actualTime.minutes = 0;
  actualTime.seconds = 0;
  actualTime.toString.hours = 0;
  actualTime.toString.minutes = 0;
  actualTime.toString.seconds = 0;
  refs.fields.hours.innerHTML = "HH";
  refs.fields.minutes.innerHTML = "MM";
  refs.fields.seconds.innerHTML = "SS";
};

const startStopwatch = function() {
  if (timer == null) {
    refs.fields.hours.innerHTML = "00";
    refs.fields.minutes.innerHTML = "00";
    refs.fields.seconds.innerHTML = "00";

    timer = setInterval(function() {
      if (actualTime.seconds < 59) { 
        actualTime.seconds += 1;
      } else {
        actualTime.minutes += 1;
        actualTime.seconds = 0;

        if (actualTime.minutes < 59) {
          //czy możemy dodać kolejną minutę?
          actualTime.minutes += 1;
        } else {
          actualTime.hours += 1;
          actualTime.minutes = 0;
        }
      }

      addZeroStringAtStart();
      updateView(); 
      console.log(actualTime);
    }, 1000);
  }
};

const stopStopwatch = function() {
  clearInterval(timer);
  timer = null;
};

const updateView = function() {
  refs.fields.seconds.innerHTML = actualTime.toString.seconds;
  refs.fields.minutes.innerHTML = actualTime.toString.minutes;
  refs.fields.hours.innerHTML = actualTime.toString.hours;
};

const addZeroStringAtStart = function() {
  if (actualTime.seconds < 10) {
    actualTime.toString.seconds = "0" + actualTime.seconds;
  } else {
    actualTime.toString.seconds = actualTime.seconds;
  }

  if (actualTime.minutes < 10) {
    actualTime.toString.minutes = "0" + actualTime.minutes;
  } else {
    actualTime.toString.minutes = actualTime.minutes;
  }

  if (actualTime.hours < 10) {
    actualTime.toString.hours = "0" + actualTime.hours;
  } else {
    actualTime.toString.hours = actualTime.hours;
  }
};
