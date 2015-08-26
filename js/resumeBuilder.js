

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
  "skills" : ["Front" , "End" , "Web" , "Developer"]
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

/*$("#main").prepend(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.picture);
$("#main").append(bio.welcome);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.contacts.email);
$("#main").append(bio.contacts.github);
$("#main").append(bio.contacts.location);
$("#main").append(bio.skills);*/

var education = {
  "schools" : [
    {
      "name": "Empire State College",
      "city": "Online",
      "degree": "BS",
      "majors": "Business, Management & Economics",
      "dates": "2007-2009",
      "url": "http://www.esc.edu/"
    },
    {
      "name": "University at Albany",
      "city": "Albany NY",
      "dates":"2005-2007",
      "url": "http://www.albany.edu/"
    },
    {
      "name": "Scotia-Glenville High School",
      "city": "Scotia NY",
      "degree": "Advanced Regents Diploma",
      "dates": "9/2001-1/2005",
      "url": "http://www.scotiaglenvilleschools.org/SrHS/SrHS_home.cfm"
    }
  ],
  "onlineCourses" : [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-3342528615/m-3343838767"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3581758575/m-3575058641"
    },
    {
      "title": "Responsive Images",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3574748851"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud804"
    }
  ]
}

  /*$("#main").append(school.name);
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
  $("#main").append(school.urlB);*/

/*$("#main").append(online.title);
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
$("#main").append(online.urlC);*/

var work = {
  "jobs" : [
    {
      "employer": "The Alternative Living Group Inc",
      "title": "Human Resources Manager",
      "dates": "2014-Current",
      "location": "Albany NY",
      "description": "Acted as HR Manager and generalist in non-profit agency"
    },
    {
      "employer": "The Alternative Living Group Inc",
      "title": "Family Services Coordinator",
      "dates": "2009-2013",
      "location": "Albany NY",
      "description": "Acted as FSC in non-profit agency"
    },
    {
      "employer": "Wildwood Programs Inc",
      "title": "After-School Instructor",
      "dates": "2007-2009",
      "location": "Latham NY",
      "description": "Acted as After-School Instructor in non-profit agency"
    }
  ]
}

function displayWork () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork ();

/* $("#main").append(internationalizeButton);

function inName (name) {
  name = name.trim().split(" ");
  console.log(name);
  names[1] = names[1].toUpperCase();
  names[0] = names [0].slice(0,1).toUpperCase()+names[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
} */

/*if (work.jobs.location.length > 0) {
  $("#workExperience").append(HTMLworkLocation);
  var formattedLocation = HTMLworkLocation.replace("%data%" , jobs.location);
  $("#workExperience").append(formattedSkill);
}*/


var projects = {
  "projects": [
    {
      "title": "Project One",
      "dates": "2015",
      "description": "This is Project One",
      "images": "http://placehold.it/50x50"
    },
    {
      "title": "Project Two",
      "dates": "2015",
      "description": "This is Project Two",
      "images": "http://placehold.it/50x50"
    },
    {
      "title": "Project Three",
      "dates": "2015",
      "description": "This is Project Three",
      "images": "http://placehold.it/50x50"
    }
  ]
}

function displayProjects () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

displayProjects ();

$("#mapDiv").append(googleMap);
