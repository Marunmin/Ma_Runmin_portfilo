$(document).foundation();
(function(){
	"use strict";
	console.log("seaf fired");
	//window scroll about
	var aboutInfo = document.querySelector("#aboutCon");
	//console.log(aboutInfo);
	var screenPOS;

	function displayAbout(){
		screenPOS = window.scrollY;
		//console.log(screenPOS);

		if(screenPOS>aboutInfo.offsetLeft){
			TweenMax.to(aboutInfo, 1, {y:-450, ease:Bounce.easeOut})
		}
	}

  window.addEventListener("scroll",displayAbout,false);

	//show more

	var showBut = document.querySelectorAll(".show");
	//console.log(showBut);
	var closeBut = document.querySelectorAll(".close");
	//console.log(closeBut);



	function displayInfo(e){

		//console.log("display");
		e.preventDefault();
		var whichBut = e.currentTarget.id;
		//console.log(whichBut);
		var butNum = whichBut.slice(4,5);
		//console.log(butNum);
		var displayThis = document.querySelector("#more"+butNum);
		//console.log(displayThis);



		displayThis.style.display = "block";

		for(var b = 0; b<showBut.length; b++){
		showBut[b].style.display = "none";

		}



	}

	function closeInfo(e){
		e.preventDefault();

		var closeBut = e.currentTarget.id;
		//console.log(closeBut);
		var butNum = closeBut.slice(5,6);
		//console.log(butNum);
		var closeThis = document.querySelector("#more"+butNum);
		//console.log(displayThis);




		closeThis.style.display = "none";
		for(var b = 0; b<showBut.length; b++){
		showBut[b].style.display = "block";

		}

	}

	for(var a=0; a<showBut.length; a++){
		showBut[a].addEventListener("click", displayInfo,false);

	for (var c = 0; c<closeBut.length; c++){
		closeBut[c].addEventListener("click", closeInfo,false);
	}
	}

	//friend's gallery

	var slideIndex = 1;
	var dots = document.querySelectorAll(".point");
	var prev = document.querySelector(".prev");
	var next = document.querySelector(".next");
	//console.log(dots);
	//console.log(prev);
	//console.log(next);
	showSlides(slideIndex);

	function plusSlides(n){
		showSlides(slideIndex+= n);
	}

	function currentSlide(e){
		var currentdot = e.currentTarget.id;
		//console.log(currentdot);
		var whichdot = currentdot.slice(3,4);
		//console.log(whichdot);
		var currentNum = parseInt(whichdot);
		//console.log(currentNum);
		showSlides(slideIndex = currentNum);
	}

	function showSlides(n){
		//console.log(n);
		var f;
		var slides = document.getElementsByClassName("createimage");
		if (n>slides.length){
			slideIndex = 1
		}

		if(n<1) {
			slideIndex = slides.length
		}
		for (f = 0; f<slides.length; f++){
			slides[f].style.display = "none";
		}

		for (f = 0; f<dots.length; f++){
			dots[f].className = dots[f].className.replace("active", " ");
		}

		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
	}


	for(var g=0; g<dots.length; g++){
		dots[g].addEventListener("click",currentSlide,false);
	}
	prev.addEventListener("click", function(){
		plusSlides(-1);
	},false);

	next.addEventListener("click", function(){
		plusSlides(1);
	},false);


	//display Profolio

	var thumbs = document.querySelectorAll(".allThumbs");
	//console.log(thumbs);
	var protfolio = document.querySelectorAll(".proticon");
	//console.log(protfolio);

	function showProt(e){
		//console.log("it's showing");
		var thisThumb = e.currentTarget.id;
		//console.log(thisThumb);
		var thumbNum = thisThumb.slice(5,6);
		//console.log(thumbNum);

		animateProt(thumbNum);


	}

	function animateProt(thumbNum){
		var whichProt = document.querySelector("#proticon"+thumbNum);
		//console.log(whichProt);
		for (var i = 0; i<protfolio.length; i++){
			protfolio[i].style.display = "none";

		}


	whichProt.style.display = "block";

	TweenMax.to(window,1,{scrollTo:{y:"#protCon"+thumbNum}});
	}

	for(var h = 0; h<thumbs.length; h++){
		thumbs[h].addEventListener("click",showProt,false);
	}

	function movetext(e){
		var thisThumb = e.currentTarget.id;
		//console.log(thisThumb);
		var thumbNum = thisThumb.slice(8,9);
		//console.log("it's moving");
		var textUp = document.querySelector("#head"+thumbNum);

		//console.log(textUp);

		TweenMax.to(textUp,0.5,{y:-100});


	}

	function movebacktext(e){
		var thisThumb = e.currentTarget.id;
		//console.log(thisThumb);
		var thumbNum = thisThumb.slice(5,6);
		//console.log("it's moving");
		var textUp = document.querySelector("#head"+thumbNum);

		//console.log(textUp);

		TweenMax.to(textUp,0.5,{y:0});
	}

	for(var o = 0; o<thumbs.length; o++){
		thumbs[o].addEventListener("mouseover",movetext,false);
	}
	for(var p = 0; p<thumbs.length; p++){
		thumbs[p].addEventListener("mouseout",movebacktext,false);
	}

	//goonies' gallery

	var gooniesslideIndex = 1;
	var gooniesdots = document.querySelectorAll(".TheLordoftheRingsdot");
	var gooniesprev = document.querySelector(".TheLordoftheRingsprev");
	var gooniesnext = document.querySelector(".TheLordoftheRingsnext");
	//console.log(dots);
	//console.log(prev);
	//console.log(next);

	gooniesSlides(gooniesslideIndex);

	function plusgooniesSlides(n){
		gooniesSlides(gooniesslideIndex+= n);
	}

	function currentgooniesSlide(e){
		var currentdot = e.currentTarget.id;
		//console.log(currentdot);
		var whichdot = currentdot.slice(10,11);
		//console.log(whichdot);
		var currentNum = parseInt(whichdot);
		//console.log(currentNum);
		gooniesSlides(gooniesslideIndex = currentNum);
	}

	function gooniesSlides(n){
		//console.log(n);
		var f;
		var slides = document.getElementsByClassName("TheLordoftheRingsImg");
		if (n>slides.length){
			gooniesslideIndex = 1;
		}

		if(n<1) {
			gooniesslideIndex = slides.length;
		}
		for (f = 0; f<slides.length; f++){
			slides[f].style.display = "none";
		}

		for (f = 0; f<gooniesdots.length; f++){
			gooniesdots[f].className = gooniesdots[f].className.replace("TheLordoftheRingsactive", " ");
		}

		slides[gooniesslideIndex-1].style.display = "block";
		gooniesdots[gooniesslideIndex-1].className += " TheLordoftheRingsactive";
	}


	for(var j=0; j<gooniesdots.length; j++){
		gooniesdots[j].addEventListener("click",currentgooniesSlide,false);
	}
	gooniesprev.addEventListener("click", function(){
		plusgooniesSlides(-1);
	},false);

	gooniesnext.addEventListener("click", function(){
		plusgooniesSlides(1);
	},false);

	//gal0

	var gal0slideIndex = 1;
	var gal0dots = document.querySelectorAll(".gal0point");
	var gal0prev = document.querySelector(".gal0prev");
	var gal0next = document.querySelector(".gal0next");
	//console.log(dots);
	//console.log(prev);
	//console.log(next);

	gal0Slides(gal0slideIndex);

	function plusgal0Slides(n){
		gal0Slides(gal0slideIndex+= n);
	}

	function currentgal0Slide(e){
		var currentdot = e.currentTarget.id;
		//console.log(currentdot);
		var whichdot = currentdot.slice(7,8);
		//console.log(whichdot);
		var currentNum = parseInt(whichdot);
		//console.log(currentNum);
		gal0Slides(gal0slideIndex = currentNum);
	}

	function gal0Slides(n){
		//console.log(n);
		var f;
		var slides = document.getElementsByClassName("gal0Img");
		if (n>slides.length){
			gal0slideIndex = 1;
		}

		if(n<1) {
			gal0slideIndex = slides.length;
		}
		for (f = 0; f<slides.length; f++){
			slides[f].style.display = "none";
		}

		for (f = 0; f<gal0dots.length; f++){
			gal0dots[f].className = gal0dots[f].className.replace("gal0active", " ");
		}

		slides[gal0slideIndex-1].style.display = "block";
		gal0dots[gal0slideIndex-1].className += " gal0active";
	}


	for(var k=0; k<gal0dots.length; k++){
		gal0dots[k].addEventListener("click",currentgal0Slide,false);
	}
	gal0prev.addEventListener("click", function(){
		plusgal0Slides(-1);
	},false);

	gal0next.addEventListener("click", function(){
		plusgal0Slides(1);
	},false);

	//gal1

	var gal1slideIndex = 1;
	var gal1dots = document.querySelectorAll(".gal1point");
	var gal1prev = document.querySelector(".gal1prev");
	var gal1next = document.querySelector(".gal1next");
	//console.log(dots);
	//console.log(prev);
	//console.log(next);

	gal1Slides(gal1slideIndex);

	function plusgal1Slides(n){
		gal1Slides(gal1slideIndex+= n);
	}

	function currentgal1Slide(e){
		var currentdot = e.currentTarget.id;
		//console.log(currentdot);
		var whichdot = currentdot.slice(7,8);
		//console.log(whichdot);
		var currentNum = parseInt(whichdot);
		//console.log(currentNum);
		gal1Slides(gal1slideIndex = currentNum);
	}

	function gal1Slides(n){
		//console.log(n);
		var f;
		var slides = document.getElementsByClassName("gal1Img");
		if (n>slides.length){
			gal1slideIndex = 1;
		}

		if(n<1) {
			gal1slideIndex = slides.length;
		}
		for (f = 0; f<slides.length; f++){
			slides[f].style.display = "none";
		}

		for (f = 0; f<gal1dots.length; f++){
			gal1dots[f].className = gal1dots[f].className.replace("gal1active", " ");
		}

		slides[gal1slideIndex-1].style.display = "block";
		gal1dots[gal1slideIndex-1].className += " gal1active";
	}


	for(var l=0; l<gal1dots.length; l++){
		gal1dots[l].addEventListener("click",currentgal1Slide,false);
	}
	gal1prev.addEventListener("click", function(){
		plusgal1Slides(-1);
	},false);

	gal1next.addEventListener("click", function(){
		plusgal1Slides(1);
	},false);

	//gal2

	var gal2slideIndex = 1;
	var gal2dots = document.querySelectorAll(".gal2point");
	var gal2prev = document.querySelector(".gal2prev");
	var gal2next = document.querySelector(".gal2next");
	//console.log(dots);
	//console.log(prev);
	//console.log(next);

	gal2Slides(gal2slideIndex);

	function plusgal2Slides(n){
		gal2Slides(gal2slideIndex+= n);
	}

	function currentgal2Slide(e){
		var currentdot = e.currentTarget.id;
		//console.log(currentdot);
		var whichdot = currentdot.slice(7,8);
		//console.log(whichdot);
		var currentNum = parseInt(whichdot);
		//console.log(currentNum);
		gal2Slides(gal2slideIndex = currentNum);
	}

	function gal2Slides(n){
		//console.log(n);
		var f;
		var slides = document.getElementsByClassName("gal2Img");
		if (n>slides.length){
			gal2slideIndex = 1;
		}

		if(n<1) {
			gal2slideIndex = slides.length;
		}
		for (f = 0; f<slides.length; f++){
			slides[f].style.display = "none";
		}

		for (f = 0; f<gal2dots.length; f++){
			gal2dots[f].className = gal2dots[f].className.replace("gal2active", " ");
		}

		slides[gal2slideIndex-1].style.display = "block";
		gal2dots[gal2slideIndex-1].className += " gal2active";
	}


	for(var m=0; m<gal2dots.length; m++){
		gal2dots[m].addEventListener("click",currentgal2Slide,false);
	}
	gal2prev.addEventListener("click", function(){
		plusgal2Slides(-1);
	},false);

	gal2next.addEventListener("click", function(){
		plusgal2Slides(1);
	},false);

	//selectGal

	var allGal = document.querySelectorAll(".photoGal");
	//console.log(allGal);
	var galThumb = document.querySelectorAll(".galthumb");
	//console.log(galThumb);

	function displayGal(e){
		e.preventDefault();

		//console.log("displaying");
		var thisThumb = e.currentTarget.id;
		//console.log(thisThumb);
		var whichThumb = thisThumb.slice(8,9);
		//console.log(whichThumb);
		animateThisGal(whichThumb);
	}

	function animateThisGal(whichThumb){
		var disThumb = document.querySelector("#gal"+whichThumb);
		for (var i = 0; i<allGal.length; i++){
			allGal[i].style.display = "none";
		}

		disThumb.style.display = "block";
	}

	for(var n = 0; n<galThumb.length; n++){
		galThumb[n].addEventListener("click",displayGal,false);
	}


	//scroll

	var nav = document.querySelectorAll("#mainNav li a");
	//console.log(nav);

	function scrollto(e){
		var thisNav = e.currentTarget.id;
		//console.log(thisNav);
		var navNum = thisNav.slice(3,4);
		//console.log(navNum);
		TweenMax.to(window,1, {scrollTo:{y:"#section"+navNum,offsetY:10}});

	}

	for (var z=0; z<nav.length; z++){
		nav[z].addEventListener("click",scrollto,false);
	}


	//sticky bg
	var stickbg = document.querySelector("#mainNav");
	//console.log(stickbg);
	var bgCol = "#3D3B3B";

	function changeBg(){
		TweenMax.to(stickbg,0.5,{backgroundColor:bgCol});
	}

	window.addEventListener("scroll",changeBg, false);


})();
