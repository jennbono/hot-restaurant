module.exports +

var reservations = [
	{
		name: "Bob",
		phone: 867 + "-" + 5309,
		email: "bob@bob.email",
		id: 001
	}
]

var waitingList = [
	{
		name: "Todd",
		phone: 867 + "-" + 5310,
		email: "todd@todd.email",
		id: 002

	}
]



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
        alert("Adding reservation...");
      });
    });