//onload set width
$(document).ready(function() {
	resizeMainBody();
	//set the hulk
	relocatePanelContent("The Incredible Hulk");
	$('.fixed-action-btn').floatingActionButton();
});


$(".panel").click(function() {
	$(".panel").removeClass("active");
	$(this).addClass("active");

	var character = $(this)
		.children("h4")
		.text();
	relocatePanelContent(character);
	
});

function relocatePanelContent(dataItem) {
	//Move all the old content
	$('#main-body .panel-content').appendTo($('.panel-content-holder'));	
	
	var panalContent;
	
	if (dataItem == "The Incredible Hulk") {
		panalContent = $('.panel-content[data-character="hulk"]');
		//make all green
		$('.btn-floating').each(function(i, val){
				$(val).removeClass("blue").removeClass("red").removeClass("amber").removeClass("blue-grey").addClass("green");
		});
	}

	if (dataItem == "Thor") {
		panalContent = $('.panel-content[data-character="thor"]');
		
				$('.btn-floating').each(function(i, val){
			$(val).removeClass("blue").removeClass("green").removeClass("amber").removeClass("red").addClass("blue-grey");
		});
	}
	
		if (dataItem == "The Vision") {
		panalContent = $('.panel-content[data-character="vision"]');
			
		$('.btn-floating').each(function(i, val){
			$(val).removeClass("blue").removeClass("green").removeClass("amber").removeClass("blue-grey").addClass("red");
		});
	}
	
		if (dataItem == "Captain America") {
		panalContent = $('.panel-content[data-character="captain"]');
			
					$('.btn-floating').each(function(i, val){
			$(val).removeClass("red").removeClass("green").removeClass("amber").removeClass("blue-grey").addClass("blue");
		});
	}
	
		if (dataItem == "Beta Ray Bill") {
		panalContent = $('.panel-content[data-character="betaray"]');
			
		$('.btn-floating').each(function(i, val){
			$(val).removeClass("red").removeClass("green").removeClass("blue").removeClass("blue-grey").addClass("amber");
		});
	}
	
	panalContent.css('display', 'none').appendTo($("#main-body")).show(1000);
}

function resizeMainBody(){
		//total of panels
	var width = 0;
	
	var count = $(".panel").length + 1;
	var fontSize = parseFloat($("body").css("font-size")) * 15;
	//console.log(fontSize);
	width += count * fontSize;

	$("#main-body").css("width", width + "px");
}


$( window ).resize(function() {
    resizeMainBody();
});

//Remove Pulse
$('.pulse').on('mouseover', function(){
	$(this).removeClass('pulse');
});

//Expand Panel
$(".panel").mouseenter(function(){
	$(".panel").css("height", "30em");
});

//Shrink Panel
$(".panel").mouseleave(function(){
  $(".panel").css("height", "15em");
});