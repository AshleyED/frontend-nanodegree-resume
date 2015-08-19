

/* $("#main").append(["Ashley Davison"]);

var awesomeThoughts = "I am Ashley and I am AWESOME!";

console.log (awesomeThoughts);

var funThoughts = awesomeThoughts.replace ("AWESOME!", "FUN!");

$("#main").append(funThoughts); */

var name = "Ashley Davison";
var role = "Front-End Developer";

var formattedName = HTMLheaderName.replace ("%data%" , name);
$("#header").append(formattedName);
console.log(formattedName);

var formattedRole = HTMLheaderRole.replace ("%data%", role);
$("#header").append(formattedRole);
console.log(formattedRole);
