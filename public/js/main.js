$(document).ready(function(){
  $('.put-form').on('submit', function(e){
    e.preventDefault();
    var projectElement = $(this);
    var projectUrl = projectElement.attr('action');
    var projectData = projectElement.serialize();
    $ajax({
      method: "PUT",
      url: projectUrl,
      data: projectData
    }).done(function(data){
      projectElement.remove();
      window.location = "/";
    });
  });
});
