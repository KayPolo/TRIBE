/* Your code starts here */

var app = app || {};

app.main = (function() {
	console.log('JS connected');
	
	attachEvents();



	var navOffset = $('#news').offset().top - 50;


    $('.modal-footer button').click(function(){
		var button = $(this);

		if ( button.attr("data-dismiss") != "modal" ){
			var inputs = $('form input');
			var title = $('.modal-title');
			var progress = $('.progress');
			var progressBar = $('.progress-bar');

			inputs.attr("disabled", "disabled");


			button.text("Close")
					.removeClass("btn-primary")
					.addClass("btn-success")
    				.blur()
					.delay(1)
					.fadeIn(function(){
						title.text("Log in is successful");
						button.attr("data-dismiss", "modal");
					});
		}
	});

	$('#myModal').on('hidden.bs.modal', function (e) {
		var inputs = $('form input');
		var title = $('.modal-title');
		var progressBar = $('.progress-bar');
		var button = $('.modal-footer button');

		inputs.removeAttr("disabled");

		title.text("Log in");

		progressBar.css({ "width" : "0%" });

		button.removeClass("btn-success")
				.addClass("btn-primary")
				.text("Ok")
				.removeAttr("data-dismiss");
                
	});



	$('.filterButton').click(function(e) {
			e.preventDefault();

			var filterAppear = $('.filter-container div');

			filterAppear.addClass("seefilter");	
			 console.log ('filter applied!!!'); 
			 
			
	 });



    
    $(window).scroll(function(){
			var scrollPos = $(window).scrollTop();

			console.log(scrollPos);


			var stickNav = $(".menubar nav");
			stickyMenu(stickNav);

			var stickMenu = $(".menubar");
			stickyMenu(stickMenu);


			function stickyMenu(navigation){
				if(scrollPos>= navOffset){
						navigation.addClass("fixed");
						
					}
				
				else{
					navigation.removeClass("fixed");

				}

			}	




		//THis is for change the color of the links in my navigation.
		var links = [$(".link1"),$(".link2"),$(".link3"),$(".link4"),$(".link5")];

		var filter = $(".filtermenu") ;

		var newsOff = $("#news").offset().top-50;
		var runwayOff = $("#runway").offset().top-50;
		var spinoutsOff = $("#spinouts").offset().top-50;

		//News Section
			if(scrollPos >= newsOff){
				links[0].addClass('purple');
				filter.removeClass('nodisappear');

				//// $(".t1").addClass('appear');
			}else{
				links[0].removeClass('purple');
				// $(".t1").removeClass('appear');

			}

		//Runway Section
			if(scrollPos >= runwayOff){
				links[0].removeClass('purple');
				links[1].addClass('purple');
				filter.addClass('nodisappear');

	//			$(".t2").addClass('appear');
				
			}else{
				links[1].removeClass('purple');

				//$(".t2").removeClass('appear');
			}

		//Spinouts Section
			if(scrollPos >= spinoutsOff){
				links[1].removeClass('purple');
				links[2].addClass('purple');
				filter.addClass('nodisappear');

	//			$(".t3").addClass('appear');
				
			}else{
				links[2].removeClass('purple');

				//$(".t3").removeClass('appear');
			}

	
		});



	var init = function(){
		console.log('Initializing app.');
		
	};


	function attachEvents(){

  		$('nav a').click(function(e) {
			e.preventDefault();

	     	var myTarget = $(this.hash);
	     	myTarget = myTarget.length && myTarget
	      			
	        var targetOffset = myTarget.offset().top;
	       	$('html,body').animate({scrollTop: targetOffset}, 1000);
	
	     });

  	}


	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);


// NAVIGATION WITH HAMBERGUER MENU

	window.addEventListener('DOMContentLoaded', function(e){
	 	e.preventDefault();
	 	scrollEvent();



		$(window).scroll(function(){
			var scrollPos = $(window).scrollTop();

			console.log(scrollPos);

	 });
	});

// nodisplay

  	function scrollEvent(){

  		$('.sideNav a').click(function(e) {
			e.preventDefault();

	     	var myTarget = $(this.hash);
	     	myTarget = myTarget.length && myTarget
	      			
	        var targetOffset = myTarget.offset().top;
	       	$('html,body').animate({scrollTop: targetOffset}, 1000);

	       	closeNav();
	
	     });

  	}



	var mySideNav = document.getElementById("mySideNav");


	function openNav(){
		mySideNav.style.width="100vw";
		
		

	}

	function closeNav(){
		mySideNav.style.width="0";
		

	}

	document.addEventListener('DOMContentLoaded', function(){

	function addLinks(parent){ 
		parent.innerHTML += "<a href = '#news'>NEWS</a>"; 
		parent.innerHTML += "<a href = '#runway'>RUNWAY</a>";
		parent.innerHTML += "<a href = '#spinouts'>SPINOUTS</a>";
				

		
	}

		var sideNav = document.getElementById("mySideNav");
		addLinks(sideNav);
	});


