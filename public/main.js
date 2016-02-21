$("document").ready(function() {
	// This stuff happens after the document gets loaded

	$("#popUsers").on("click", function(event) {
		// Make a GET request to /users
		$.get("/users", function(data) {
			

			// get just the first user
			// data = data[0];

			// Homework:

			// get just the names of each user
			// Dataset looks like: [{"id":1,"name":"Jacob"},{"id":2,"name":"Kellen"}]
			// I need it to look like: ["Jacob", "Kellen"]

			// Resources:
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects



			// 1


			// 2


			// 3


			// Bind the data to the page
			$("#dataDiv").html(JSON.stringify(data));
			
			// Put the data into a popup
			//alert(JSON.stringify(data));
		});
	});
});