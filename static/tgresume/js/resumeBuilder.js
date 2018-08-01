   


      var bio = {"name": "Tanya Gupta", "role": "Technical Lead for Knowledge Management and Policy/Senior Resource Management Officer, World Bank", "contacts": {"mobile":"202-596-8091","email":"gupta.tanya@gmail.com","github":"tanyagupta","twitter":"@tanyagupta","location":"Washington DC"}, "biopic":"images/tg.jpg", "welcomeMessage":"Welcome to my resume", "skills":["javascript, jQuery, HTML,CSS, app building for Web and Google Apps"] };
 
    var work={};   
    work.jobs=[];
    var job={};
    
    job.title="Front-end developer";
    job.employer="Self";
    job.url = "http://myamerica.life/static/tgportfolio/index.html"
    job.dates="2014 to Present";
    job.location="Washington DC";
    job.description="Self taught front end skills, aspiring full stack developer";
    
    work.jobs.push(job)
    
    job={};
    job.title="Senior Resource Management Officer";
    job.employer="World Bank";
    job.url="http://www.worldbank.org/"
    job.dates="1997 to Present";
    job.location="Washington DC";
    job.description="Technical lead for knowledge management, policy, and audit coordination for Budget VPU";
    
    work.jobs.push(job)
    
    job={};
    job.title="Visiting Professor";
    job.employer="North South University";
    job.url = "http://www.northsouth.edu/"
    job.dates="1995 to 1997";
    job.location="Bangladesh, Dhaka";
    job.description="Taught courses in Finance and Accounting";
    
    work.jobs.push(job)
    


    var projects={};
    projects.projects=[];
    var project_details={}
    
    project_details.title="Word Tag Cloud";
    project_details.url = "http://www.wordtagcloud.com/"
    project_details.dates="2014-2017";
    project_details.description="~240k users for combined Word/Tag Cloud apps"
    project_details.images=["../tgportfolio/assets/wordtagcloud.png"];
    
    projects.projects.push(project_details);
    
    var project_details={}
    project_details.title="Digital Citizenship Flashcards";
    project_details.url = "http://myamerica.life/flash_cards"
    project_details.dates="2017";
    project_details.description="Digital flashcards to help future citizens prepare for the civics part of their interview"
    project_details.images=["../tgportfolio/assets/statue-of-liberty.jpg"]    ; 
     
    projects.projects.push(project_details); 
    
    
    
    var project_details={}
    project_details.title="Google Apps Marketplace Add On: Pixabay";
    project_details.url = "https://chrome.google.com/webstore/detail/pixabay-free-images/joobpkaagmlbkkcijfepmlieedgmmdbj";
    project_details.dates="2017";
    project_details.description="Developed in partnership with pixabay.com to help users insert copyright free images in Google Docs"
    project_details.images=["https://pixabay.com/static/img/logo_square.png"];    
    
    projects.projects.push(project_details); 
    
    var project_details={}
    project_details.title="Google Apps Marketplace Add On: Calculator (Google Docs)";
    project_details.url = "https://chrome.google.com/webstore/detail/gtable-calculator/fknnekoeejdjcbdokeinngldblilkedp"
    project_details.dates="2016";
    project_details.description="Calculator for quick and simple operations";
    project_details.images=["../tgportfolio/assets/calc.png"];    
    
    projects.projects.push(project_details); 
    
    var project_details={}
    project_details.title="Google Apps Marketplace Add On: Calculator (Google Sheets)";
    project_details.url = "https://chrome.google.com/webstore/detail/gsheets-calc/ojfmgmplohpjbjnmddbncmeogpfjnfma"
    project_details.dates="2016";
    project_details.description="Calculator for quick and simple operations";
    project_details.images=["https://cdn.nerdwallet.com/img/icons/Calculator.svg"];    
    
    projects.projects.push(project_details); 
    
    var project_details={}
    project_details.title="Medium Article Writer Add-On for Google Docs";
    project_details.url = "https://chrome.google.com/webstore/detail/medium-article-writer/iiphgmbijeplmjgbjbnfpgapfggknfop"
    project_details.dates="2017";
    project_details.description="The Medium Article Writer Add-on for Google Docs helps authors  to create content and publish to Medium directly from Google Docs";
    project_details.images=["../tgportfolio/assets/medium.png"]; 
    projects.projects.push(project_details);   
        
       
    var project_details={}
    project_details.title="Word Cloud Add-On for Google Docs";
    project_details.url = "https://chrome.google.com/webstore/detail/word-cloud-generator/alhnlhbhnklajhmccemipdbaifocepab"
    project_details.dates="2014";
    project_details.description="Word cloud generator using d3.js ~130k users";
    project_details.images=["../tgportfolio/assets/wordtagcloud.png"]; 
    projects.projects.push(project_details);   
    
    var project_details={}
    project_details.title="Pomodoro Clock (on codepen.io)";
    project_details.url = "https://codepen.io/tanyagupta/full/xwMOEw/";
    project_details.dates="2015";
    project_details.description="Clock for keeping coding time on track";
    project_details.images=["../tgportfolio/assets/clock.jpg"];    
    
    projects.projects.push(project_details); 
    
    var project_details={}
    project_details.title="Wiki viewer (on codepen.io)";
    project_details.url = "https://codepen.io/tanyagupta/full/GoERQO";
    project_details.dates="2015";
    project_details.description="Wikipedia Search Tool";
    project_details.images=["../tgportfolio/assets/wiki.jpg"]; 
    projects.projects.push(project_details);   
 
    
    var project_details={}
    project_details.title="Tic Tac Toe";
    project_details.url = "https://codepen.io/tanyagupta/full/EPZZYy/";
    project_details.dates="2016";
    project_details.description="Play Tic Tac Toe"
    project_details.images=["../tgportfolio/assets/tictactoe.png"] ;    
    
    projects.projects.push(project_details); 

    


    
    
    
     var education = {"schools":
                        [{"name":"Spring Hill College","location":"Mobile","degree":"B.S.","majors":["Economics and Finance B.S. in Business Administration"],"dates":"1993","url":"https://www.shc.edu/"},
                        {"name":"Bentley College","location":"Waltham","degree":"MBA","majors":["Finance MBA"],"dates":"1995","url":"https://www.bentley.edu/"}],
     "onlineCourses":
                        [
                        {"title": "Beginning Javascript","school":"Udacity","dates":"2017","url":"https://classroom.udacity.com/courses/ud804"},
                        {"title": "Social Network Analysis","school":"Coursera/University of Michigan","dates":"December 2012","url":"https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=108"},
                        {"title": "Front end certification","school":"freeCodeCamp","dates":"2015-2016","url":"https://www.freecodecamp.org/tanyagupta/front-end-certification"}
                        ],
                        }

    
    var github = bio["contacts"]["github"];
   
    var email = bio["contacts"]["email"];
    var twitter = bio["contacts"]["twitter"];
    var my_location = bio["contacts"]["location"];
    
