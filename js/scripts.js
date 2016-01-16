  $(document).ready(function(){
    $("form").submit(function(event){
  
      var travelingwith = $('input[name="with"]:checked').val();
      var relax = $("input[name=vacation-type]:checked").val();
      var season = $("input[name=season]:checked").val();
      var money = $("input[name=money]:checked").val();
      var length = $("input[name=length]:checked").val();
  
  
      if(money === "small") {
        if(relax === "adventure") {
          $(".country").text("Thailand, Cambodia or Laos");
        } else {
          if (money === "issue"){
            $(".country").text("Antartica, Dubai or Japan");
          } else {
            if (season === "summer" || travelingwith === "solo"){
              $(".country").text("Iceland, Maldives or Switzerland");
            } else {
              $(".country").text("Turkey, Kenya or Brazil");
            }
          }
        }
      } else {
        $(".country").text("A staycation?");
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
