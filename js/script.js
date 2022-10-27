//VARIABLES
var backend_url = "https://tame-skirt-duck.cyclic.app";

//play click sound click.mp3 on button and link click
$("button, a").click(function () {
  var audio = new Audio('click.mp3');
  audio.play();
});

initPage();

function initPage() {
  var lang = "en";

  var storedlang = localStorage.getItem("lang");
  if(storedlang != null) {
    lang = storedlang;
  }

  if(lang == "en") {
    $("#lang_en").addClass("active");
    $("#lang_fr").removeClass("active");
  } else {
    $("#lang_fr").addClass("active");
    $("#lang_en").removeClass("active");
  }
  
  $.ajax({
    url: "/lang/content_"+lang+".json"
  }).done(function (content) {
    $("#cta").html(content.cta);
    $("#greeting").html(content.greeting);
    $("#greeting_name").html(content.greeting_name);
    $("#job_title").html(content.job_title);
    $("#short_bio").html(content.short_bio);
    $("#full_bio").html(content.bio.full_bio);
    $("#bio_name").html(content.bio.extras.name);
    $("#bio_location").html(content.bio.extras.location);
    $("#bio_interests").html(content.bio.extras.interests);
    $("#bio_hobbies").html(content.bio.extras.hobbies);
    $("#bio_phone").html(content.bio.extras.phone);
    $("#bio_email").html(content.bio.extras.email);
    $("#bio_languages").html(content.bio.extras.languages);
    $("#bio_fun_fact").html(content.bio.extras.fun_fact);
    $("#contact_title").html(content.contacts.title);
    $("#contact_subtitle").html(content.contacts.subtitle);
    $("#contact_say_something").html(content.contacts.say_something);
    $("#contact_phone").html(content.contacts.phone);
    $("#contact_email").html(content.contacts.email);
    $("#contact_phonetop").html(content.contacts.phone);
    $("#contact_emailtop").html(content.contacts.email);
    $("#contact_address").html(content.contacts.address);
  
    $("#award_certs").html("");
    content.awards_certs.forEach(element => {
      $("#award_certs").append('<div class="col-lg-4 m-15px-tb aos-init" > <div class="feature-box-02 d-flex align-items-center"> <div class="icon"><img src="' + element.image + '" alt="award"></div> <div class="media-body"> <h6>' + element.title + '</h6> <p>' + element.subtitle + '</p> </div> </div> </div>');
    });
  
    $("#recommendations").html("");
    content.recommendations.forEach(element => {
      $("#recommendations").append('<div class="single-recommendation" > <div data-index="4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 100%;"> <div> <div tabindex="-1" style="width: 100%; display: inline-block;" class="aos-init"> <div class="testimonial-01 media"> <div class="avatar"><img src="' + element.author_image + '" alt="review comments"></div> <div class="media-body"> <p style=" font-size: 14px; font-weight: 400; ">' + element.message + '</p> <h6>' + element.author + '</h6><span>' + element.author_title + '</span> </div> </div> </div> </div> </div> </div>');
    });
  
  
    $("#experience").html("");
    content.experience.forEach(element => {
      $("#experience").append('<div class="resume-row aos-init"> <div class="row"> <div class="col-md-4 col-xl-3"> <div class="rb-left"> <h6>' + element.designation + '</h6><label>' + element.company_shortname + ' | ' + element.role + '</label> <p>' + element.from + ' - ' + element.to + '</p> <div class="rb-time">' + element.job_type + '</div> </div> </div> <div class="col-md-8 col-xl-9"> <div class="rb-right"> <h6>' + element.company + '</h6> <p>' + element.job_description + '</p> </div> </div> </div> </div>');
    });
  
    $("#education").html("");
    content.education.forEach(element => {
      $("#education").append('<li><span>' + element.from + '-' + element.to + '</span> <h6>' + element.course_title + '</h6> <p>' + element.institution + '</p> </li>');
    });
  
    $("#skill").html("");
    content.skills.forEach(element => {
      $("#skill").append('<div class="skill-lt"> <h6>' + element.skill + '</h6><span class="count-inner"><span>' + element.rating.toString() + '</span>%</span> <div class="skill-bar"> <div class="skill-bar-in" style="width: ' + element.rating.toString() + '%;"></div> </div> </div>');
    });
  
    $("#projects").html("");
    content.projects.forEach(element => {
      $("#projects").append(
        '<div class="col-md-6">' +
        '<div class="project-card" style=" background: none; padding: 0px; margin-bottom: 10px; ">' +
        '<div class="row"> ' +
        '<div class="col-md-12 col-xl-12">' +
        '<div style="background-color: ' + element.bg_color + ';background-image: url("' + element.image + '");">' +
        '<div class="project-image">' +
        '<div class="project-description">' +
  
        '<div class="project-header">' +
        '<div class="project-icon">' +
        '<img src="' + element.icon + '" />' +
        '</div>' +
        '<div class="project-category">' +
        '<p>' + element.category + '</p>' +
        '</div>' +
        '</div>' +
  
        '<h6 class="project-title">' + element.name + '.</h6>' +
        '<p class="project-details" style="display:none">' + element.description + '</p>' +
        '<p class="project-status">' + element.status + '</p>' +
        '<p class="project-tags">' + element.tags + '</p>' +
        '<a class="project-link" style="display:none;color: #fff;font-weight: 400;" href="' + element.link + '" target="_blank">Show Project</a>' +
        '</div>' +
  
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
      );
    });
  
    $("#lastest_posts").html("");


    //get posts with {"title": "Blockchain: People want their freedoms back", "link": "https://medium.com/coinmonks/blockchain-people-want-their-freedoms-back-e25f21ebbde2?source=rss-4285b4d818c8------2", "author": "Adinortey Lawerteh", "published": 1651429839000, "created": 1651429839000, "category": [ "cryptocurrency", "blockchain", "decentralization", "government", "web3" ],} from https://tame-skirt-duck.cyclic.app/posts
    $.ajax({
      url: "https://tame-skirt-duck.cyclic.app/posts",
      type: "GET",
      dataType: "json",
      success: function (data) {
       
        $.each(data.items, function (index, element) {
          console.log("HERE");
          console.log(element);
          //format date
          var date = new Date(element.published);
          var month = date.toLocaleString('default', { month: 'short' });
          var day = date.getDate();
          var year = date.getFullYear();
          var formattedDate = month + " " + day + ", " + year;

          //extract img from element.content html
          var img = $(element.content).find('img').attr('src');

          $("#lastest_posts").append('<div class="col-md-3 m-15px-tb aos-init" > <div class="blog-grid"> <div class="blog-img"><a href="' + element.link + '" style="cursor: none;" target="_blank"><img src="' + img + '" alt="blog post"></a></div> <div class="blog-info"> <div class="meta">' + formattedDate + ' -  Medium </div> <h6><a href="' + element.link + '" style="cursor: none;" target="_blank">' + element.title + '</a></h6> </div> </div> </div>');
        });
      },
      error: function (data) {
        console.log(data);
      }
    });



    // content.lastest_posts.forEach(element => {
    //   $("#lastest_posts").append('<div class="col-md-6 m-15px-tb aos-init" > <div class="blog-grid"> <div class="blog-img"><img src="' + element.image + '" alt="blog post"></div> <div class="blog-info"> <div class="meta">' + element.date + ' - ' + element.platform + '</div> <h6><a href="' + element.link + '" style="cursor: none;">' + element.title + '</a></h6> </div> </div> </div>');
    // });
  });
}



