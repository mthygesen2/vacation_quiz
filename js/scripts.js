$(document).ready(function(){
  $(".travelform").submit(function(){
    $(".answer").empty();
    var traveling_with = $("input [name=traveling-with]:checked").val();
    var relax = $("input[name=vacation-type]:checked").val();
    var season = $("input[name=season]:checked").val();
    var money = $("input[name=money]:checked").val();
    var length = $("input[name=length]:checked").val();
    
    if (traveling_with === "solo"){
      if()
    }
  });

});
