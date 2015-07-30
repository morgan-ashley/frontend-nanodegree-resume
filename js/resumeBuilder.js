 var education = {
    "schools": [
        {
            "name": "Las Positas College",
            "location": "Livermore, CA",
            "degree": "Associate of Arts",
            "major": "being awesome",
            "dates": 2008,
        },
        {
            "name": "DublinBeautyCollege",
            "location": "Dublin, CA",
            "degree": "CaliforniaStateBoardLicensedCosmetologist",
            "major": ["Cosemtology","Esthetician" ],
            "dates" : 2010
        }
   		],
    "onlineCourses": [
        {
            "title": "HTML,CSS, Javascript",
            "school": "Codecademy",
            "dates": 2013,
            "url": "codecademy.com"
        },
        { 
            "title": "Front End Development, Photoshop, Design",
            "school": "Adobe Train Simple",
            "dates": 2014,
            "url": "http: //www.trainsimple.com/"
        },
        {
            "title": "Front End Development,Design",
            "school": "CodeSchool",
            "dates": 2015,
            "url": "www.codeschool.com"
        },
        {
            "title": "Front End Development NanoDegree Course",
            "school": "Udacity",
            "dates": 2015,
            "url": "http: //www.udacity.com/"
        }
    ]
}
 education.display = function() {
	$("#education").append(HTMLschoolStart);
	for(var schools in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", education.schools[schools].name);
        $('.education-entry:last').append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
        $('.education-entry:last').append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
       
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
        $('.education-entry:last').append(formattedMajor);
	};

     $('#education').append(HTMLonlineClasses);
     $("#education").append(HTMLschoolStart);
	for(var online in education.onlineCourses) {
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var schoolTitle = formattedOnlineSchool + formattedOnlineTitle;
        $('.education-entry:last').append(schoolTitle);
        
		 var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
         $('.education-entry:last').append(formattedOnlineDates);
		// var formattedURL = HTMLonlineURL.replace("%data%". education.onlineCourses[index].url);
	};
} 

education.display(); 


 var work = {
    "jobs": [
        {
            "employer": "Hard Water",
            "title": "Server",
            "location": "San Francisco, CA",
            "dates": ["2014-2015"],
            "description": "Owned by The Slanted Door Group. Hard Water has an impressive collection of over 400 American whiskies. This not quite bar-not-quite a restaurant setting offers New Orleans cuisine with a California twist. ",
            "display": "function"
        },
        {
            "employer": "Hornblower Cruises",
            "title": "Bartender",
            "location": "San Francisco, CA",
            "dates": 2015,
            "description": "boats!",
            "display": "function"
        },
        {
            "employer": "Blink Tag Inc",
            "title": "Front-end Dev",
            "location": "San Francisco, CA",
            "dates": ["2011-2014"],
            "description": "Being a contractor, I was assigned just about everything, ranging from front-end development, to photographing multi-million dollar condos across from AT&T Park. Projects included following the latest transportation trends for 511CC, managing Facebook, Pinterest, and Twitter accounts for various companies. I also wrote FourSquare tips for SFBART, and edited the homepage heroes for BART(www.bart.gov). ",
            "display": "function"
        }
    ]
}


 work.display = function() {

	$("#workExperience").append(HTMLworkStart);
		for(var job in work.jobs){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			 $(".work-entry:last").append(formattedEmployerTitle);
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription );
			
		}

	}; 

 var projects = {
    "projects": [
        {
            
            "title": "Server",
            "dates": ["2014-2015"],
            "description": "Project description goes here",
            "images" : ["url", "url", "url"],
            "display": "function"
        },
        {
            "title": "Server",
            "dates": ["2014-2015"],
            "description": "Project description goes here",
            "images" : ["url", "url", "url"],
            "display": "function"
        },
        {
            "title": "Server",
            "dates": ["2014-2015"],
            "description": "Project description goes here",
            "images" : ["url", "url", "url"],
            "display": "function"
        }
    ]
}

 projects.display = function() {
 	for(var project in projects.projects) {
   	$("#projects").append(HTMLprojectStart);
   			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
   			$(".project-entry:last").append(formattedTitle);

   			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
   			$(".project-entry:last").append(formattedDates);

   			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
   			$(".project-entry:last").append(formattedDescription);


   			/* if(projects.projects[project].image.length > 0) {
   				for (image in projects.projects[project].images) { 
   			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
   			$(".project-entry:last").append(formattedImage);
   			
   			}
   		} */
   	}
}; 

var bio = {
	"name" : "Morgan Ashley",
	"role" : "Front-End Developer",
	"contacts" : {
		"email" : "morgan.angela.ashley@gmail.com",
		"mobile" : "925-699-6868",
		"github" : "github.com/morgan-ashley",
		"twitter" : "@ms_morganashley",
		"location" : "San Francisco, CA"
	},
	"welcomeMessage" : "I love to program!",
	"skills" : [
		"HTML", "CSS", "JavaScript"
	],
	"bioPic" : "images/morgan.jpg"
	}

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

       
// for (var contacts = 0; bio.contacts.length > contacts; contact++) {
   //  $('#footerContacts').append(HTMLcontactGeneric);
       // for (contacts in bio.contacts){ 
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
                $('#footerContacts').append(formattedEmail);
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
                $('#footerContacts').append(formattedMobile);
            var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
                $('#footerContacts').append(formattedGitHub);
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
                $('#footerContacts').append(formattedTwitter);
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
                $('#topContacts').append(formattedLocation);
       
$("#header").prepend(formattedMessage);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

 } 

bio.display();
work.display(); 
projects.display();

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