window.addEventListener("scroll", function () {
  var currentpage;
  var elementTarget = document.getElementById("contactus");
  if (window.scrollY <= (elementTarget.offsetTop + elementTarget.offsetHeight) - 10) {
    console.log("You are at contact");
    currentpage = "contact";
  }


  var elementTarget = document.getElementById("blog");
  //Sbtract 100 to decrease how long until we are able to reach contact section
  if (window.scrollY <= (elementTarget.offsetTop + elementTarget.offsetHeight) - 100) {
    console.log("You are at blog");
    currentpage = "blog";
  }

  var elementTarget = document.getElementById("work");
  if (window.scrollY <= (elementTarget.offsetTop + elementTarget.offsetHeight) - 10) {
    console.log("You are at works");
    currentpage = "work";
  }
 
  var elementTarget = document.getElementById("resume");
  if (window.scrollY <= (elementTarget.offsetTop + elementTarget.offsetHeight) - 10) {
    console.log("You are at resume");
    currentpage = "resume";
  }

  var elementTarget = document.getElementById("about");
  if (window.scrollY <= (elementTarget.offsetTop + elementTarget.offsetHeight) - 10) {
    console.log("You are at about");
    currentpage = "about";
  }

  var elementTarget = document.getElementById("home");
  if (window.scrollY <= (elementTarget.offsetTop + elementTarget.offsetHeight) - 10) {
    console.log("You are home");
    currentpage = "home";
  }

  //call to activate menu item
  setCurrentActiveMenu(currentpage);

});

