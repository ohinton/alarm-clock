var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $('#clock').fitText(1.3);

  function update() {
    $('#clock').html(moment().format('h:mm:ss a'));
  }

  setInterval(update, 1000);
  $("form#alarm").submit(function() {
    event.preventDefault();
    var timeInput = $("input#time").val();
    time = moment(timeInput, "hh:mm a");
    var newAlarm = new Alarm(time);
    var checkAlarm = setInterval(function(){
      if (newAlarm.alarmTrigger()) {
        alert("Alarm!");
        clearInterval(checkAlarm);
      }
    }, 1000);
    $('#alarmTime').text(timeInput);
  });
});
