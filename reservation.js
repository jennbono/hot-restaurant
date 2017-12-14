$("#add-btn").on("click", function(event) {
      event.preventDefault();
      var newRes = {
        name: $("#name").val().trim(),
        role: $("#role").val().trim(),
        age: $("#age").val().trim(),
        forcePoints: $("#force-points").val().trim()
      };

     // Question: What does this code do??
    $.post("/newres", newRes)
      .done(function(data) {
        console.log(data);
        if(reservations.length > 3 ){
 			alert("Reservations full.. Adding you to the waiting list!");
  		}else{
			alert("Your table has been reserved!");
  		};
      });
    });