function setCurrentActiveMenu(currentpage) {
  switch (currentpage) {
    case "home":
      $("#menu_home").addClass("active");
      $("#menu_about").removeClass("active");
      $("#menu_resume").removeClass("active");
      $("#menu_work").removeClass("active");
      $("#menu_blog").removeClass("active");
      $("#menu_contact").removeClass("active");
      break;

    case "about":
      $("#menu_home").removeClass("active");
      $("#menu_about").addClass("active");
      $("#menu_resume").removeClass("active");
      $("#menu_work").removeClass("active");
      $("#menu_blog").removeClass("active");
      $("#menu_contact").removeClass("active");
      break;

    case "resume":
      $("#menu_home").removeClass("active");
      $("#menu_about").removeClass("active");
      $("#menu_resume").addClass("active");
      $("#menu_work").removeClass("active");
      $("#menu_blog").removeClass("active");
      $("#menu_contact").removeClass("active");
      break;


    case "work":
      $("#menu_home").removeClass("active");
      $("#menu_about").removeClass("active");
      $("#menu_resume").removeClass("active");
      $("#menu_work").addClass("active");
      $("#menu_blog").removeClass("active");
      $("#menu_contact").removeClass("active");
      break;


    case "blog":
      $("#menu_home").removeClass("active");
      $("#menu_about").removeClass("active");
      $("#menu_resume").removeClass("active");
      $("#menu_work").removeClass("active");
      $("#menu_blog").addClass("active");
      $("#menu_contact").removeClass("active");
      break;

    case "contact":
      $("#menu_home").removeClass("active");
      $("#menu_about").removeClass("active");
      $("#menu_resume").removeClass("active");
      $("#menu_work").removeClass("active");
      $("#menu_blog").removeClass("active");
      $("#menu_contact").addClass("active");
      break;

    default:
      $("#menu_home").addClass("active");
      $("#menu_about").removeClass("active");
      $("#menu_resume").removeClass("active");
      $("#menu_work").removeClass("active");
      $("#menu_blog").removeClass("active");
      $("#menu_contact").removeClass("active");
      break;
  }
}


function setLang(lang) {
  localStorage.setItem("lang", lang)
  initPage();
}


$(".toggler-menu").click(function() {
  $(".toggler-menu div").toggleClass("active");
  $(".header-left").toggleClass("menu-open")
  console.log("toggler click");
});



//submit contact for #contactform
$("#contactform").submit(function (e) {
  e.preventDefault();
  var name = encodeURI($("#name").val());
  var email = encodeURI($("#email").val());
  var message = encodeURI($("#message").val());
  var subject = encodeURI($("#subject").val());

  //set button label of button #sendbutton to sending svg from img loading.svg
  $("#sendbutton").html('<img src="img/loading.svg" alt="loading" width="40" height="40">');

  // console log all inputs
  console.log(name);
  console.log(email);
  console.log(message);
  console.log(subject);
  var data = {
    name: name,
    email: email,
    message: message,
    subject: subject
  };

  //convert data to query string
  var dataString = $.param(data);


  //wait 2 seconds before sending
  setTimeout(function () {
  $.ajax({
    type: "GET",
    url: backend_url + "/contact?" + dataString,
    data: data,
    success: function (data) {
    //clear form
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
    $("#subject").val("");

    //set button label of button #sendbutton to sent
    $("#sendbutton").html('<img src="img/sent.svg" alt="loading" width="18" height="18">');

    //wait 2 seconds and set button label of button #sendbutton to send
    setTimeout(function () {
      $("#sendbutton").html("Send Message");
    }, 2000);

    },
    error: function (data) {
      alert("Sorry, there was an error sending your message. Please try again later");
    }
  });
  }, 2000);
});


//code typing effect on #code
var typed = new Typed('#code', {
  strings: [
    ' ',
    '<span class="code_line">1</span> &nbsp;&nbsp; <span class="code_var">const</span> <span class="code_variables">resumegene</span> = <span class="code_values">require("resumegene")</span><br>'+
    '<span class="code_line">2</span> &nbsp;&nbsp; <br>'+
    '<span class="code_line">3</span> &nbsp;&nbsp; <span class="code_var">await</span> resumegene.generateResume.<span class="code_method">create</span>({<br>'+
    '<span class="code_line">4</span> &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span class="code_var">name:</span> <span class="code_variables">"Adinortey Lawerteh"</span>,<br>'+
    '<span class="code_line">5</span> &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span class="code_var">inlink:</span> <span class="code_variables">"https://linkedin.com/in/adinortey360"</span>,<br>'+
    '<span class="code_line">7</span> &nbsp;&nbsp; });<br>'+
    '<span class="code_line">8</span><br>'+
    '<span class="code_line">9</span> &nbsp;&nbsp; console.log("Ready! generating resume ...")'
    
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
  cursorChar: '|',
  contentType: 'html', // or text
  // defaults to false for infinite loop
  loopCount: false,
  // callback that executes once all strings are typed
  onComplete: (self) => { },
  // starting callback function before each string
  preStringTyped: (arrayPos, self) => { },
  //callback for every typed string
  onStringTyped: (arrayPos, self) => { },
  // callback for reset
  onReset: (self) => { },
  // callback after stop
  onStop: (arrayPos, self) => { },
  // callback after backspacing
  onBackspace: (arrayPos, self) => { },
  // callback for every typed key
  onKeyTyped: (arrayPos, self) => { },
  // callback for when the typing is completed
  onTypingPaused: (arrayPos, self) => { },
  // callback for when the typing is resumed
  onTypingResumed: (arrayPos, self) => { },
  // callback for when reset is called
  onReset: (self) => { },

});


