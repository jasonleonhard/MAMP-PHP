
// POST function
function getData(pageName) {
  var posting = $.post("php/script0.php", {
    page_name: pageName                 /* variable: name */
  });
  
// success shows data
  posting.done(function(data){
    alert(data);
  });


// fail alerts failed
  posting.fail(function(data){
    alert("failed");
  });
}


// GET call in jQuery
$(document).ready(function(){
  getData("home");
});


/*

index.html   (jquerydb.html)

js           (scripts)
  app.js       (same)

lib          (scripts/vendor) 
  
php           (same)
  script.php    (same)
  
https://www.youtube.com/watch?v=TPHQy22-2FE
*/