/*    
    var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contacts%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
 */
 

    var formatted_email = HTMLemail.replace("%data%",bio.contacts.email);
    
    
    var formatted_mobile = HTMLmobile.replace("%data%",bio.contacts.mobile); 
   
    var formatted_twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    
    var formatted_github = HTMLgithub.replace("%data%",bio.contacts.github);
    
    var formatted_location = HTMLlocation.replace("%data%",bio.contacts.location);
    
    var formatted_biopic = HTMLbioPic.replace("%data%",bio.biopic)
    
    
//    $("#main").html("");
//    $("#main").append(header_html);
   // $("#header").append(header_html);
 //   $("#main").append(contact_html);
 //   $("#main").append(image_html);
    
    // console.log(work.jobs[0]["location"])
    // var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[0]["location"]);
    // $(".work-entry:last").append(formattedLocation);
    
    


    
  
    $(document).click(function(loc){logClicks(loc.clientX,loc.clientY)});
  //   $("#topContacts").append(formatted_email+formatted_github+formatted_mobile+formatted_location+formatted_twitter)
//     $("#footerContacts").append(formatted_email+formatted_github+formatted_mobile+formatted_location+formatted_twitter)
  //  var formatted_contacts = HTMLcontactGeneric.replace("%contacts%",contact_html);
    // $("#topContacts").append(formatted_contacts)
    
    
 //   $("#main").append(contact_html);

//$("#main").append(internationalizeButton);

function inName(){
    var name=bio.name.split(" ")
    return name[0]+" "+name[1].toUpperCase();
    
    
}

