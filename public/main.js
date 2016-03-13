 $("document").ready(function() {
	// This stuff happens after the document gets loaded

	$("#popUsers").on("click", function(event) {
		// Make a GET request to /users
		$.get("/users", function(data) {
			
			//var result = data;
			// get just the first user
			// data = data[0];

			// Homework:

			// get just the names of each user
			// Dataset looks like: [{"id":1,"name":"Jacob"},{"id":2,"name":"Kellen"}]
			// I need it to look like: ["Jacob", "Kellen"]

			// Resources:
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

			//1
			/*var result = [];
			var i;
			for (i = 0; i < data.length; i = i + 1) {
				result.push(data[i].name);
			};
			*/
			// 2
			/*var result = []
			result.push(data[0].name);
			result.push(data[1].name);
			*/
			// 3
			/*var result = data.map(function(obj) { 
				return obj.name;
			});
			*/

			alert(result); // should be sum of all the elements in "numbers"

			// Bind the data to the page
			$("#dataDiv").html(JSON.stringify(result));
			
			// Put the data into a popup
			//alert(JSON.stringify(data));
		});
	});


	// coolest shit ever would be:
	/*
		Make another button, that pulls data from the twitter API
		Then put that content onto the page and format it nicely


	*/

});