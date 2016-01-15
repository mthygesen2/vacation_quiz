$(document).ready(function(){
  $("form").submit(function(event){

    var travelingwith = $('input[name="with"]:checked').val();
    var relax = $("input[name=vacation-type]:checked").val();
    var season = $("input[name=season]:checked").val();
    var money = $("input[name=money]:checked").val();
    var length = $("input[name=length]:checked").val();

    if(money === "small"){
      $(".country").text("Thailand, Cambodia or Laos");
    }else {
      $(".country").text("Iceland, Maldives, Switzerland");
    }
      event.preventDefault();

    });
  });



    //
    //
    // //
    // //   }      if(length === "week" || "month"){
    // //       if(relax === "adventure"){
    // //       $(".country").text("Iceland, Switzerland or Antartica");
    // //     }
    // //   }

    //     if(relax === "adventure"){
    //       if(money === "small"){
    //         $(".country").text("Thailand, Cambodia or Mexico")
    //       }

    //     }
    //   }
    // }
