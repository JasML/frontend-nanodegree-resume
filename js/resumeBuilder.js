

// console.log(header);

// Array of skills
// var skills = 
// ["CSS", "HTML", "Version Control"];

// Create a bio object
var bio = {
	"name" : "Jasmine Minteer-Levine",
	"role" : "Web Developer",
	"contacts" : {
		"location" : "Clinton, WA",
		"email" : "jasbethml@gmail.com",
		"github" : "JasML"
	},
	"pictureURL" : "images/fry.jpg",
	"welcomeMessage" : "Hello World!",
	"skills" : [
		"CSS", "HTML", "JS", "Version Control"]
}

// Create a work object (using JSON)
var work = {
	"jobs" : [
		{
			"employer" : "The Boeing Company",
			"title" : "Guidance, Navigation, and Controls Engineer",
			"location" : "Everett, WA",
			"dates" : "2005-present",
			"description" : "Autopilot Control Law Design"
		},
		{
			"employer" : "Washington State University",
			"title" : "Research Assistant",
			"location" : "Pullman, WA",
			"dates" : "2004-2005",
			"description" : "Decentralized Controls Research"
		}
	],
	"display" : function() {
		for (job in work.jobs) {
			// Place Header for work experience section
			$("#workExperience").append(HTMLworkStart);
			// Format data
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			// Display on resume
			$(".work-entry:last").append(formattedEmployer+formattedTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

work.display();

// Create a projects object
var projects = {
	"project" : [
		{
			"title" : "Project1",
			"dates" : "Dec 2014",
			"description" : "Udacity Mug",
			"images" : "images/bio.jpg"
		},
		{
			"title" : "Project2",
			"dates" : "Jan 2015",
			"description" : "TBD",
			"images" : "images/197x148.gif"
		},
		{
			"title" : "Project3",
			"dates" : "Jan 2015",
			"description" : "TBD",
			"images" : "images/bio.jpg"
		}
	],
	"display" : function() {
		for (project in projects.project) {
			// Place Header for work experience section
			$("#projects").append(HTMLprojectStart);
			// Format data
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[project].title);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);
			var formattedImages = HTMLprojectImage.replace("%data%",projects.project[project].images);
			// Display on resume
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			$(".project-entry:last").append(formattedImages);
		}
	}
};

projects.display();

// Create an education object (using JSON)
var education = {
	"schools" : [
		{
			"name" : "Montana Tech of the University of Montana",
			"location" : "Butte, MT",
			"degree" : "BS",
			"majors" : [
				"General Engineering"
				],
			"dates" : "1998-2002",
			"website" : "www.mtech.edu"
		},
		{
			"name" : "Washington State University",
			"location" : "Pullman, WA",
			"degree" : "MS",
			"majors" : [
				"Electrical Engineering"
				],
			"dates" : "2003-2005",
			"website" : "www.wsu.edu"
		}
	],
	"onlineCourses" : [
		{
			"school" : "Udacity",
			"dates" : "Nov 2014-Present",
			"url" : "www.udacity.com",
			"title" : "Intro to HTML and CSS"
		},
		{
			"school" : "Udacity",
			"dates" : "Nov 2014-Present",
			"url" : "www.udacity.com",
			"title" : "How to Use Git and GitHub"
		}
	]
};

// Format name
var formattedName = HTMLheaderName.replace("%data%",bio.name);

// Format role (position being sought)
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

// Format email
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);

// Format address
var formattedContactGeneric = HTMLcontactGeneric.replace("%data%",bio.contacts.location).replace("%contact%","location");

// Format welcome message
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

// Format bio pic
var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);

// skills
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
		// Format data
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
		// Display on resume
		$("#skills").append(formattedSkill);	
	}
}


// Internationalize button
$("#main").append(internationalizeButton);

// Log clock locations on resume
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// Format cell phone number
var formattedCell = HTMLmobile.replace("%data%",bio.contacts.mobile);

// Format gitHub link
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);


// Add name and role to header element
// if (bio.skills.length > 0) {
// 	$("#header").prepend(formattedSkills);
// }
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedCell);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedContactGeneric);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Add a Google map with all the places I've lived and Worked
$('#mapDiv').append(googleMap);
