$(document).ready(function() {

  $( "form" ).submit(function(event) {
    console.log( $(this).serializeArray());
    var initialEvent = $(this).serializeArray()[0].value;
    event.preventDefault();
    $("#question").fadeOut("slow", function() {
      $("#main").append('<div class="row">' + '<div class="col s12 m2 offset-m5">' +
                        '<div class="card blue-grey darken-1">' +
                        '<div class="card-content white-text">' +
                        '<span class="card-title">' + initialEvent + '</span>' +
                        '</div> <div class="card-action"> <a href="#">Prob</a>' +
                        '</div> </div> </div>' +
                        '</div>');
      $("#sub").fadeIn("slow");
    });
  });

  var x = 2; //initial fault count
  $("#add").click(function(event) { //on add input button click
      event.preventDefault();
      $(".faults").append('<div class="input-field col s7 offset-s1">' +
                        '<input id="Fault_1" name="fault_1" type="text" class="validate">' +
                        '<label for="Fault_1"> Fault : </label> </div>' +
                        '<div class="col offset-s1">' + '<a id="add" class="btn-floating ' +
                        'btn-large waves-effect waves-light black">' + '<i class="material-icons">' +
                        'close</i></a></div>');
      x++;
  });

  $("#render").click(function(event) { //on render input button click
    var faults = $("#secondForm").serializeArray();
    $("#sub").fadeOut("slow", function() {
      for (var i = 0; i<faults.length; i++) {
        $("#main").append('<div class="row">' + '<div class="col s12 m2 offset-m5">' +
                          '<div class="card blue-grey darken-1">' +
                          '<div class="card-content white-text">' +
                          '<span class="card-title">' + faults[i].value + '</span>' +
                          '</div> <div class="card-action"> <a href="#">Prob</a>' +
                          '</div> </div> </div>' +
                          '</div>');
      }
    });
  });
});
