const refs = {
    buttons: {
      start: document.getElementById("start"),
      stop: document.getElementById("stop"),
      reset: document.getElementById("reset")
    },
    fields: {
      hours: document.getElementById("hours"),
      minutes: document.getElementById("minutes"),
      seconds: document.getElementById("seconds")
    }
  };
  
  let actualTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  
    toString: {
      hours: "",
      minutes: "",
      seconds: ""
    }
  };
  
  let timer = null;