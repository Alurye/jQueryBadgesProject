$(function() {

  // your code will go here
 $.ajax({
 		url:"https://www.codeschool.com/users/amoney92.json",
 		dataType: 'jsonp',
 		success: function(response){
 			console.log(response);
 			var completedCourses = response.courses.completed;
 				for (var i = 0; i < completedCourses.length; i++) {
 				
 					 $('#badges').append('<div class="course"><h3>' + completedCourses[i].title  + 
 					 	 '</h3>' + '<img src="' + completedCourses[i].badge +'">' + 
 					 	 '<a href="'+completedCourses[i].url + '" class="btn btn-primary">See Course</a>' + ' </div>');
 				};
 			console.log(completedCourses);
 			
 		}


 });
});
