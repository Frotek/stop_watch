refs.buttons.start.addEventListener("click", function(e) {
  startStopwatch();
});

refs.buttons.stop.addEventListener("click", function(e) {
  stopStopwatch();
});

refs.buttons.reset.addEventListener("click", function(e) {
  stopStopwatch();
  resetToDefault();
});
