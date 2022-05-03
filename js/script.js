$.ajax({
    url: "/content_en.json"
  }).done(function(content) {
    $("#greeting").html(content.greeting);
    $("#greeting_name").html(content.greeting_name);
    $("#job_title").html(content.job_title);
    $("#short_bio").html(content.short_bio);
  });