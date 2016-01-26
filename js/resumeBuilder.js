 var education = {
    "schools": [
        {
            "name": "Las Positas College",
            "location": "Livermore, CA",
            "degree": "Associate of Arts",
            "major": "Fine Art",
            "dates": 2008,
        },
        {
            "name": "Dublin Beauty College",
            "location": "Dublin, CA",
            "degree": "California StateBoard Licensed Cosmetologist",
            "major": ["Cosemtology"],
            "dates" : 2010
        }
        ],
    "onlineCourses": [
        {
            "title": "Front End Development Nanodegree Course",
            "school": "Udacity",
            //"dates": 2015,
            "url": "http: //www.udacity.com/"
        },
        { 
            "title": "Front End Development, Photoshop, Design",
            "school": "Adobe Train Simple",
            //"dates": 2014,
            "url": "http: //www.trainsimple.com/"
        },
        {
            "title": "Front End Development,Design",
            "school": "CodeSchool",
            //"dates": 2015,
            "url": "www.codeschool.com"
        },
        {
            "title": "HTML,CSS, Javascript",
            "school": "Codecademy",
            //"dates": 2013,
            "url": "codecademy.com"   
        }
    ]
};

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
        
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var schoolTitle = formattedTitle + formattedSchool;
        $('.education-entry:last').append(schoolTitle);
    
        //var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        //$('.education-entry:last').append(formattedOnlineDates);
    };
} 

education.display(); 

 var work = {
    "jobs": [
        {
            "employer": "Blink Tag Inc",
            "title": "Front-end Developer",
            "location": "San Francisco, CA",
            "dates": ["2011-2014"],
            "description": "Being a contractor, I was assigned just about everything, ranging from front-end development, to photographing multi-million dollar condos across from AT&T Park. Projects included following the latest transportation trends for 511CC, managing Facebook, Pinterest, and Twitter accounts for various companies. I also wrote FourSquare tips for SFBART, and edited the homepage heroes for BART(www.bart.gov). ",
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
            
            "title": "NATCO",
            "dates": ["2013-2014"],
            "description": "The National Association of City Transportation Officials (NACTO) is a non-profit association that represents large cities on transportation issues of local, regional and national significance. NACTO is committed to raising the state of the practice for street design and transportation by building a common vision, sharing data, peer-to-peer exchange in workshops and conferences, and regular communication among member cities",
            "images" : ["images/natco.jpg", "images/subsections.jpg"],
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


            if(projects.projects[project].images.length > 0) {
    
              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
              $(".project-entry:last").append(formattedImage);
              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
              $(".project-entry:last").append(formattedImage);
        }
    }
}; 

var bio = {
    "name" : "Morgan Ashley",
    "role" : "Front-End Developer",
    "contacts" : {
        "email" : "morgan.angela.ashley@gmail.com",
        //"mobile" : "415-555-5555",
        "github" : "github.com/morgan-ashley",
        "linkedIn" : "www.linkedin.com/in/morganaashley",
        "twitter" : "@ms_morganashley",
        "location" : "San Francisco, CA"
    },
    "welcomeMessage" : "I love to program!",
    "skills" : [
        "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", 
    ],
    "bioPic" : "images/morgan.jpg"
    }

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    /* var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic); 
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage); */
       
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            $('#footerContacts').append(formattedEmail);
           //$('#topContacts').append(formattedEmail)

            //var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            //$('#footerContacts').append(formattedMobile);                
            //$('#topContacts').append(formattedMobile)

            var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
            $('#footerContacts').append(formattedGitHub);
            //$('#topContacts').append(formattedGitHub)

            var formattedLinkedIn = HTMLLinkedIn.replace("%data%", bio.contacts.linkedIn);
            $('#footerContacts').append(formattedLinkedIn);

            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            $('#footerContacts').append(formattedTwitter);
            //$('#topContacts').append(formattedTwitter)

            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            $('#footerContacts').append(formattedLocation);
            //$('#topContacts').append(formattedLocation)

            if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
            $("#skills").append(formattedSkill);
    }
      
    /* $("#header").prepend(formattedMessage);
    $("#header").prepend(formattedPic); */
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

} 

bio.display();
work.display(); 
projects.display();

/* $("#main").append(internationalizeButton); */
$("#mapDiv").append(googleMap);

