$(document).ready(function() {
  $( "form" ).submit(function( event ) {
    console.log( $( this ).serializeArray() );
    event.preventDefault();
    $("#main").fadeOut("slow", function() {
      $("#sub").fadeIn("slow");
    });
  });

  var x = 1; //initial fault count
  $("#add").click(function(event){ //on add input button click
      event.preventDefault();
      $(".faults").append('<div class="input-field col s7 offset-s1">' +
                        '<input id="Fault_1" name="fault_1" type="text" class="validate">' +
                        '<label for="Fault_1"> Fault : </label> </div>' +
                        '<div class="col offset-s1">' + '<a id="add" class="btn-floating ' +
                        'btn-large waves-effect waves-light red">' + '<i class="material-icons">' +
                        'add</i></a></div>');
  });

});