function locationizer(work_obj){
    var res=[]
    for (var i in work_obj){
        res.push(work_obj.location)
        
    }
    
    return res;
}

    projects.display = function(){
       
        $("#projects").append(HTMLprojectStart);
     var project_html;
     projects=projects.projects;
     for (var i in projects){
        var title = HTMLprojectTitle.replace("%data%",projects[i].title);
        title = title.replace("#",projects[i].url)
         project_html=title+HTMLprojectDates.replace("%data%",projects[i].dates)+HTMLprojectDescription.replace("%data%",projects[i].description)
         +HTMLprojectImage.replace('"%data%"','"'+(projects[i].images)+'" class="proj_pics"');
         $(".project-entry:last").append(project_html)  
    }
        
    
    }();
    
    
    work.display = function(){
       
    var jobs_list = work["jobs"]
    
    for (var i=0;i<jobs_list.length;i++){
        
        $("#workExperience").append(HTMLworkStart);
        
        var employer = HTMLworkEmployer.replace("%data%",jobs_list[i]["employer"]);
        employer = employer.replace("#",jobs_list[i]["url"]);
        var title = HTMLworkTitle.replace("%data%",jobs_list[i]["title"]);
        var date = HTMLworkDates.replace("%data%",jobs_list[i]["dates"])
        var work_des = HTMLworkDescription.replace("%data%",jobs_list[i]["description"]);
        $(".work-entry:last").append(employer+title+date+work_des)    
        
    }}();
    
        
    education.display = function(){
    var edu_list =    education.schools;
    var online = education.onlineCourses;
    
    
    for (var i in edu_list){
        $("#education").append(HTMLschoolStart);
        
        
        var name = HTMLschoolName.replace("%data%",edu_list[i]["name"]);
        name.replace("#",edu_list[i]["url"])
        var degree = HTMLschoolDegree.replace("%data%",edu_list[i]["degree"])
        var dates = HTMLschoolDates.replace("%data%",edu_list[i]["dates"]);
        var majors = HTMLschoolMajor.replace("%data%",edu_list[i]["majors"]);
        var loc = HTMLschoolLocation.replace("%data%",edu_list[i]["location"]);
        $(".education-entry:last").append(name+degree+dates+loc+majors)  
    }
    
     
    $("#education").append(HTMLonlineClasses);
    
    for (var i in online){
    
         $("#education").append(HTMLschoolStart);
    
        var online_title = HTMLonlineTitle.replace("%data%",online[i].title); 
        online_title=online_title.replace("#",online[i]["url"])
        console.log(online_title)
        var online_school = HTMLonlineSchool.replace("%data%",online[i].school); 
        var online_dates  = HTMLonlineDates.replace("%data%",online[i].dates);  
       // var online_url = HTMLonlineURL.replace("%data%",online[i].url);  

          $(".education-entry:last").append(online_title+online_school+online_dates+"<br>")    
    } 
    }();
        
     
    bio.display = function(){
       
        var bio_p = HTMLbioPic.replace("%data%",bio.biopic);
        var wel = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        
        var header = HTMLheaderName.replace("%data%",bio.name);
        var role = HTMLheaderRole.replace("%data%",bio.role); 
      
       // $("#header").append(header+role)
        
         $("#header").prepend(header+role+bio_p)
        $("#header").append(wel)

        var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        var email = HTMLemail.replace("%data%",bio.contacts.email);
        var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        var github = HTMLgithub.replace("%data%",bio.contacts.github);
        var loc = HTMLlocation.replace("%data%",bio.contacts.location);
        

        $("#topContacts").append(mobile+email+twitter+github+loc);
        
        $("#footerContacts").append(mobile+email+twitter+github+loc)
       

        
        
        if(bio.skills){
        $("#header").append(HTMLskillsStart);
        var skills = bio.skills[0].split(",") 
        var skills_html="";
         for (var i=0; i<skills.length;i++){
             skills_html=skills_html+HTMLskills.replace("%data%",skills[i])
         }

         $("#skills").append(skills_html)
             //formatted_header+x+'<div class="welcome-message">'+bio.welcomeMessage+'</div>'+'<div id="skills">'+bio["skills"][0]+'</div>')
    }
        
   
        //$("#header").append(role+mobile+email+twitter+github+loc+bio_p+wel)  

        
    }();
    

    
   $("#mapDiv").append(googleMap)
    
    //   var map;
    //   function initMap() {
    //     map = new google.maps.Map(document.getElementById('mapDiv'), {
    //       center: {lat: -34.397, lng: 150.644},
    //       zoom: 8
    //     });
    //   }
      
       
    //     var formatted_name = HTMLheaderName.replace("%data%",bio.name+formatted_biopic);
    //  //'<div id="skills-h3">Skills at a Glance:</div><div id="skills"'+bio.skills[0]+'</div>');
     
     
    //  var formatted_role = HTMLheaderRole.replace("%data%",bio.role);
   
    // if(bio.skills){
    //     $("#header").append(formatted_name+formatted_role+HTMLskillsStart);
    //     var skills = bio.skills[0].split(",") 
    //     var skills_html="";
    //      for (var i=0; i<skills.length;i++){
    //          skills_html=skills_html+HTMLskills.replace("%data%",skills[i])
    //      }

    //      $("#skills").append(skills_html)
    //          //formatted_header+x+'<div class="welcome-message">'+bio.welcomeMessage+'</div>'+'<div id="skills">'+bio["skills"][0]+'</div>')
    // }