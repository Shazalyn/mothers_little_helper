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

// var compareName = data.child.kid_name;
// var getNameInfo = function(compareName){


// $.ajax({
//   url: "https://www.behindthename.com/api/lookup.php?name=" + compareName +"&key=sh111457",
//  method: "GET",
//   success: function(data) {
//     console.log(data.name);
//   }
// });
// }; //end of getNameInfo
// console.log(getNameInfo);
// var xhr = new XMLHttpRequest();
// xhr.open("GET",  "https://www.behindthename.com/api/lookup.php?name=mary&key=sh111457", false);
// xhr.setRequestHeader('Content-Type', 'text/xml');
// xhr.send();

// xmlDocument = xhr.responseXML;
// console.log(xhr.status);
// console.log(xhr.statusText);
// console.log(xmlDocument.childNodes['0'].textContent);
// //add a click event
// $("p#info").on("click", function(){
//   console.log("hello api");
// });
$("#info").on("click", function(){
    console.log("hello");
    $.ajax({
      url: 'https://uinames.com/api/',
      dataType: 'json',
      success: function(data){
      /* Act on the event */
        console.log(data);
        $("#info").append(data.name);
      }
    })

  });//end uninames.com

  // $('.datepicker').pickadate({
  //   selectMonths: true, // Creates a dropdown to control month
  //   selectYears: 15 // Creates a dropdown of 15 years to control year
  // });

  }); // end of document ready
})(jQuery); // end of jQuery name space
