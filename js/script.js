
var topbar = document.getElementById('topbar');

window.addEventListener('scroll', function () {



	if (this.window.pageYOffset >= 103.2) {
		topbar.classList.add('sticky');
	} else {
		topbar.classList.remove('sticky');
	}
});

$(document).ready(function () {
	$("#bars").click(function () {
		$("#bars").toggleClass("fa-times");
		$("#navbar").toggleClass("menu");
		$('.navbar').toggleClass("black");
	})

});




$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		stagePadding: 50,
		loop: true,
		margin: 10,
		nav: false,
		center: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})
});




var a = 0;
function hello() {
	a += 1;
	document.getElementById("clicks1").innerHTML = a;
	document.getElementById("click").style = "color:yellow";
}


$(document).ready(function () {


	$(".scroll").hide();
	$(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
			$('.scroll').fadeIn("fast");

		}
		else {
			$('.scroll').fadeOut("fast");
		}
	})
});


$('.scroll').click(function () {
	$("html,body").animate({
		scrollTop: 0
	}, 1000);
	return false;
});




function showmodal() {
	document.getElementById("popup").style.visibility = "visible";
}

setTimeout(showmodal, 3000)





window.onclick = function (e) {
	if (e.target == popup) {
		popup.style.visibility = "hidden";
	}
}


var i = 0;

var path = new Array();
path[0] = "img/display-8.jpeg"
path[1] = "img/display-14.jpeg"
path[2] = "img/display-20.jpeg"
path[3] = "img/Sat_20on_20the_20Rocks_edited.webp"

function swapimg() {
	document.getElementById("photo").src = path[i];
	if (i < path.length - 1) i++;
	else i = 0;


	setTimeout("swapimg()", 1000);

}





$(".tab-list").on("click", ".tab", function (e) {
	e.preventDefault();
	$(".tab").removeClass("activetab");
	$(".tab-content").removeClass("show");
	$(this).addClass("activetab");
	$($(this).attr("href")).addClass("show");
});






function myImageFunction(productSmallImg) {
	var productFullImg = document.getElementById("img-Box");
	productFullImg.src = productSmallImg.src;
}



function modal() {
	document.getElementById("popup").style.visibility = "hidden";
}

function user() {
	document.getElementById("popup").style.visibility = "visible";
}


$(document).ready(function () {
	$("#circle").click(function () {
		$(".loginform").toggleClass("right");

	})

});
