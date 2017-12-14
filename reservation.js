$("#submit").on("click", function(event) {
      event.preventDefault();
      var newRes = {
        name: $("#reserve_name").val().trim(),
        phone: $("#reserve_phone").val().trim(),
        email: $("#reserve_email").val().trim(),
        id: $("#reserve_uniqueID").val().trim()
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
