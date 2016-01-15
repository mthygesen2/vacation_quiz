$(document).ready(function(){
  $("form").submit(function(event){

    var travelingwith = $('input[name="with"]:checked').val();
    var relax = $("input[name=vacation-type]:checked").val();
    var season = $("input[name=season]:checked").val();
    var money = $("input[name=money]:checked").val();
    var length = $("input[name=length]:checked").val();

    if(money === "small" || "medium"){
      $(".country").text("Thailand, Cambodia or Laos");
    } else {
        $(".country").text("Iceland, Maldives, Switzerland");
      }

      event.preventDefault();
    });
  });
    // if(travelingwith === "solo") {
    //
    //     if(length === "month"){
    //       $("country").text("Portland");
    //     } else {
    //       if(travelingwith ==== "family") {
    //         $(".country").text("Seattle");
    //       } else if(money === "issue" && relax === "adventure"){
    //         $("country").text("Maldives, South Africa or Australia");
    //       } else if(relax === "relax"){
    //         $(".country").text("Indonesia, Japan or Brazil");
    //       } else {
    //         $(".country").text("Hawaii, Kenya or Ireland");
    //       }
    //     }
    //   } else if (travelingwith === "couple") {
    //     $(".country").text("Bali");
    //   } else {
    //     if(season === "winter"){
    //       $(".country").text("Iceland, ");
    //     } else {
    //       if (length==="less" || "week"){
    //         $(".country").text("Jamaica");
    //       } else {
    //         $(".country").text("Mongolia");
    //       }
    //     }
    //   }
    // }






    //
    //
    // //
    // //   }      if(length === "week" || "month"){
    // //       if(relax === "adventure"){
    // //       $(".country").text("Iceland, Switzerland or Antartica");
    // //     }
    // //   }
    //     }else {
    //     if(travelingwith === "solo"){
    //     if(relax === "adventure"){
    //       if(money === "small"){
    //         $(".country").text("Thailand, Cambodia or Mexico")
    //       }
    //       else $(".country").text("France, Maldives or Australia");
    //     }
    //   }
    // }
