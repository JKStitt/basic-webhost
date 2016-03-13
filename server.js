var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
app.engine(".hbs", exphbs({
	defaultLayout: "main",
	extname: ".hbs"
}));
app.set("view engine", ".hbs");
app.use(express.static('public'));

var port = 3000;

var users = [{
		id: 1,
		name: "Wolfy"
	}, {
		id: 2,
		name: "Kellen"
	}
];

app.get("/", function(req,res) {
	res.render("home");
});

app.get("/users", function(req, res) {
	res.send(users)
});

app.get("/saysomething/:something", function(req, res) {
	var something = req.params.something;
	res.render("secondpage", {
		something: something
	});
});




app.listen(port);
console.log("App listening on port " + port);