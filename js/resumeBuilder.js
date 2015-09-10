//Resume javascript

var bio = {
	"name": "Dale Greene",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile": "804-350-2908",
		"email": "drgjr87@gmail.com",
		"github": "dalegreene",
		"location": "Richmond, VA"
	},
	"welcome": "Welcome to my resume!",
	"skills": ["Front-End Web Development", "Computer Programming", "Process Management", "Peer Coaching"],
	"picture": "images/profilepic.jpg",
	"message": "Hello and thanks for viewing my resume!"
}

var work = {
	"jobs": [
		{
			"position": "Senior Frontline Specialist",
			"employer": "Capital One",
			"dates": "January 2015-Present",
			"location": "Richmond, VA",
			"descriptions": [
				"Assist on-phone agents with escalated concerns as well as manaage projects to improve processes within the department",
				"Incorporate multi-tasking techniques to update and managed projects while assisting agents",
				"Analyze department data to find trends in order to better coach agents to improve towards achieving department goals", 
				"Facilitate development sessions to improve agents' performance",
				"Collaborate with upper level management for process improvements"
			]
		},
		{
			"position": "Fraud Intake Coordinator",
			"employer": "Capital One",
			"dates": "January 2013-January 2015",
			"location": "Richmond, VA",
			"descriptions": [
				"Handled incoming fraud calls and escalated calls from other groups, and used critical thinking skills to find the best solution for the customer",
				"Worked in a fast-paced environment and quickly adjusted to policy changes and updates",
				"Managed projects and facilitated presentations to enhance customer experience with other agents",
				"Assisted in coaching and developing new onboarding agents",
				"Earned ROAR Award honors in multiple yearly quarters for being among the top 5% in performance within the department"
			]
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Montgomery College",
			"location": "Rockville, MD",
			"degree": "Associates in Sciences",
			"majors": ["Electrical Engineering"],
			"dates": 2012,
			"url": "http://www.montgomerycollege.edu"
		},
		{
			"name": "Virginia Commonwealth University",
			"location": "Richmond, VA",
			"degree": "Bachelor's",
			"majors": ["Electrical Engineering"],
			"minor": "Math",
			"dates": 2016,
			"url": "http://www.vcu.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer Certification",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Project 1: Mockup Portfolio",
			"dates": "2014",
			"description": "This project consisted of mocking a web page. The fonts, characteristics, page layout, etc. had to match almost "
							+ "exactly as the original. The project implemented the use of the HTML & CSS languages.",
			"images": ["images/project1.jpg"],
			"url": "https://github.com/dalegreene/project1"
		},
		{
			"title": "Project 2: Interactive Resume",
			"dates": "2014",
			"description": "This project consisted of an interactive resume design, which is actually this one that you are currently viewing! "
							+ "The project implemented the use of the HTML, CSS, JavaScript & jQuery languages. The use of jQuery was heavily "
							+ "implemented in this project with the purpose of gaining a thorough knowledge of its concepts.",
			"images": ["images/project2.jpg"],
			"url": "https://github.com/dalegreene/frontend-nanodegree-resume"
		},
		{
			"title": "Project 3: Classic Arcade Game",
			"dates": "2015",
			"description": "This project consisted of creating a version of the classic arcade game Frogger, implementing the same basic "
							+ "concepts and functionalities as the original. The project mandated the use of HTML, CSS, JavaScript & HTML5 Canvas.",
			"images": ["images/project3.png"],
			"url": "https://github.com/dalegreene/frogger"
		},
		{
			"title": "Project 4: Website Optimization",
			"dates": "2015",
			"description": "This project was to run tests and manipulate a web application with the goal of maximizing the web page's speed. "
							+ "The project implemented the HTML, CSS, JavaScript & jQuery languages. It also implemented the use of Google's "
							+ "PageSpeed to test the page's performance.",
			"images": ["images/project4_1.png", "images/project4_2.png", "images/project4_3.png"],
			"url": "https://github.com/dalegreene/frontend-nanodegree-mobile-portfolio"
		},
		{
			"title": "Project 5: Neighborhood Map",
			"dates": "2015",
			"description": "This project consisted of constructing  full page map using Google's API. Functionalities included "
							+ "accessing & using the APIs of public data sources (i.e. Google, Foursquare, etc.) and collecting "
							+ "a list of popular places within a neighborhood's boundaries and labeling them with markers on the map. "
							+ "Also, a search bar needed to be added in order to filter the list of places that populated. This project "
							+ "involved the use of the HTML, CSS, JavaScript & jQuery languages.",
			"images": ["images/project5.png"],
			"url": "https://github.com/dalegreene/Project-5---Neighborhood-Map"
		},
		{
			"title": "Project 6: Feed Reader Testing",
			"dates": "2015",
			"description": "This project was performed to test the feeds and functionalities of a web page using the Jasmine tester to "
							+ "make sure there are no errors. Different functionalities of the web application were tested, such as making "
							+ "sure feeds are defined and not empty, URLs are valid, menu bars function accurately, and feeds are properly "
							+ "loaded with different information from its predecessor.",
			"images": ["images/project6.png"],
			"url": "https://github.com/dalegreene/frontend-nanodegree-feedreader"
		}
	]
}

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(formattedbioPic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.message);
	$("#header").append(formattedMessage);
	var HTMLname = [HTMLmobile, HTMLemail, HTMLgithub, HTMLlocation];
	var i = 0;
	for (contact in bio.contacts) {
		var formattedContact = HTMLname[i].replace("%data%", bio.contacts[contact]);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);
		i++;
	}
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkill);
	}
}
bio.display();


work.display = function(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart)
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedworkLocation);
		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedworkDates);
		for ( description in work.jobs[job].descriptions) {
			var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descriptions[description]);
			$(".work-entry:last").append(formattedworkDescription);
		}
		
	}
}
work.display();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
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
projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
}
education.display();



//Map
$("#mapDiv").append(googleMap);



