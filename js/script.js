$.ajax({
    url: "/content_en.json"
  }).done(function(content) {
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

    content.awards_certs.forEach(element => {
        $("#award_certs").append('<div class="col-lg-4 m-15px-tb aos-init" > <div class="feature-box-02 d-flex align-items-center"> <div class="icon"><img src="'+element.image+'" alt="award"></div> <div class="media-body"> <h6>'+element.title+'</h6> <p>'+element.subtitle+'</p> </div> </div> </div>');
    });

    content.recommendations.forEach(element => {
      $("#recommendations").append('<div class="slick-track" > <div data-index="4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 568px;"> <div> <div tabindex="-1" style="width: 100%; display: inline-block;" class="aos-init"> <div class="testimonial-01 media"> <div class="avatar"><img src="'+element.image+'" alt="review comments"></div> <div class="media-body"> <p>'+element.message+'</p> <h6>'+element.author+'</h6><span>'+element.author_title+'</span> </div> </div> </div> </div> </div> </div>');
    });
  });