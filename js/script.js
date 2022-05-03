$.ajax({
    url: "/content_en.json"
  }).done(function(content) {
    console.log(JSON.parse(content));
  });