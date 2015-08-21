

/* $("#main").append(["Ashley Davison"]);

var awesomeThoughts = "I am Ashley and I am AWESOME!";

console.log (awesomeThoughts);

var funThoughts = awesomeThoughts.replace ("AWESOME!", "FUN!");

$("#main").append(funThoughts); */

var name = "Ashley Davison";
var role = "Front-End Developer";

var formattedName = HTMLheaderName.replace ("%data%" , name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace ("%data%", role);
$("#header").append(formattedRole);

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
  "skills" : ["everything" , "doge" , "tree" , "axe"]
}

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%" , bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%" , bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%" , bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%" , bio.skills[3]);
  $("#skills").append(formattedSkill);
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
//work.employer = "The Alternative Living Group Inc";
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

//var formattedWork.employer = HTMLworkEmployer.replace ("%data%" , work.employer);

$("#workExperience").append(work.position);
//$("#workExperience").append(formattedWork.employer);
$("#workExperience").append(work.dates);
$("#workExperience").append(work.location);
$("#workExperience").append(work.description);

$("#workExperience").append(work.positionA);
$("#workExperience").append(work.employerA);
$("#workExperience").append(work.datesA);
$("#workExperience").append(work.locationA);
$("#workExperience").append(work.descriptionA);

$("#workExperience").append(work.positionB);
$("#workExperience").append(work.employerB);
$("#workExperience").append(work.datesB);
$("#workExperience").append(work.locationB);
$("#workExperience").append(work.descriptionB);

var project = {};
project.title = "Project One";
project.dates = "2015";
project.description = "This is Project One";
project.images = "This will be an image";

project.titleA = "Project Two";
project.datesA = "2015";
project.descriptionA = "This is Project Two";
project.imagesA = "This will be an image";

project.titleB = "Project Three";
project.datesB = "2015";
project.descriptionB = "This is Project Three";
project.imagesB = "This will be an image";

//var formattedProject = HTMLheaderName.replace ("%data%" , name);
//$("#header").append(formattedName);

$("#projects").append(project.title);
$("#projects").append(project.dates);
$("#projects").append(project.description);
$("#projects").append(project.images);

$("#projects").append(project.titleA);
$("#projects").append(project.datesA);
$("#projects").append(project.descriptionA);
$("#projects").append(project.imagesA);

$("#projects").append(project.titleB);
$("#projects").append(project.datesB);
$("#projects").append(project.descriptionB);
$("#projects").append(project.imagesB);
