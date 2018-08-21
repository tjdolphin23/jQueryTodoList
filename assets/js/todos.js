//check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//X button delete todo item
$("span").click(function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Adding a new todo 
$("input[type=text]").keypress(function(event) {
	if(event.which === 13) {
		//grab new todo text
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span>X</span>" + todoText + "</li");
	}
});