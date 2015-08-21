

/* $("#main").append(["Ashley Davison"]);

var awesomeThoughts = "I am Ashley and I am AWESOME!";

console.log (awesomeThoughts);

var funThoughts = awesomeThoughts.replace ("AWESOME!", "FUN!");

$("#main").append(funThoughts); */

//var name = "Ashley Davison";
//var role = "Front-End Developer";

//var formattedName = HTMLheaderName.replace ("%data%" , name);
//$("#header").append(formattedName);
//console.log(formattedName);

//var formattedRole = HTMLheaderRole.replace ("%data%", role);
//$("#header").append(formattedRole);
//console.log(formattedRole);

var bio = {
  "name" : "Ashley",
  "role" : "Developer",
  "picture" : "images/profilepic.jpg",
  "welcome" : "Hello everyone and welcome to my page",
  "contacts" : {
    "mobile" : "(518) 847-7915",
    "email" : "ashley.e.davison@gmail.com",
    "github" : "AshleyED",
    "location" : "Schenectady NY"
  },
  "skills" : "everything"
}

$("#main").prepend(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.picture);
$("#main").append(bio.welcome);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.contacts.email);
$("#main").append(bio.contacts.github);
$("#main").append(bio.contacts.location);
$("#main").append(bio.skills);

var school = {};
  school.name = "Empire State College";
  school.location = "Online";
  school.dates = "2007-2009";
  school.degree = "BS";
  school.major = "Business, Management & Economics";
  school.minor = "Concentration in Management Studies";
  school.url = "http://www.esc.edu/";

  school.nameA = "University at Albany";
  school.locationA = "Albany NY";
  school.datesA = "2005-2007";
  school.urlA = "http://www.albany.edu/";

  school.nameB = "Scotia-Glenville High School";
  school.locationB = "Scotia NY";
  school.datesB = "9/2001-1/2005";
  school.degreeB = "Advanced Regents Diploma";
  school.urlB = "http://www.scotiaglenvilleschools.org/SrHS/SrHS_home.cfm";

  $("#main").append(school.name);
  $("#main").append(school.location);
  $("#main").append(school.dates);
  $("#main").append(school.degree);
  $("#main").append(school.major);
  $("#main").append(school.minor);
  $("#main").append(school.url);

  $("#main").append(school.nameA);
  $("#main").append(school.locationA);
  $("#main").append(school.datesA);
  $("#main").append(school.urlA);

  $("#main").append(school.nameB);
  $("#main").append(school.locationB);
  $("#main").append(school.datesB);
  $("#main").append(school.degreeB);
  $("#main").append(school.urlB);

var online = {};
  online.title = "Intro to HTML and CSS";
  online.school = "Udacity";
  online.dates = "2015";
  online.url = "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-3342528615/m-3343838767";

  online.titleA = "Responsive Web Design Fundamentals";
  online.schoolA = "Udacity";
  online.datesA = "2015";
  online.urlA = "https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3581758575/m-3575058641";

  online.titleB = "Responsive Images";
  online.schoolB = "Udacity";
  online.datesB = "2015";
  online.urlB = "https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3574748851";

  online.titleC = "JavaScript Basics";
  online.schoolC = "Udacity";
  online.datesC = "2015";
  online.urlC = "https://www.udacity.com/course/viewer#!/c-ud804";

$("#main").append(online.title);
$("#main").append(online.school);
$("#main").append(online.dates);
$("#main").append(online.url);

$("#main").append(online.titleA);
$("#main").append(online.schoolA);
$("#main").append(online.datesA);
$("#main").append(online.urlA);

$("#main").append(online.titleB);
$("#main").append(online.schoolB);
$("#main").append(online.datesB);
$("#main").append(online.urlB);

$("#main").append(online.titleC);
$("#main").append(online.schoolC);
$("#main").append(online.datesC);
$("#main").append(online.urlC);

var work = {};
work.position = "Human Resources Manager";
work.employer = "The Alternative Living Group Inc";
work.dates = "2014-Current";
work.location = "Albany, NY";
work.description = "Acted as HR Manager and generalist in non-profit agency";

work.positionA = "Family Services Coordinator";
work.employerA = "The Alternative Living Group Inc";
work.datesA = "2009-2013";
work.locationA = "Albany, NY";
work.descriptionA = "Acted as FSC in non-profit agency";

work.positionB = "After-School Instructor";
work.employerB = "Wildwood Programs Inc";
work.datesB = "2007-2009";
work.locationB = "Latham, NY";
work.descriptionB = "Acted as AFter-School Instructor in non-profit agency";

$("#main").append(work.position);
$("#main").append(work.employer);
$("#main").append(work.dates);
$("#main").append(work.location);
$("#main").append(work.description);

$("#main").append(work.positionA);
$("#main").append(work.employerA);
$("#main").append(work.datesA);
$("#main").append(work.locationA);
$("#main").append(work.descriptionA);

$("#main").append(work.positionB);
$("#main").append(work.employerB);
$("#main").append(work.datesB);
$("#main").append(work.locationB);
$("#main").append(work.descriptionB);

var projects = {};
projects.title = "Project One";
projects.dates = "2015";
projects.description = "This is Project One";
projects.images = "This will be an image";

projects.titleA = "Project Two";
projects.datesA = "2015";
projects.descriptionA = "This is Project Two";
projects.imagesA = "This will be an image";

projects.titleB = "Project Three";
projects.datesB = "2015";
projects.descriptionB = "This is Project Three";
projects.imagesB = "This will be an image";

$("#main").append(projects.title);
$("#main").append(projects.dates);
$("#main").append(projects.description);
$("#main").append(projects.images);

$("#main").append(projects.titleA);
$("#main").append(projects.datesA);
$("#main").append(projects.descriptionA);
$("#main").append(projects.imagesA);

$("#main").append(projects.titleB);
$("#main").append(projects.datesB);
$("#main").append(projects.descriptionB);
$("#main").append(projects.imagesB);
