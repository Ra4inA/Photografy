
$("header, section, footer").css("overflow-x", "hidden");
$(".head").addClass("_animate-Active");
const animItems = document.querySelectorAll("._animate");
$("body").ready(function(){$(window).scrollTop(1);});
$(window).on("scroll", function(){
	for (let index = 0; index < animItems.length; index++){
		if($(window).scrollTop() + $(window).height() > $(animItems[index]).offset().top + $(animItems[index]).height() / 2 
			& $(window).scrollTop() < $(animItems[index]).offset().top + $(animItems[index]).height() / 2){
			$(animItems[index]).addClass("_animate-Active _anim-no-hide");
		} else {
			if($(animItems[index]).hasClass("_anim-no-hide") !== true){$(animItems[index]).removeClass("_animate-Active");}
		}
	}
});