(function($){
  $(function(){
    console.log("js is running");
    $('.button-collapse').sideNav();
    $("#timepicker1").timepicker();
    $('select').material_select();
    $('input#input_text, textarea#textarea1').characterCounter();
    var goTime = $("#goTimepicker").val();
    $('.my-datepicker').datepicker([options]);
  // $(document).ready(function() {
  // });

  // $(document).ready(function() {
  // });


// $("#info").on("click", function(){
//     console.log("hello");
//     $.ajax({
//       url: 'https://uinames.com/api/',
//       dataType: 'json',
//       success: function(data){
//       /* Act on the event */
//         console.log(data);
//         $("#info").append(data.name);
//       }
//     })

//   });//end uninames.com

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  }); // end of document ready
$("input#input_milk").on("focus", function(){
  console.log("milk focus");
  $(radio#radio_right).show();
});


})(jQuery); // end of jQuery name space
