//Resume javascript

var bio = {
	"name": "Dale Greene",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "804-350-2908",
		"email": "drgjr87@gmail.com",
		"github": "dalegreene",
		"linkedin": "dalegreene",
		"location": "Richmond, VA"
	},
	"welcome": "Welcome to my resume!",
	"skills": ["Java", "JavaScript", "JQuery", "CSS", "HTML", "HTML5", "C", "C++", "Unix", "Linux", "Assembly", "MATLAB", "QBasic", "Jasmine Tester", "GitHub", "Windows", "Mac OS", "Microsoft Office", "iWork"],
	"picture": "images/profilepic.jpg",
	"message": "Hello, and thanks for viewing my resume!"
}

var work = {
	"jobs": [
		{
			"position": "Senior Frontline Specialist",
			"employer": "Capital One",
			"dates": "January 2015-Present",
			"location": "Richmond, VA",
			"descriptions": [
				"Assist phone agents & management with escalated issues on policies, procedures & systems to ensure proper processes & maximize customer convenience",
				"Reduce departmental procedure errors monthly by researching accounts to find common trends and composing & facilitating help sessions to agents",
				"Improve percentages of agents' customer satisfaction survey results by providing coaching feedback to phone agents & their corresponding managers",
				"Conduct meetings with colleagues to collaborate on departmental trends in which initiatives are discussed towards statistical improvements"
			]
		},
		{
			"position": "Fraud Intake Coordinator",
			"employer": "Capital One",
			"dates": "January 2013-January 2015",
			"location": "Richmond, VA",
			"descriptions": [
				"Maintained ability to multi-task in a fast-paced call center environment by servicing customers, using resources & re-viewing account activity",
				"Investigated account activity to identify fraud, resolve discrepancies and properly notate & close cases",
				"Helped improve department month to month CSAT scores by hosting call listening sessions with the purposes of agents seeking out best practices to incorporate within their own call flow on top of maintaining above average stats within primary job role",
				"Honored as ROAR award recipient in numerous quarters - Ranked top 5% within department recognized for exceptional efforts in various statistical categories"
			]
		},
		{
			"position": "Receiving Associate",
			"employer": "Bass Pro Shops",
			"dates": "July 2012-July 2013",
			"location": "Ashland, VA",
			"descriptions": [
				"Utilized efficient teamwork skills & maintained consistency to safely process freight received at a timely pace",
				"Replenished & organized on-floor stock to maintain a pleasing floor presence for customers",
				"Worked with management to introduce & implement new stock ideas periodically to improve neatness, accessibility & safety for back stocked & on-floor merchandise"
			]
		},
		{
			"position": "Sales Associate",
			"employer": "Bass Pro Shops",
			"dates": "August 2008-July 2012",
			"location": "Ashland, VA",
			"descriptions": [
				"Maintained ability to perform various essential selling & customer service techniques, naturally greeting & acknowledging every customer to create a genuine connection",
				"Attended STAR Luncheon monthly for consistently submitted customer compliments",
				"Suggested floor setups that were implemented to increase potential sales for certain products"
			]
		},
		{
			"position": "Sales Associate",
			"employer": "Dillard's",
			"dates": "September 2007-August 2009",
			"location": "Glen Allen, VA",
			"descriptions": [
				"Influenced returning business to store by building personal relationships with customers",
				"Achieved top percentile in monthly sales every month by utilizing probing & suggestive selling techniques to discover customer needs"
			]
		},
		{
			"position": "Engineering Researcher",
			"employer": "Research for Engineering Undergraduates",
			"dates": "June 2007-August 2007",
			"location": "Huntsville, AL",
			"descriptions": [
				"Researched at Alabama A&M University various characteristics of microelectromechanical systems sensors used for military security",
				"Explored specific findings within a team environment which included observing the sensors’ functionality & determined accuracy readings based on distances away from home base",
				"Collaboratively composed a 15-page research paper on findings & conducted a presentation on obtained research to military personnel"
			]
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Virginia Commonwealth University",
			"location": "Richmond, VA",
			"degree": "Bachelor of Science",
			"majors": ["Electrical Engineering"],
			"minor": "Math",
			"dates": "May 2017",
			"url": "http://www.vcu.edu"
		},
		{
			"name": "Montgomery College",
			"location": "Rockville, MD",
			"degree": "Associate of Science",
			"majors": ["Electrical Engineering"],
			"dates": "January 2012",
			"url": "http://www.montgomerycollege.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Certification",
			"school": "Udacity",
			"dates": "August 2015",
			"url": "http://www.udacity.com"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Project 1: Mockup Portfolio",
			"dates": "2014",
			"description": "This project consisted of implementing the use of HTML & CSS languages to mock a web page derived from just a .pdf file. "
							+ "The fonts, characteristics, page layout, etc. had to match almost exactly as the original.",
			"images": ["images/project1.jpg"],
			"url": "https://github.com/dalegreene/Project-1---Mock-Website"
		},
		{
			"title": "Project 2: Interactive Resume",
			"dates": "2014",
			"description": "This project consisted of an interactive resume design with the use of HTML, CSS, JavaScript & jQuery, which is actually "
							+ "this one that you are currently viewing! The use of jQuery was heavily implemented in this project with the purpose "
							+ "of gaining a thorough knowledge of its concepts.",
			"images": ["images/project2.jpg"],
			"url": "https://github.com/dalegreene/Project-2---Interactive-Resume"
		},
		{
			"title": "Project 3: Classic Arcade Game",
			"dates": "2015",
			"description": "This project consisted of utilizing HTML, CSS, JavaScript & HTML5 Canvas to reinvent a version of the classic arcade game "
							+ "Frogger, implementing the same basic concepts and functionalities as the original with a few original functionalities.",
			"images": ["images/project3.png"],
			"url": "https://github.com/dalegreene/Project-3---Classic-Arcade-Game-Clone"
		},
		{
			"title": "Project 4: Website Optimization",
			"dates": "2015",
			"description": "This project was conducted using HTML, CSS, JavaScript & jQuery to run tests and manipulate a web application with "
							+ "the goal of maximizing the web page's speed. Google's PageSpeed was utilized to test the page's performance.",
			"images": ["images/project4_1.png", "images/project4_2.png", "images/project4_3.png"],
			"url": "https://github.com/dalegreene/Project-4---Website-Performance-Optimization"
		},
		{
			"title": "Project 5: Neighborhood Map",
			"dates": "2015",
			"description": "This project consisted of constructing a full page map using Google's API with the implementation of HTML, CSS, "
							+ "JavaScript & jQuery. Functionalities included accessing & using the APIs of public data sources (i.e. Google, "
							+ "Foursquare, etc.) and collecting a list of popular places within a neighborhood's boundaries and labeling them with "
							+ "markers on the map. Also, a search bar was implemented in order to filter the list of places that populated.",
			"images": ["images/project5.png"],
			"url": "https://github.com/dalegreene/Project-5---Neighborhood-Map"
		},
		{
			"title": "Project 6: Feed Reader Testing",
			"dates": "2015",
			"description": "This project was performed to test the feeds and functionalities of a web page using the Jasmine tester to "
							+ "make sure there are no errors in order to successfully run the web application. Different functionalities of "
							+ "the application were tested, such as making sure feeds are defined and not empty, URLs are valid, menu bars function "
							+ "accurately, and feeds are properly loaded with different information from its predecessor.",
			"images": ["images/project6.png"],
			"url": "https://github.com/dalegreene/Project-6---Feed-Reader-Testing"
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
	var HTMLname = [HTMLmobile, HTMLemail, HTMLgithub, HTMLlinkedin, HTMLlocation];
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



