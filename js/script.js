$.ajax({
  url: "/content_en.json"
}).done(function (content) {
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

  content.awards_certs.forEach(element => {
    $("#award_certs").append('<div class="col-lg-4 m-15px-tb aos-init" > <div class="feature-box-02 d-flex align-items-center"> <div class="icon"><img src="' + element.image + '" alt="award"></div> <div class="media-body"> <h6>' + element.title + '</h6> <p>' + element.subtitle + '</p> </div> </div> </div>');
  });

  content.recommendations.forEach(element => {
    $("#recommendations").append('<div class="single-recommendation" > <div data-index="4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 100%;"> <div> <div tabindex="-1" style="width: 100%; display: inline-block;" class="aos-init"> <div class="testimonial-01 media"> <div class="avatar"><img src="' + element.author_image + '" alt="review comments"></div> <div class="media-body"> <p style=" font-size: 20px; font-weight: 400; ">' + element.message + '</p> <h6>' + element.author + '</h6><span>' + element.author_title + '</span> </div> </div> </div> </div> </div> </div>');
  });


  content.experience.forEach(element => {
    $("#experience").append('<div class="resume-row aos-init"> <div class="row"> <div class="col-md-4 col-xl-3"> <div class="rb-left"> <h6>' + element.designation + '</h6><label>' + element.company_shortname + ' | ' + element.role + '</label> <p>' + element.from + ' - ' + element.to + '</p> <div class="rb-time">' + element.job_type + '</div> </div> </div> <div class="col-md-8 col-xl-9"> <div class="rb-right"> <h6>' + element.company + '</h6> <p>' + element.job_description + '</p> </div> </div> </div> </div>');
  });

  content.education.forEach(element => {
    $("#education").append('<li><span>' + element.from + '-' + element.to + '</span> <h6>' + element.course_title + '</h6> <p>' + element.institution + '</p> </li>');
  });

  content.skills.forEach(element => {
    $("#skill").append('<div class="skill-lt"> <h6>' + element.skill + '</h6><span class="count-inner"><span>' + element.rating.toString() + '</span>%</span> <div class="skill-bar"> <div class="skill-bar-in" style="width: ' + element.rating.toString() + '%;"></div> </div> </div>');
  });

  content.projects.forEach(element => {
    $("#projects").append('<div class="col-md-6"><div class="resume-row" style=" background: none; padding: 0px; margin-bottom: 10px; "> <div class="row"> <div class="col-md-12 col-xl-12"> <div><div class="project-image"><img src="' + element.image + '" /><div class="project-description"><h6>' + element.name + '</h6><label style=" color: #fff; margin-bottom: 20px; ">' + element.category + ' | ' + element.status + '</label>  <p>' + element.description + '</p> <a href="' + element.link + '" target="_blank" style="color: #fff;border-bottom:1px solid #fff;font-weight: 400;">Show Project</a></div> </div> </div> </div> </div> </div> </div> </div>');
  });


  content.lastest_posts.forEach(element => {
    $("#lastest_posts").append('<div class="col-md-6 m-15px-tb aos-init" > <div class="blog-grid"> <div class="blog-img"><img src="' + element.image + '" alt="blog post"></div> <div class="blog-info"> <div class="meta">' + element.date + ' - ' + element.platform + '</div> <h6><a href="' + element.link + '" style="cursor: none;">' + element.title + '</a></h6> </div> </div> </div>');
  });
});