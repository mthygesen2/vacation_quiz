$(document).ready(function(){
  $("#travelform").submit(function(event){
    // $("#countries").children("div").hide();
    $("#countries").empty();
    var traveling_with = $('#travelform input [name=with]:checked').val();
    // var relax = $("input[name=vacation-type]:checked").val();
    // var season = $("input[name=season]:checked").val();
    // var money = $("input[name=money]:checked").val();
    // var length = $("input[name=length]:checked").val();

if (traveling_with === "solo"){
//      if(season === "spring || summer"){
//      if(length === "week || month"){
      //  if(relax === "adventure"){
         $("#countries").text("iceland").show();
       } else{
         $("#countries").text("he").show();
      }
 //   }
 //   }
 // }
  event.preventDefault();
  });

});
