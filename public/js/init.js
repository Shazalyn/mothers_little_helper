(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $("#timepicker1").timepicker();

  $(document).ready(function() {
    $('select').material_select();
  });

  $(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });
// val goTime = $("#goTimepicker").val();
    // $('.my-datepicker').datepicker([options])

  // $('.datepicker').pickadate({
  //   selectMonths: true, // Creates a dropdown to control month
  //   selectYears: 15 // Creates a dropdown of 15 years to control year
  // });

  }); // end of document ready
})(jQuery); // end of jQuery name space
